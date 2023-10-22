import { use, useState } from "react";
import { contactMailValidation } from "@/validations/contact";
import { useFormik } from "formik";
import ContactFormView from "./ContactForm.view";
import { sendContactEmail } from "@/utils/sendContactEmail";
import { EmailJSResponseStatus } from "@emailjs/browser";
import { AlertColor } from "@mui/material";
import SnackBar from "@/components/Common/Snackbar/Snackbar.component";
import useSnackbar from "@/hooks/useSnackbar";

const ContactFormContainer = () => {
  const { open, handleClose, status, setStatus, setOpen } = useSnackbar();

  const formik = useFormik({
    initialValues: {
      subject: "",
      name: "",
      user_email: "",
      message: "",
    },
    validationSchema: contactMailValidation,
    onSubmit: async (values, { resetForm }) => {
      const response = (await sendContactEmail(
        values
      )) as EmailJSResponseStatus;
      response
        ? setStatus({ message: "Your message has been sent!", type: "success" })
        : setStatus({
            message: "Something went wrong! Try again later",
            type: "error",
          });
      resetForm();
      setOpen(true);
    },
  });

  return (
    <>
      <ContactFormView form={formik} />
      <SnackBar
        message={status.message}
        type={status.type}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};
export default ContactFormContainer;
