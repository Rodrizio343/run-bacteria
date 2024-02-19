import { useRouter } from "next/router";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type headerElement = null | HTMLElement;

interface IHeaderContext {
  anchorElNav: headerElement;
  anchorElUser: headerElement;
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseNavMenu: () => void;
  handleCloseUserMenu: () => void;
}

const headerContextDefault = {
  anchorElNav: null,
  anchorElUser: null,
  handleOpenNavMenu: () => null,
  handleOpenUserMenu: () => null,
  handleCloseNavMenu: () => null,
  handleCloseUserMenu: () => null,
};

const HeaderContext = createContext<IHeaderContext>(headerContextDefault);

export const HeaderProvider = ({ children }) => {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = useState<headerElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<headerElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = useCallback(() => {
    setAnchorElUser(null);
  }, []);

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      handleCloseUserMenu();
    });
  }, [router.events, handleCloseUserMenu]);

  return (
    <HeaderContext.Provider
      value={{
        anchorElNav,
        anchorElUser,
        handleOpenNavMenu,
        handleOpenUserMenu,
        handleCloseNavMenu,
        handleCloseUserMenu,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);
