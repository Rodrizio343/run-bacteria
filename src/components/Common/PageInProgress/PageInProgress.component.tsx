import { Box, Button, Container, Typography, Link } from "@mui/material";
import Image from "next/image";

const PageInProgress = () => {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        width="100%"
        mb={5}
        mt={5}
      >
        <Box width='100%' maxWidth={600}>
          <Image
            priority
            width={600}
            height={600}
            layout="responsive"
            src="/scientist.svg"
            alt="Page in progress"
          />
        </Box>
        <Typography variant='h5' color='secondary' mt={3}>Work in progress</Typography>
        <Typography mb={5}>This page wil be ready soon</Typography>
        <Button
          variant="contained"
          color="secondary"  
        >
          <Link
            href='/'
            underline="none"
            sx={{color: 'white'}}
          >
            Go back to Home
          </Link>
        </Button>
      </Box>
    </Container>
  );
};
export default PageInProgress;
