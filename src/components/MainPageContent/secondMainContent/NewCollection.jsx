import { useState, useEffect } from 'react';
import styles from './NewCollection.module.css';
import Icons from '../../Icons/Icons';
import { useGetCandlesQuery } from '../../../redux/services';
import CardItem from '../../CardItem/CardItem';

export const NewCollection = () => {
  const [catalog, setCatalog] = useState([]);
  const { data, error, isLoading } = useGetCandlesQuery();
  const [listPosition, setListPosition] = useState(0);
  const [scrollBarPosition, setScrollBarPosition] = useState(0);

  useEffect(() => {
    if (data) {
      setCatalog(data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  const widthScroll = 634; // .scroll {width: 634px;}
  const widthScrollNav = data ? 634 / (data.length - 2) : 0;
  const widthSlide = 412 + 30;
  const listPositionEndPointNext = data ? -(widthSlide * (data.length - 4)) : 0;
  const listPositionEndPointPrev = data ? -(widthSlide * (data.length - 2)) : 0;

  const handleNext = () => {
    if (listPosition < listPositionEndPointNext) {
      setListPosition(widthSlide);
      setScrollBarPosition(-widthScrollNav);
    }
    setListPosition((prevPosition) => prevPosition - widthSlide);
    setScrollBarPosition((prevPosition) => prevPosition + widthScrollNav);
  };

  const handlePrev = () => {
    if (listPosition > -widthSlide) {
      setListPosition(listPositionEndPointPrev);
      setScrollBarPosition(widthScroll);
    }
    setListPosition((prevPosition) => prevPosition + widthSlide);
    setScrollBarPosition((prevPosition) => prevPosition - widthScrollNav);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <h5 className={styles.new_collection_text}>New collection</h5>
        <h3 className={styles.new_collection_goods_text}>New Hygge goods for comfort</h3>
        <ul className={styles.itemsList} style={{ left: `${listPosition}px` }}>
          {catalog.map((candle, index) => (
            <CardItem key={index} candle={candle} />
          ))}
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
      <div className={styles.scroll}>
        <div className={styles.scrollnav} style={{ transform: `translateX(${scrollBarPosition}px)`, width: `${widthScrollNav}px` }}></div>
      </div>
    </>
  );
};
