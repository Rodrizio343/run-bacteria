// import { Montserrat } from "next/font/google";
import { Lato } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import NextLink, { LinkProps } from "next/link";
import { forwardRef, Ref } from "react";


const LinkBehaviour = forwardRef(function LinkBehaviour(
  props: LinkProps & { href: string },
  ref: Ref<HTMLAnchorElement>
) {
  const { href, ...otherProps } = props;
  return <NextLink href={href} ref={ref} {...otherProps} />;
});

// const LinkBehaviour = forwardRef();

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
  }
  interface PaletteOptions {
    tertiary: PaletteOptions["primary"];
  }
}

const lato = Lato({
  weight: ["300", "400", "900"],
  subsets: ["latin"],
  display: "swap",
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: "#fdf7ef",
    },
    primary: {
      main: "#F2D0A9",
    },
    secondary: {
      main: "#8E7DBE",
    },
    tertiary: {
      main: "#99C1B9",
      light: "#fdf7ef",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: lato.style.fontFamily,
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehaviour
      }
    }
  }
});

export default theme;
