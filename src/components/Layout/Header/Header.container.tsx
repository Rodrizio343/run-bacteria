import { HeaderProvider } from "@/hooks/useHeader";
import HeaderView from "./Header.view";

const ResponsiveAppBar = () => {
  return (
    <HeaderProvider>
      <HeaderView />
    </HeaderProvider>
  );
};
export default ResponsiveAppBar;
