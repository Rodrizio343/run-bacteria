import { selectUserSession } from "@/@core/infraestructure/redux/states/session/session.state";
import { useAppSelector } from "@/@core/infraestructure/redux/store";
import AccountView from "./Account.view";

const AccountContainer = () => {
  const user = useAppSelector(selectUserSession);
  return <AccountView user={user} />;
};
export default AccountContainer;
