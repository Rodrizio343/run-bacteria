import AccountContainer from "@/components/Account/Account.container";
import { AuthWrapper } from "@/components/Common/AuthWrapper/AuthWrapper";
import Head from "next/head";

const AccountPage = () => {
  return (
    <AuthWrapper>
      <Head>
        <title>Your account</title>
      </Head>
      <AccountContainer />
    </AuthWrapper>
  );
};
export default AccountPage;
