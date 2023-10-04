import PostImageView from "./PostImage/PostImage.view";
import PostBodyView from "./PostBody/PostBody.view";

const PostView = ({ id, title, brief, content, image, categories, date }) => {
  return (
    <>
      <PostImageView image={image} title={title} />
      <PostBodyView
        title={title}
        brief={brief}
        content={content}
        categories={categories}
        date={date}
      />
    </>
  );
};
export default PostView;
