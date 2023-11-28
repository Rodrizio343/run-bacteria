import { Unstable_Grid2 as Grid } from "@mui/material";
import { StyledTextField as TextField } from "../../Common/TextField/TextField.styled";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import PasswordField from "../Common/PasswordField";

const SignUpView = ({ form }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={form.handleSubmit}>
      <Grid container spacing={2}>
        <Grid xs={12} md={12}>
          <TextField
            fullWidth
            color="secondary"
            id="username"
            name="username"
            label="Username"
            value={form.values.username}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            error={form.touched.username && Boolean(form.errors.username)}
            helperText={form.touched.username && form.errors.username}
          />
        </Grid>
        <Grid xs={12} md={12}>
          <TextField
            fullWidth
            color="secondary"
            id="email"
            name="email"
            label="Email"
            value={form.values.email}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            error={form.touched.email && Boolean(form.errors.email)}
            helperText={form.touched.email && form.errors.email}
          />
        </Grid>
        <Grid xs={12} md={12}>
          <PasswordField
            fullWidth
            color="secondary"
            id="password"
            name="password"
            label="Password"
            value={form.values.password}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            error={form.touched.password && Boolean(form.errors.password)}
            helperText={form.touched.password && form.errors.password}
            type="password"
          />
        </Grid>
        <Grid xs={12} md={12}>
          <PasswordField
            fullWidth
            color="secondary"
            id="passwordConfirmation"
            name="passwordConfirmation"
            label="Repeat password"
            value={form.values.passwordConfirmation}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            error={
              form.touched.passwordConfirmation &&
              Boolean(form.errors.passwordConfirmation)
            }
            helperText={
              form.touched.passwordConfirmation &&
              form.errors.passwordConfirmation
            }
          />
        </Grid>
        <Grid xs={12} md={12}>
          <LoadingButton
            loading={form.isSubmitting}
            variant="contained"
            color="secondary"
            fullWidth
            disabled={form.isSubmitting}
            type="submit"
          >
            Sign Up!
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};
export default SignUpView;
