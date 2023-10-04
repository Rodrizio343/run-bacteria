import { IPost } from "@/@core/domain/entities/post";
import PostsResultListView from "./PostsResultList.view";

interface Props {
  query: string;
  posts: IPost[]
}

const PostsResultList = ({query, posts}: Props) => {
  return <PostsResultListView query={query} posts={posts} />;
};
export default PostsResultList;
