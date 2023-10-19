import PostImageView from "./PostImage/PostImage.view";
import PostBodyView from "./PostBody/PostBody.view";

const PostView = ({ id, title, brief, content, image, categories, date, author }) => {
  return (
    <>
      <PostImageView image={image} title={title} />
      <PostBodyView
        title={title}
        brief={brief}
        content={content}
        categories={categories}
        date={date}
        author={author}
      />
    </>
  );
};
export default PostView;
