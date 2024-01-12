import { IUser } from "@/@core/domain/entities/user";
import { logout } from "@/@core/infraestructure/redux/states/session/session.state";
import { useAppDispatch } from "@/@core/infraestructure/redux/store";
import { useHeader } from "@/hooks/useHeader";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

const UserMenuWrapper = ({ children }) => {
  const { anchorElUser, handleCloseUserMenu } = useHeader();
  return (
    <Menu
      sx={{ mt: "45px" }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      {children}
    </Menu>
  );
};

const UserMenuView = ({ user }: { user: IUser }) => {
  const { handleOpenUserMenu } = useHeader();
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <>
      {user.id ? (
        <>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt={user.username}
                src={user.avatar ? user.avatar : "example"}
              />
            </IconButton>
          </Tooltip>
          <UserMenuWrapper>
            <MenuItem>
              <Typography>Welcome {user.username}</Typography>
            </MenuItem>
            <MenuItem onClick={() => router.push("/account")}>
              <Typography>Account</Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                dispatch(logout());
                router.push("/");
              }}
            >
              Log Out
            </MenuItem>
          </UserMenuWrapper>
        </>
      ) : (
        <>
          <Box sx={{ display: "flex" }}>
            <Button
              sx={{
                marginRight: 2,
                fontSize: { xs: "0.65rem", md: "0.875rem" },
                padding: { xs: "0.5rem", md: "6px 16px" },
              }}
              variant="outlined"
              color="secondary"
              onClick={() =>
                router.push({ pathname: "/auth", query: { index: 0 } }, "/auth")
              }
            >
              Sign In
            </Button>
            <Button
              sx={{
                display: { xs: "none", md: "block" },
              }}
              variant="contained"
              color="secondary"
              onClick={() =>
                router.push({ pathname: "/auth", query: { index: 1 } }, "/auth")
              }
            >
              Sign Up
            </Button>
          </Box>
        </>
      )}
    </>
  );
};
export default UserMenuView;
