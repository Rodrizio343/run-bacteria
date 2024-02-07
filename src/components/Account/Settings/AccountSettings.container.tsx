import useSnackbar from "@/hooks/useSnackbar";
import AccountSettingsView from "./AccountSettings.view";
import { useFormik } from "formik";
import {
  useAppDispatch,
  useAppSelector,
} from "@/@core/infraestructure/redux/store";
import { selectUserSession } from "@/@core/infraestructure/redux/states/session/session.state";
import { getUserThunk } from "@/@core/infraestructure/redux/states/session/session.thunks";
import { updateUserData } from "@/@core/infraestructure/session.service";
import { useRouter } from "next/router";
import SnackBar from "@/components/Common/Snackbar/Snackbar.component";

const AccountSettingsContainer = () => {
  const router = useRouter();
  const { open, handleClose, status, setStatus, setOpen } = useSnackbar();
  const user = useAppSelector(selectUserSession);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      username: user.username,
      avatar: user.avatar,
    },
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        const data = {
          username: values.username,
        };
        formData.append("data", JSON.stringify(data));
        formData.append("files.avatar", values.avatar);
        const response = await updateUserData(formData);
        if (response) {
          dispatch(getUserThunk())
            .unwrap()
            .then(() => {
              setStatus({ message: "Updated successfully!", type: "success" });
              router.push("/account");
            })
            .finally(() => {
              setOpen(true);
            });
        }
      } catch (error) {
        setStatus({
          message: "Something went wrong! Try again, please.",
          type: "error",
        });
        setOpen(true);
      }
    },
  });
  return (
    <>
      <AccountSettingsView form={formik} />
      <SnackBar
        message={status.message}
        type={status.type}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};
export default AccountSettingsContainer;
