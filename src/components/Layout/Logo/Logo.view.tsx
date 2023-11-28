import Image from "next/image";
import { DEVICES, TDevice } from "../types";
import { Box, Link, Typography } from "@mui/material";

const Logo = ({ device = DEVICES.DESKTOP }: { device?: TDevice }) => {
  return (
    <Box
      sx={{
        display: {
          xs: device === DEVICES.DESKTOP ? "none" : "flex",
          md: device === DEVICES.DESKTOP ? "flex" : "none",
        },
        alignItems: "center",
      }}
    >
      <Image
        src="/favicon.ico"
        alt="logo"
        height={30}
        width={30}
        style={{ marginRight: "0.5rem" }}
      />
      <Typography
        variant={device === DEVICES.DESKTOP ? "h6" : "inherit"}
        noWrap
        component={Link}
        href="/"
        sx={{
          mr: 2,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Run Bacteria
      </Typography>
    </Box>
  );
};
export default Logo;
