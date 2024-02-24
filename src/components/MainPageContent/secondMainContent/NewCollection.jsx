import { useEffect, useState } from 'react';
import styles from './NewCollection.module.css';
import Icons from '../../Icons/Icons';
import CardItem from '../../CardItem/CardItem';
import SkeletonProductLib from '../../skeleton/SkeletonProductLib';
import CarouselSlider from './Slider/CarouselSlider';
import { useGetCandlesQuery } from '../../../redux/services';

export const NewCollection = ({ sliderNeeded, upperText, lowerText }) => {
  const [catalog, setCatalog] = useState([]);
  const { data, error, isLoading } = useGetCandlesQuery();
  const [listPosition, setListPosition] = useState(0);
  const [scrollBarPosition, setScrollBarPosition] = useState(0);

  useEffect(() => {
    if (data) {
      setCatalog(data);
    }
  }, [data]);

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  const widthScroll = 634;
  const widthScrollNav = catalog ? 634 / (catalog.length - 2) : 0;
  const widthSlide = 412 + 30;
  const listPositionEndPointNext = catalog
    ? -(widthSlide * (catalog.length - 4))
    : 0;
  const listPositionEndPointPrev = catalog
    ? -(widthSlide * (catalog.length - 2))
    : 0;

  const handleNext = () => {
    if (listPosition < listPositionEndPointNext) {
      setListPosition(widthSlide);
      setScrollBarPosition(-widthScrollNav);
    }
    setListPosition(prevPosition => prevPosition - widthSlide);
    setScrollBarPosition(prevPosition => prevPosition + widthScrollNav);
  };

  const handlePrev = () => {
    if (listPosition > -widthSlide) {
      setListPosition(listPositionEndPointPrev);
      setScrollBarPosition(widthScroll);
    }
    setListPosition(prevPosition => prevPosition + widthSlide);
    setScrollBarPosition(prevPosition => prevPosition - widthScrollNav);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <h5 className={styles.new_collection_text}>{upperText}</h5>
        <h3 className={styles.new_collection_goods_text}>{lowerText}</h3>
        <ul className={styles.itemsList} style={{ left: `${listPosition}px` }}>
          {isLoading ? (
            <div className={styles.skeleton}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(loading => (
                <div className="col-3" key={loading}>
                  <SkeletonProductLib />
                </div>
              ))}
            </div>
          ) : (
            catalog.map((candle, index) => (
              <CardItem key={index} candle={candle} />
            ))
          )}
        </ul>

        <div className={styles.arrows}>
          <button className={styles.prev} onClick={handlePrev}>
            <div className={styles.left_arrow}>
              <Icons icon={'right_arrow'} />
            </div>
          </button>
          <button className={styles.next} onClick={handleNext}>
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
