import { useAppSelector } from "@/@core/infraestructure/redux/store";
import UserMenuView from "./UserMenu.view";
import { selectUserSession } from "@/@core/infraestructure/redux/states/session/session.state";

const UserMenu = () => {
  const user = useAppSelector(selectUserSession);
  return <UserMenuView user={user} />;
};
export default UserMenu;
