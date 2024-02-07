import AccountSettingsContainer from "@/components/Account/Settings/AccountSettings.container";
import { AuthWrapper } from "@/components/Common/AuthWrapper/AuthWrapper";
import Head from "next/head";

const AccountSettingsPage = () => {
  return (
    <AuthWrapper>
      <Head>
        <title>Your account settings</title>
      </Head>
      <AccountSettingsContainer />
    </AuthWrapper>
  );
};
export default AccountSettingsPage;
