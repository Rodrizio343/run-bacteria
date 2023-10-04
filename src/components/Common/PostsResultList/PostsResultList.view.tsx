import PostCardView from "@/components/Home/PostCard/PostCard.view";
import { Container, Grid, Typography } from "@mui/material";
import Head from "next/head";

const PostsResultListView = ({query, posts}) => {
  return (
    <>
      <Head>
        <title>{query} - resultados</title>
      </Head>
      <Container>
        <Typography variant="h4" mb={3} mt={3}>
          Resultados para: {query}
        </Typography>
        <Grid container spacing={2} mb={3}>
          {posts.map((post) => {
            return (
              <Grid key={post.id} item md={12}>
                <PostCardView data={post} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  )
}
export default PostsResultListView