import { Avatar, Box, Typography } from "@mui/material";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


const MetaInfo = ({ date, author, card = true, imageAsBackground = false  }) => {
  return (
    <Box
      sx={{
        position: "relative",
        ...(card && {
          position: {
            xs: 'relative',
            md: 'absolute'
          }
        }),
        bottom: "3%",
        marginTop: {
          xs: "5px",
        },
        display: "flex",
        alignItems: "center",
        ...(imageAsBackground && {color: '#fff'})
      }}
    >
      <Avatar src={author.avatar} sx={{ marginRight: "5px" }} />
      <Typography variant="caption" mr={2}>
        By {author.name}
      </Typography>
      <CalendarTodayIcon />
      <Typography variant="caption" ml={1}>
        {date}
      </Typography>
    </Box>
  );
};
export default MetaInfo;
