import { AlertColor } from '@mui/material';
import { useState } from 'react';

interface IStatus {
  message: string;
  type: AlertColor;
}

const useSnackbar = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<IStatus>({
    message: "",
    type: "success",
  });

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return {status, setStatus, open, setOpen, handleClose}
}
export default useSnackbar