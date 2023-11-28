import { loginThunk } from "@/@core/infraestructure/redux/states/session/session.thunks";
import { useAppDispatch } from "@/@core/infraestructure/redux/store";
import SnackBar from "@/components/Common/Snackbar/Snackbar.component";
import useSnackbar from "@/hooks/useSnackbar";
import { loginValidation } from "@/validations/auth";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import SignInView from "./SingIn.view";

interface IValues {
  identifier: string;
  password: string;
}

const SignInContainer = () => {
  const { open, handleClose, status, setStatus, setOpen } = useSnackbar();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: async ({ identifier, password }: IValues) => {
      dispatch(loginThunk({ identifier, password }))
        .unwrap()
        .then(
          () => {
            setStatus({ message: "Succesful sign in!", type: "success" });
            router.push("/");
          },
          () => {
            setStatus({
              message: "Identifier or password invalid",
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
      <SignInView form={formik} />
      <SnackBar
        message={status.message}
        type={status.type}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};
export default SignInContainer;
