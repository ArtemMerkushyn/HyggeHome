import { Link } from 'react-router-dom';

import CandlesList from '../../components/CardList/CardList';
import Filters from '../../components/Filters/Filters';
import Sort from '../../components/Sort/Sort';
import styles from './Search.module.css';

export const Search = () => {
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
        <span className={styles.wrapperSpan}> Search</span>
      </div>
      <h2 className={styles.title}>Here's what we found</h2>
      <div className={styles.wrapperButtons}>
        <Filters colorsView={false}/>
        <div className={styles.dropdownList}>
          Sort by
          <Sort />
        </div>
      </div>
      <CandlesList />
    </div>
  );
};
