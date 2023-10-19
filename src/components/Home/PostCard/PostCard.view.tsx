import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Avatar, Box, Link } from "@mui/material";
import { IPost } from "@/@core/domain/entities/post";
import Badge from "@/components/Common/Badge/Badge.component";
import MetaInfo from "@/components/Common/MetaInfo/MetaInfo.component";

interface Props {
  data: IPost;
  showImage?: boolean;
  imageAsBackground?: boolean;
}

const PostCardView = ({
  data: { id, title, brief, image, categories, date, author },
  showImage = true,
  imageAsBackground = false,
}: Props) => {
  return (
    <Card elevation={3}>
      <CardActionArea
        sx={{
          alignItems: "flex-start",
          display: {
            sm: "block",
            md: "flex",
          },
          height: {
            md: "300px",
          },
        }}
        LinkComponent={Link}
        href={`/post/${id}`}
      >
        {showImage && (
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{
              maxWidth: {
                xs: "100%",
                md: imageAsBackground ? "%100" : "50%",
              },
              height: "100%",
              objectFit: "cover",
              ...(imageAsBackground && {
                position: "absolute",
                filter: "brightness(0.5)",
              }),
            }}
          />
        )}
        <CardContent
          sx={{
            width: "100%",
            height: "100%",
            zIndex: 1,
            position: "relative",
          }}
        >
          {
            categories && categories.map(({id, name}) => (
              <Badge
                key={id}
                variant={imageAsBackground ? "tertiary" : "secondary"}
                text={name}
              />
            ))
          }
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color={showImage && imageAsBackground ? "#fff" : "text.primary"}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color={showImage && imageAsBackground ? "#fff" : "text.secondary"}
          >
            {brief}
          </Typography>
          <MetaInfo date={date} author={author} imageAsBackground={imageAsBackground}/>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default PostCardView;
