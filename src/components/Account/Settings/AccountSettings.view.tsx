import {
  Container,
  Typography,
  Unstable_Grid2 as Grid,
  Button,
  Avatar,
  Box,
} from "@mui/material";
import { StyledTextField as TextField } from "@/components/Common/TextField/TextField.styled";
import FileUploadInput from "@/components/Common/FileUploadInput/FileUploadInput.component";

const AccountSettingsView = ({ form }) => {
  return (
    <Container sx={{ margin: "2rem auto" }}>
      <Typography variant="h3" align="center">
        Your personal details
      </Typography>
      <form onSubmit={form.handleSubmit} data-testid="form">
        <Grid container spacing={2} sx={{ margin: "2rem auto" }}>
          <Grid xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <FileUploadInput
                name="avatar"
                label="Upload avatar"
                data={form.values}
                errors={form.errors}
                setFieldValue={form.setFieldValue}
                preview={form.values.avatar}
              />
            </Box>
          </Grid>
          <Grid xs={12} md={8}>
            <TextField
              fullWidth
              color="secondary"
              id="username"
              name="username"
              label="User name"
              value={form.values.username}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              error={form.touched.username && Boolean(form.errors.username)}
              helperText={form.touched.username && form.errors.username}
            />
          </Grid>
          <Grid xs={12} md={12} sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                width: {
                  xs: "100%",
                  md: "auto",
                },
              }}
              type="submit"
            >
              Update!
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default AccountSettingsView;
