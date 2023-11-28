import { Tabs, Tab, Box, Paper, Typography, Container } from "@mui/material";
import { createContext, useState } from "react";
import SignUpContainer from "./SignUp/SignUp.container";
import SignInContainer from "./SignIn/SignIn.container";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...rest } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`auth-tabpanel-${index}`}
      aria-labelledby={`auth-tab-${index}`}
      {...rest}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `auth-tab-${index}`,
    "aria-controls": `auth-tabpanel-${index}`,
  };
};

const AuthContainer = ({ initialTab }: { initialTab: number }) => {
  const [value, setValue] = useState(initialTab ? initialTab : 0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Typography variant="h3" align="center" sx={{ margin: "2rem auto" }}>
        ¡Welcome to Run Bacteria!
      </Typography>
      <Paper
        elevation={3}
        sx={{
          margin: "1rem auto",
          maxWidth: "500px",
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="auth tabs"
          >
            <Tab label="Sign In" {...a11yProps(0)} />
            <Tab label="Sign Up" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <SignInContainer />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <SignUpContainer />
        </CustomTabPanel>
      </Paper>
    </Container>
  );
};
export default AuthContainer;
