import { useFormik } from "formik";
import ForgottenPassword from "@/components/ForgottenPassword/ForgottenPassword.view";
import { forgottenPasswordRequest } from "@/@core/infraestructure/session.service";
import SnackBar from "@/components/Common/Snackbar/Snackbar.component";
import useSnackbar from "@/hooks/useSnackbar";
import { forgottenPasswordFormValidation } from "@/validations/forgottenPassword";

const ForgottenPasswordContainer = () => {
  const { open, handleClose, status, setStatus, setOpen } = useSnackbar();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgottenPasswordFormValidation,
    onSubmit: async (values) => {
      try {
        forgottenPasswordRequest(values.email);
        setStatus({
          message:
            "We have sent you a message. If the e-mail address provided belongs to an active account, you will get a reset password link.",
          type: "success",
        });
        setOpen(true);
      } catch (error) {
        setStatus({
          message: "Something went wrong. Try again later.",
          type: "error",
        });
        setOpen(true);
      }
    },
  });
  return (
    <>
      <ForgottenPassword form={formik} />
      <SnackBar
        message={status.message}
        type={status.type}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};
export default ForgottenPasswordContainer;
