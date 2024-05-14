import SnackBar from "@/components/Common/Snackbar/Snackbar.component";
import useSnackbar from "@/hooks/useSnackbar";
import { registerValidation } from "@/validations/auth";
import { useFormik } from "formik";
import SignUpView from "./SignUp.view";
import { register } from "@/@core/infraestructure/session.service";

interface IValues {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const SignUpContainer = () => {
  const { open, handleClose, status, setStatus, setOpen } = useSnackbar();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: registerValidation,
    onSubmit: async ({ username, email, password }: IValues) => {
      try {
        const response = await register(username, email, password);
        response.user &&
          setStatus({
            message:
              "We have sent you an e-mail! Please, confirm your account.",
            type: "success",
          });
      } catch ({ error }: any) {
        setStatus({
          message: error.message,
          type: "error",
        });
      } finally {
        setOpen(true);
      }
    },
  });

  return (
    <>
      <SignUpView form={formik} />
      <SnackBar
        message={status.message}
        type={status.type}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};
export default SignUpContainer;
