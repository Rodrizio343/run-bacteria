import Head from "next/head";
import AuthContainer from "@/components/Auth/Auth.container";
import { useRouter } from "next/router";

const AuthPage = () => {
  const router = useRouter();
  const {
    query: { index },
  } = router;
  return (
    <>
      <Head>
        <title>Run Bacteria | Welcome!</title>
      </Head>
      <AuthContainer initialTab={index ? +index : 0} />
    </>
  );
};
export default AuthPage;
