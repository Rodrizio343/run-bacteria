import { IPost } from "@/@core/domain/entities/post";
import { getPostsBySearch } from "@/@core/infraestructure/posts.service";
import PostsResultList from "@/components/Common/PostsResultList/PostsResultList.component";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  q: string;
}

interface Props {
  posts: IPost[];
}

const CategoryPage = ({ posts }: Props) => {
  const router = useRouter();
  const {
    query: { q },
  } = router;
  
  return (
    <PostsResultList query={`${q}`} posts={posts}/>
  );
};
export default CategoryPage;

export async function getServerSideProps(context) {
  const { q } = context.query as Params;
  const posts = await getPostsBySearch(q);
  return {
    props: {
      posts,
    },
  };
}
