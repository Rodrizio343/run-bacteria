import Head from "next/head";
import AuthContainer from "@/components/Auth/Auth.container";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch } from "@/@core/infraestructure/redux/store";
import { logout } from "@/@core/infraestructure/redux/states/session/session.state";

const AuthPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);

  const {
    query: { index, confirmed },
  } = router;

  return (
    <>
      <Head>
        <title>Run Bacteria | Welcome!</title>
      </Head>
      <AuthContainer
        initialTab={index ? +index : 0}
        confirmed={confirmed === "true"}
      />
    </>
  );
};
export default AuthPage;
