import { styled } from "@mui/material";

interface IBadgeContainer {
  variant: 'secondary' | 'tertiary'
}

export const BadgeContainer = styled('span')<IBadgeContainer>(({ theme, variant}) => ({
  display: 'inline-block',
  borderRadius: '20px',
  color: '#FFF',
  height: 'auto',
  backgroundColor: variant == 'secondary' ? theme.palette.secondary.main : theme.palette.tertiary.main,
  fontSize: '10px',
  fontWeight: '500',
  lineHeight: '10px',
  padding: '7px 11px 6px',
  verticalAlign: 'top',
  transition: 'all .2s ease-in-out',
  marginRight: '3px'
}));