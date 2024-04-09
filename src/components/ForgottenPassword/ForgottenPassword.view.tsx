import {
  Container,
  Typography,
  Unstable_Grid2 as Grid,
  Button,
} from "@mui/material";
import { StyledTextField as TextField } from "@/components/Common/TextField/TextField.styled";

const ForgottenPassword = ({ form }) => {
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
              ¿Have you forgotten your password?
            </Typography>
            <Typography align="center">Use your email to reset it</Typography>
          </Grid>
          <Grid xs={12} md={12}>
            <TextField
              fullWidth
              color="secondary"
              id="email"
              name="email"
              label="E-mail"
              value={form.values.email}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              error={form.touched.email && Boolean(form.errors.email)}
              helperText={form.touched.email && form.errors.email}
            />
          </Grid>
          <Grid xs={12} md={12}>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              disabled={!(form.isValid && form.dirty)}
            >
              Reset password
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default ForgottenPassword;
