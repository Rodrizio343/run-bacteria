import { useSelector } from "react-redux";
import { AppStore } from "@/@core/infraestructure/redux/store";
import AccountView from "./Account.view";

const AccountContainer = () => {
  const { user } = useSelector((state: AppStore) => state.session);
  return <AccountView user={user} />;
};
export default AccountContainer;
