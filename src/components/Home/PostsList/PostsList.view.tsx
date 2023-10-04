import { LoadingButton } from "@mui/lab";
import { renderArticle } from "./PostsList.util";
import { Container, Grid, Typography } from "@mui/material";

const PostsListView = ({
  showedPosts,
  handleLoadMorePosts,
  loading,
  offset,
  disableLoadMoreButton,
}) => {
  return (
    <Container sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h4" sx={{ margin: "1.5rem 0" }}>
        Lasts Posts
      </Typography>
      <Grid container spacing={2}>
        {showedPosts.map((post, index) => renderArticle(post, index))}
      </Grid>
      <LoadingButton
        variant="contained"
        color="secondary"
        onClick={() => handleLoadMorePosts(offset)}
        loading={loading}
        loadingIndicator="Loading..."
        disabled={disableLoadMoreButton}
        sx={{ margin: "1.5rem auto" }}
      >
        {disableLoadMoreButton ? "No more posts" : "Load more"}
      </LoadingButton>
    </Container>
  );
};
export default PostsListView;
