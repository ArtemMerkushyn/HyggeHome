import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import css from './MainCarousel.module.css'
export const MainCarousel = () => {

const responsive = {

  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  
};
    return(
        <>
        <Carousel responsive={responsive}>
           
  <div className={css.carousel_item_1}>
 
  </div>
  <div className={css.carousel_item}>
  
  </div>
  <div className={css.carousel_item_2}>

  </div>
  <div className={css.carousel_item_1}>
 
  </div>
  <div className={css.carousel_item}>
  
  </div>
  <div className={css.carousel_item_2}>

  </div>
  <div className={css.carousel_item_1}>
 
  </div>
  <div className={css.carousel_item}>
  
  </div>
  <div className={css.carousel_item_2}>

  </div>
 
  

</Carousel>
        </>
    )
} 