import { Box } from "@mui/material";
import Image from "next/image";

const PostImageView = ({ image, title }) => {
  return (
    <Box
      sx={{
        height: {
          xs: "200px",
          md: "400px",
        },
        width: '100%',
        position: 'relative'
      }}
    >
      <Image
        priority
        src={image}
        alt={title}
        width={500}
        height={500}
        sizes="100vw"
        style={{ width: "100%", height: "100%", objectFit:'cover'}}
      />
    </Box>
  );
};
export default PostImageView;
