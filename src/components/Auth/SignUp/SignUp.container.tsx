import { registerThunk } from "@/@core/infraestructure/redux/states/session/session.thunks";
import { useAppDispatch } from "@/@core/infraestructure/redux/store";
import SnackBar from "@/components/Common/Snackbar/Snackbar.component";
import useSnackbar from "@/hooks/useSnackbar";
import { registerValidation } from "@/validations/auth";
import { useFormik } from "formik";
import SignUpView from "./SignUp.view";
import { useRouter } from "next/router";

interface IValues {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const SignUpContainer = () => {
  const { open, handleClose, status, setStatus, setOpen } = useSnackbar();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: registerValidation,
    onSubmit: async ({ username, email, password }: IValues) => {
      dispatch(registerThunk({ username, email, password }))
        .unwrap()
        .then(
          () => {
            setStatus({ message: "Succesful sign up!", type: "success" });
            router.push("/");
          },
          (res) => {
            setStatus({
              message: res.error.message,
              type: "error",
            });
          }
        )
        .finally(() => {
          setOpen(true);
        });
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
