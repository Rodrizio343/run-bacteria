import { Box, Container, Grid, Typography, Divider, Button, Link } from "@mui/material"
import { FooterContainer } from "./Footer.styled"
import theme from "@/theme/theme"
import Image from "next/image"
import FacebookImg from 'public/facebook.svg'
import InstagramImg from 'public/instagram.svg'
import TwitterImg from 'public/twitter.svg'

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth='xl'>
        <Typography
            component="p"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontStyle: 'italic',     
              fontWeight: 500,
              justifyContent: 'center',
              padding: '1rem 0',
              textAlign: 'center',
              textDecoration: 'underline',
              textDecorationColor: theme.palette.secondary.main,
              textDecorationThickness: '3px'
            }}
          >
            “An expert is a person who has made all the mistakes that can be made in a very narrow field.” – Neils Bohr 
        </Typography>
        <Grid container justifyContent={"center"} spacing={3}>
          <Grid item>
            <a href="#" target="_blank">
              <Image src={FacebookImg} alt="facebook" width={50} height={50}/>
            </a>
          </Grid>
          <Grid item>
            <a href="#" target="_blank">
              <Image src={InstagramImg} alt="facebook" width={50} height={50}/>
            </a>
          </Grid>
          <Grid item>
            <a href="#" target="_blank">
              <Image src={TwitterImg} alt="facebook" width={50} height={50}/>
            </a>
          </Grid>
        </Grid>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          margin: '1rem 0',
          width: '100%'
        }}>
          <Button variant="contained" color="secondary">
            <Link href="/contact-me"
              underline="none"
              sx={{color: "white"}}
            >
              Contact me
            </Link>
          </Button>
        </Box>
      </Container>
    </FooterContainer>
  )
}

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer