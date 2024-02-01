import { useDispatch } from 'react-redux';
import CandlesList from '../../components/CandlesList/CandlesList';
import Filters from '../../components/Filters/Filters';
import Sort from '../../components/Sort/Sort';
import styles from './Candles.module.css';
import { useEffect } from 'react';
import { setIsActive } from '../../redux/candlesSlice';


export const Candles = () => {
  const dispatch = useDispatch();
 useEffect(() => {
   dispatch(setIsActive());
 }, [dispatch]);

  return (
    <div className={styles.wrapperFilters}>
      <div className={styles.wrapper}>
        <span>Home </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="15"
          viewBox="0 0 8 15"
          fill="none"
        >
          <path
            d="M0 1.27778L0.8 0.5L8 7.5L0.8 14.5L0 13.7222L6.4 7.5L0 1.27778Z"
            fill="#CACCCE"
          />
        </svg>
        <span className={styles.wrapperSpan}> Candles</span>
      </div>
      <h2 className={styles.title}>
        Choose the <span className={styles.spanTitle}>perfect candles</span> for
        atmosphere
      </h2>
      <div className={styles.wrapperButtons}>
        <Filters />
        <div className={styles.dropdownList}>
          Sort by
          <Sort />
        </div>
      </div>
      <CandlesList />
    </div>
  );
};
