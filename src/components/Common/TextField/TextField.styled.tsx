import { TextField, styled } from "@mui/material";

export const StyledTextField = styled(TextField)`
  .MuiInputBase-input {
    background-color: #fff
  }
  .MuiInputBase-root {
    background-color: ${({theme, value}) => !value && '#fff'};
  }
  .MuiInputBase-multiline {
    background-color: #fff
  }
`