import { Alert, AlertColor, Snackbar } from "@mui/material";
import { useState } from "react";

interface Props {
  message: string,
  type: AlertColor
  open: boolean
  handleClose: () => void
}

export default function SnackBar({
  message,
  type,
  open,
  handleClose
}: Props) {
 
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}