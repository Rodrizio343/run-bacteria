import Header from "@/components/Layout/Header/Header.container";
import Footer from "@/components/Layout/Footer/Footer.component";
import { Box } from "@mui/material";

const MainLayout = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100vh"
    >
      <Header />
      {children}
      <Footer />
    </Box>
  );
};
export default MainLayout;
