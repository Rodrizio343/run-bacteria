import Badge from "@/components/Common/Badge/Badge.component";
import { Box, Container, Link, Paper, Typography, Avatar } from "@mui/material";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MetaInfo from "@/components/Common/MetaInfo/MetaInfo.component";


const PostBodyView = ({ title, brief, content, categories, date }) => {
  return (
    <Container>
      <Paper
        sx={{
          padding: "40px 60px 50px",
          position: "relative",
          marginTop: "-70px",
          marginBottom: "2rem",
          maxWidth: {
            sm: "100%",
            md: "740px",
          },
        }}
        elevation={3}
      >
        {categories &&
          categories.map(({ id, name }) => (
            <Link key={id} href={`/category/${id}`}>
              <Badge variant={"secondary"} text={name} />
            </Link>
          ))}
        <Typography variant="h3">{title}</Typography>
        <Typography variant="subtitle1" fontWeight={500} mb={1}>
          {brief}
        </Typography>
        <MetaInfo date={date} card={false}/>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Paper>
    </Container>
  );
};
export default PostBodyView;
