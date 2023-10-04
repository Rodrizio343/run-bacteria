import { Grid } from "@mui/material"
import PostCardView from "../PostCard/PostCard.view"

export const renderArticle = (post, index) => {
  if(index == 0) {
    return <Grid key={index} item md={12}><PostCardView data={post} /></Grid>
  }
  else if(index == 1) {
    return <Grid key={index} item md={7}><PostCardView data={post} /></Grid>
  }
  else if(index == 2) {
    return <Grid key={index} item md={5}><PostCardView data={post} imageAsBackground /></Grid>
  }
  else if(index == 3) {
    return <Grid key={index} item md={5}><PostCardView data={post} showImage={false} /></Grid>
  }
  else if(index == 4) {
    return <Grid key={index} item md={7}><PostCardView data={post} /></Grid>
  }
  else if(index == 5) {
    return <Grid key={index} item md={7}><PostCardView data={post} /></Grid>
  }
  else if(index == 6) {
    return <Grid key={index} item md={5}><PostCardView data={post} showImage={false} /></Grid>
  }
  else if(index == 7) {
    return <Grid key={index} item md={5}><PostCardView data={post} showImage={false} /></Grid>
  }
  else if(index == 8) {
    return <Grid key={index} item md={3}><PostCardView data={post} imageAsBackground /></Grid>
  }
  else if(index == 9) {
    return <Grid key={index} item md={4}><PostCardView data={post} showImage={false} /></Grid>
  }
  else if (index >= 9 && index % 5 == 0) {
    return <Grid key={index} item md={7}><PostCardView data={post} /></Grid>
  }
  else if (index >= 9 && (index + 4) % 5 == 0) {
    return <Grid key={index} item md={5}><PostCardView data={post} showImage={false} /></Grid>
  }
  else if (index >= 9 && (index + 3) % 5 == 0) {
    return <Grid key={index} item md={5}><PostCardView data={post} showImage={false} /></Grid>
  }
  else if (index >= 9 && (index + 2) % 5 == 0) {
    return <Grid key={index} item md={3}><PostCardView data={post} imageAsBackground /></Grid>
  }
  else if (index >= 9 && (index + 1) % 5 == 0) {
    return <Grid key={index} item md={4}><PostCardView data={post} showImage={false} /></Grid>
  } 
  else {
    return <Grid key={index} item md={6}>Item</Grid>
  }
}