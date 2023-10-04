import { IPost } from "@/@core/domain/entities/post";
import PostView from "./Post.view";

interface IPostContainer {
  data: IPost;
}

const PostContainer = ({
  data: { id, title, brief, content, image, categories, date },
}: IPostContainer) => {
  return (
    <PostView
      id={id}
      title={title}
      brief={brief}
      content={content}
      image={image}
      categories={categories}
      date={date}
    />
  );
};
export default PostContainer;
