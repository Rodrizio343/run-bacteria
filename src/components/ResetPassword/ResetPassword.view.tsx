import {
  Button,
  Container,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import PasswordField from "@/components/Auth/Common/PasswordField";
import { LoadingButton } from "@mui/lab";

const ResetPassword = ({ form }) => {
  return (
    <Container>
      <form onSubmit={form.handleSubmit}>
        <Grid
          container
          spacing={2}
          sx={{ maxWidth: "700px", margin: "2rem auto 2rem" }}
        >
          <Grid xs={12} md={12}>
            <Typography variant="h4" align="center" sx={{ margin: "1rem 0" }}>
              Set up your new password
            </Typography>
          </Grid>
          <Grid xs={12} md={12}>
            <PasswordField
              fullWidth
              color="secondary"
              id="password"
              name="password"
              label="New password"
              value={form.values.password}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              error={form.touched.password && Boolean(form.errors.password)}
              helperText={form.touched.password && form.errors.password}
            />
          </Grid>
          <Grid xs={12} md={12}>
            <PasswordField
              fullWidth
              color="secondary"
              id="passwordConfirmation"
              name="passwordConfirmation"
              label="Password confirmation"
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
              disabled={!(form.isValid && form.dirty) && !form.isSubmitting}
              type="submit"
            >
              Reset password
            </LoadingButton>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default ResetPassword;
