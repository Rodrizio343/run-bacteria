import { LoadingButton } from "@mui/lab";
import { Unstable_Grid2 as Grid, Typography } from "@mui/material";
import { StyledTextField as TextField } from "../../Common/TextField/TextField.styled";
import PasswordField from "../Common/PasswordField";
import { useRouter } from "next/router";

const SignInView = ({ form }) => {
  const router = useRouter();
  return (
    <form onSubmit={form.handleSubmit}>
      <Grid container spacing={2}>
        <Grid xs={12} md={12}>
          <TextField
            fullWidth
            color="secondary"
            id="identifier"
            name="identifier"
            label="Username or email"
            value={form.values.identifier}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            error={form.touched.identifier && Boolean(form.errors.identifier)}
            helperText={form.touched.identifier && form.errors.identifier}
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
            Sign In!
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};
export default SignInView;
