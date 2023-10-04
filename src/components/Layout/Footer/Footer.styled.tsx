import { styled } from "@mui/material";

export const FooterContainer = styled('footer')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.primary.main,
  boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px',
  width: '100%',
  padding: '1rem 0'
}));