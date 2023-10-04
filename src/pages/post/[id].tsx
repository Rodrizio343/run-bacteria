import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import Head from "next/head";
import { IPost } from "@/@core/domain/entities/post";
import { getAllPost, getPostById } from "@/@core/infraestructure/posts.service";
import { ParsedUrlQuery } from "querystring";
import PostContainer from "@/components/Post/Post.container";
import { useRouter } from "next/router";

interface Params extends ParsedUrlQuery {
  id: string
}

const PostPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <PostContainer data={post} />
    </>
  );
};

export const getStaticPaths = (async () => {
  const posts = await getAllPost();
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
}))
  return {
    paths,
    fallback: true
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const { id } = context.params as Params;
  const post = await getPostById(id);
  return {
    props: {
      post,
    },
    revalidate: 10
  };
}) satisfies GetStaticProps<{
  post: IPost;
}>;

export default PostPage