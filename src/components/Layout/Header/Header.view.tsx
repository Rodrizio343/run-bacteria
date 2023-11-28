import Searcher from "@/components/Common/Searcher/Searcher.component";
import { useHeader } from "@/hooks/useHeader";
import { friendlyUrl } from "@/utils/getFriendlyUrl";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { useRouter } from "next/router";
import Logo from "../Logo/Logo.view";
import { DEVICES, TDevice } from "../types";
import dynamic from "next/dynamic";

const UserMenu = dynamic(() => import("../UserMenu/UserMenu.container"), {
  ssr: false,
});

const pages = ["About me", "Contact me"];

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const HeaderView = () => {
  const router = useRouter();
  const { anchorElNav, handleOpenNavMenu, handleCloseNavMenu } = useHeader();

  const Wrapper = ({ children, device = DEVICES.DESKTOP, ...rest }) => {
    if (device === DEVICES.DESKTOP) {
      return <Button onClick={handleCloseNavMenu}>{children}</Button>;
    }
    return <MenuItem onClick={handleCloseNavMenu}>{children}</MenuItem>;
  };

  const buildPages = (device: TDevice = DEVICES.DESKTOP) => {
    return pages.map((page) => (
      <Wrapper device={device} key={page}>
        <Link
          sx={{
            color: device == DEVICES.DESKTOP ? "white" : "rgba(0, 0, 0, 0.87)",
            ...(device === DEVICES.DESKTOP && {
              my: 2,
              display: "block",
            }),
            textDecoration: "none",
          }}
          href={`/${friendlyUrl(page)}`}
        >
          <Typography textAlign="center">{page}</Typography>
        </Link>
      </Wrapper>
    ));
  };

  return (
    <HideOnScroll>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Logo />
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {buildPages(DEVICES.MOBILE)}
              </Menu>
            </Box>
            <Logo device={DEVICES.MOBILE} />
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Searcher
                onSearch={(textToSearch) => {
                  router.push({
                    pathname: "/posts",
                    query: {
                      q: textToSearch,
                    },
                  });
                }}
              />
              {buildPages()}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <UserMenu />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};
export default HeaderView;
