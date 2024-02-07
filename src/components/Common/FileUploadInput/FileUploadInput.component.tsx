import { Avatar, styled } from "@mui/material";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { FormikErrors } from "formik";
import { FC, useState } from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

interface IUploadFile {
  name: string;
  label: string;
  data: { file?: File };
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<FormikErrors<{ file?: File }>> | Promise<void>;
  errors: FormikErrors<{ file?: File }>;
  preview?: string;
}

const FileUploadInput: FC<IUploadFile> = ({
  name,
  label,
  data,
  setFieldValue,
  errors,
  preview,
}) => {
  const [previewImg, setPreviewImg] = useState(preview || "");
  return (
    <>
      {preview && (
        <Avatar
          id="preview"
          alt="Preview"
          src={previewImg}
          sx={{ width: 200, height: 200, marginBottom: "1rem" }}
        />
      )}
      <Button
        component="label"
        variant="outlined"
        color="secondary"
        startIcon={<CloudUploadIcon />}
      >
        {label}
        <VisuallyHiddenInput
          type="file"
          name={name}
          onChange={(e) => {
            if (e.currentTarget.files) {
              setFieldValue(name, e.currentTarget.files[0]);
              setPreviewImg(URL.createObjectURL(e.currentTarget.files[0]));
            }
          }}
        />
      </Button>
    </>
  );
};

export default FileUploadInput;
