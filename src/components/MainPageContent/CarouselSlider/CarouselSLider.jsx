import React from 'react';
import styles from './CarouselSlider.module.css'

const CarouselSlider = ({scrollBarPosition, widthScrollNav}) => {
    return (
        <div className={styles.scroll}>
        <div className={styles.scrollnav} style={{ transform: `translateX(${scrollBarPosition}px)`, width: `${widthScrollNav}px` }}></div>
      </div>
    );
};
export default CarouselSlider