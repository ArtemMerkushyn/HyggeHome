import React, { useEffect, useState } from 'react';
import styles from './NewCollection.module.css';
import Icons from '../../Icons/Icons';
import SkeletonProductLib from '../../skeleton/SkeletonProductLib';
import CarouselSlider from './Slider/CarouselSlider';
import { useSearchByNameQuery } from '../../../redux/services';
import NewCollectionItem from '../../NewCollectionItem/NewCollectionItem';

export const NewCollection = ({ sliderNeeded, upperText, lowerText }) => {
  const [catalog, setCatalog] = useState([]);
  const [carousel, setCarousel] = useState(catalog)
  const { data, isLoading } = useSearchByNameQuery('');
  const [scrollBarPosition, setScrollBarPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const windowWidth = window.innerWidth;
  const widthScroll = windowWidth >= 1158 ? 634 : 360;
  const widthScrollNav = catalog ? widthScroll / (catalog.length - 2) : 0;
  const widthSlide = windowWidth >= 1157 ? 412 + 30 : (windowWidth >= 768 ? 190 + 20 : 190 + 10);
  const itemsList = document.querySelector(`.${styles.itemsList}`);
  
  useEffect(() => {
    if (data) {
      setCatalog(data);
    }
  }, [data]);

  const handleScroll = () => {
    const { scrollLeft } = itemsList;
    const scrollPosition = (scrollLeft/ widthSlide) * widthScrollNav
    setScrollBarPosition(scrollPosition)
    //
    
  }

  const handleNext = () => {
    if (!isScrolling) {
      const { scrollLeft, scrollWidth, clientWidth } = itemsList;
      const scrollPosition = (scrollLeft / widthSlide) * widthScrollNav
      setIsScrolling(true);
      if (itemsList) {
        const widthSlide = window.innerWidth >= 1157 ? 412 + 30 : (window.innerWidth >= 768 ? 190 + 20 : 190 + 10);
        if (scrollLeft + clientWidth >= scrollWidth) {
            setIsScrolling(false);
            itemsList.scrollTo({ left: 0, behavior: 'smooth' });
            setScrollBarPosition(0);
        } else {
          itemsList.scrollLeft += widthSlide;
          setScrollBarPosition(scrollPosition)
        }
          setIsScrolling(false);
      }
    }
  };

  const handlePrev = () => {
    const { scrollLeft } = itemsList;
    const scrollPosition = (scrollLeft / widthSlide) * widthScrollNav
      if (itemsList) {
        const widthSlide = window.innerWidth >= 1157 ? 412 + 30 : (window.innerWidth >= 768 ? 190 + 20 : 190 + 10);
        itemsList.scrollLeft -= widthSlide;
        setScrollBarPosition(scrollPosition);
        if (scrollLeft === 0) {
            itemsList.scrollTo({ left: itemsList.scrollWidth, behavior: 'smooth' });
            setScrollBarPosition(widthScroll - widthScrollNav);
          
        }

      }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <h5 className={styles.new_collection_text}>{upperText}</h5>
        <h3 className={styles.new_collection_goods_text}>{lowerText}</h3>
        <ul className={styles.itemsList} onScroll={handleScroll}>
          {isLoading ? (
            <div className={styles.skeleton}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(loading => (
                <div className="col-3" key={loading}>
                  <SkeletonProductLib />
                </div>
              ))}
            </div>
          ) : (
            catalog.map((item, index) => <NewCollectionItem key={index} item={item} />)
          )}
          {windowWidth <= 767 && itemsList &&itemsList.scrollLeft >= ((carousel.length * widthSlide) - (widthSlide * 7)) && (
            catalog.map((item, index) => <NewCollectionItem key={index + catalog.length} item={item} />)
            
          )}
        </ul>



        <div className={styles.arrows}>
          <button className={styles.prev} onClick={handlePrev} disabled={isScrolling}>
            <div className={styles.left_arrow}>
              <Icons icon={'right_arrow'} />
            </div>
          </button>
          <button className={styles.next} onClick={handleNext} disabled={isScrolling}>
            <div className={styles.right_arrow}>
              <Icons icon={'right_arrow'} />
            </div>
          </button>
        </div>
        
      </div>

      {sliderNeeded && (
        <CarouselSlider
          scrollBarPosition={scrollBarPosition}
          widthScrollNav={widthScrollNav}
        />
      )}
    </>
  );
};
