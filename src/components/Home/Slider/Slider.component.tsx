import Carousel from 'react-material-ui-carousel';
import {
  Link,
    Typography,
} from '@mui/material'

import styles from './Slider.module.css'
import Image from 'next/image';
import Badge from '@/components/Common/Badge/Badge.component';

const Slider = ({slides}) => {

    return (
      <Carousel
        className={styles.mainSlider}
        autoPlay={true}
        animation="fade"
        indicators={false}
        duration={500}
        navButtonsAlwaysVisible={false}
        navButtonsAlwaysInvisible={false}
        cycleNavigation={true}
        fullHeightHover={true}
        swipe={true}
      
      >
        {
          slides.map((item, index) => {
            return <Slide item={item} key={index} />
          })
        }
      </Carousel>
    )
}

function Slide({item}) {
    return (
      <>
        <div className={styles.sliderCoverItem}>
          <div className={styles.sliderCoverBg}>
            <Link href={`post/${item.post.id}`} className={styles.sliderCover}>
              <Image 
                src={item.image} 
                alt={item.title}
                width={500}
                height={500}
                sizes="100vw"
                style={{ width: "100%", height: "100%", objectFit:'cover'}}
              />
            <span className={styles.sliderHiddenOverlay}></span>  
            </Link>
          </div>
          <div className={styles.sliderCoverContent}>
            <div className={styles.entryHeader}>
              {
                item.category && <Badge variant='secondary' text={item.category} />
              }
              <h2 className={styles.entryTitle}>
                <Link href={`post/${item.post.id}`}>{item.title}</Link>
              </h2>
              <Typography>
                {item.brief}
              </Typography>
            </div>
          </div>
        </div>
      </>
    )
}

export default Slider;
