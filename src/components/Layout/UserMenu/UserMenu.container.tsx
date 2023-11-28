import { AppStore } from "@/@core/infraestructure/redux/store";
import UserMenuView from "./UserMenu.view";
import { useSelector } from "react-redux";

const UserMenu = () => {
  const { user } = useSelector((state: AppStore) => state.session);
  return <UserMenuView user={user} />;
};
export default UserMenu;
