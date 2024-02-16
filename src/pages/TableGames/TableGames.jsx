import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setIsActive } from '../../redux/slices/searchSlice';
import Filters from '../../components/Filters/Filters';
import Sort from '../../components/Sort/Sort';
import CardList from '../../components/CardList/CardList';
import styles from './TableGames.module.css';

export const TableGames = () => {
  const [newData, setNewData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsActive(false));
  }, [dispatch]);

  const updateFilteredData = filteredData => {
    setNewData(filteredData);
    setNewData([]);
  };

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
        <span className={styles.wrapperSpan}> Table Games</span>
      </div>
      <h2 className={styles.title}>
        Choose the <span className={styles.spanTitle}>table games</span> for
        atmosphere
      </h2>
      <div className={styles.wrapperButtons}>
        <Filters onUpdateFilteredData={updateFilteredData} />
        <div className={styles.dropdownList}>
          Sort by
          <Sort data={newData} onUpdateFilteredData={updateFilteredData} />
        </div>
      </div>
      <CardList data={newData} />
    </div>
  );
};
