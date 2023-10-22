import { Container, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import { StyledTextField as TextField } from "../Common/TextField/TextField.styled";
import { LoadingButton } from "@mui/lab";

const ContactFormView = ({ form }) => {
  return (
    <Container>
      <form onSubmit={form.handleSubmit}>
        <Grid
          container
          spacing={2}
          sx={{ maxWidth: "700px", margin: "2rem auto 2rem" }}
        >
          <Grid md={12}>
            <Typography variant="h3" align="center" sx={{ margin: "2rem 0" }}>
              Let`s get in contact!
            </Typography>
          </Grid>
          <Grid xs={12} md={12}>
            <TextField
              fullWidth
              color="secondary"
              id="subject"
              name="subject"
              label="Subject"
              value={form.values.subject}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              error={form.touched.subject && Boolean(form.errors.subject)}
              helperText={form.touched.subject && form.errors.subject}
            />
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              fullWidth
              color="secondary"
              id="name"
              name="name"
              label="Name"
              value={form.values.name}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              error={form.touched.name && Boolean(form.errors.name)}
              helperText={form.touched.name && form.errors.name}
            />
          </Grid>
          <Grid xs={12} md={6}>
            <TextField
              fullWidth
              color="secondary"
              id="user_email"
              name="user_email"
              label="E-mail"
              value={form.values.user_email}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              error={form.touched.user_email && Boolean(form.errors.user_email)}
              helperText={form.touched.user_email && form.errors.user_email}
            />
          </Grid>
          <Grid xs={12} md={12}>
            <TextField
              fullWidth
              color="secondary"
              multiline
              rows={5}
              id="message"
              name="message"
              label="Message"
              value={form.values.message}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              error={form.touched.message && Boolean(form.errors.message)}
              helperText={form.touched.message && form.errors.message}
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
              Send it!
            </LoadingButton>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default ContactFormView;
