import {
  Avatar,
  Container,
  Unstable_Grid2 as Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import PostCardView from "../Home/PostCard/PostCard.view";
import { IUser } from "@/@core/domain/entities/user";

interface Props {
  user: IUser;
}

const AccountView = ({ user }: Props) => {
  return (
    <Container sx={{ margin: "2rem auto" }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={3}>
          <Paper
            elevation={3}
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "1rem",
            }}
          >
            <Avatar
              alt="Avatar example"
              src={user.avatar}
              sx={{ width: 100, height: 100 }}
            />
            <Typography variant="h5">{user.username}</Typography>
            <Link href="/" color="secondary">
              Edit Profile
            </Link>
          </Paper>
        </Grid>
        <Grid xs={12} md={8}>
          <Paper elevation={3} sx={{ padding: "1rem" }}>
            <Typography variant="h5" mb={2}>
              Your Favourites Posts
            </Typography>
            <Grid container spacing={2} mb={3}>
              {/* {favorites.length ? (
                favorites.map((favorite) => {
                  return (
                    <Grid key={favorite?.id} md={4}>
                      <PostCardView
                        data={favorite}
                        imageAsBackground
                        minimalist
                      />
                    </Grid>
                  );
                })
              ) : (
                <p>No Favorites</p>
              )} */}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
export default AccountView;
