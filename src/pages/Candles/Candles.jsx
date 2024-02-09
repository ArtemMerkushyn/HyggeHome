import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CardList from '../../components/CardList/CardList';
import Filters from '../../components/Filters/Filters';
import Sort from '../../components/Sort/Sort';
import { useGetCandlesQuery } from '../../redux/services';
import { setIsActive } from '../../redux/slices/searchSlice';
import styles from './Candles.module.css';

export const Candles = () => {
  const { data, error, isLoading } = useGetCandlesQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsActive(false));
  }, [dispatch]);

  const [newData, setNewData] = useState([]);

  const updateFilteredData = filteredData => {
    setNewData(filteredData);
  };

  useEffect(() => {
    if (data) {
      setNewData(data);
    }
  }, [data]);

  return (
    <div className={styles.wrapperFilters}>
      <div className={styles.wrapper}>
        <Link to={'/'}>
          <span>Home </span>
        </Link>
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
        <Filters
          colorsView={true}
          dataFilter={data}
          onUpdateFilteredData={updateFilteredData}
        />
        <div className={styles.dropdownList}>
          Sort by
          <Sort data={newData} onUpdateFilteredData={updateFilteredData} />
        </div>
      </div>
      <CardList data={newData} error={error} isLoading={isLoading} />
    </div>
  );
};
