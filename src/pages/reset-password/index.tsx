import { logout } from "@/@core/infraestructure/redux/states/session/session.state";
import { useAppDispatch } from "@/@core/infraestructure/redux/store";
import ResetPasswordContainer from "@/components/ResetPassword/ResetPassword.container";
import Head from "next/head";
import { useEffect } from "react";

const ResetPasswordPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);
  return (
    <>
      <Head>
        <title>Run Bacteria | Reset password</title>
      </Head>
      <ResetPasswordContainer />
    </>
  );
};
export default ResetPasswordPage;
