import { resetPasswordFormValidation } from "@/validations/forgottenPassword";
import { useFormik } from "formik";
import ResetPassword from "./ResetPassword.view";
import { useRouter } from "next/router";
import { resetPasswordRequest } from "@/@core/infraestructure/session.service";
import useSnackbar from "@/hooks/useSnackbar";
import SnackBar from "@/components/Common/Snackbar/Snackbar.component";

const ResetPasswordContainer = () => {
  const router = useRouter();
  const { code } = router?.query;
  const { open, handleClose, status, setStatus, setOpen } = useSnackbar();
  const formik = useFormik({
    initialValues: {
      password: "",
      passwordConfirmation: "",
      code,
    },
    validationSchema: resetPasswordFormValidation,
    onSubmit: async ({ password, passwordConfirmation, code }) => {
      try {
        const response = await resetPasswordRequest(
          password,
          passwordConfirmation,
          code
        );
        if (response.user) {
          setStatus({
            message:
              "Your password has been updated succesfully. Please, sign in again.",
            type: "success",
          });
          setTimeout(() => {
            router.push("/auth");
          }, 3000);
        }
      } catch (error) {
        setStatus({
          message: "Something went wrong",
          type: "error",
        });
      } finally {
        setOpen(true);
      }
    },
  });
  return (
    <>
      <ResetPassword form={formik} />
      <SnackBar
        message={status.message}
        type={status.type}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};
export default ResetPasswordContainer;
