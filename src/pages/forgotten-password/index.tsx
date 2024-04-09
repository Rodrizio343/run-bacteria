import Head from "next/head";
import ForgottenPasswordContainer from "@/components/ForgottenPassword/ForgottenPassword.container.";
import { useAppDispatch } from "@/@core/infraestructure/redux/store";
import { useEffect } from "react";
import { logout } from "@/@core/infraestructure/redux/states/session/session.state";

const ForgottenPasswordPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Run Bacteria | Forgotten password</title>
      </Head>
      <ForgottenPasswordContainer />
    </>
  );
};
export default ForgottenPasswordPage;
