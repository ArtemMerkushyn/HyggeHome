import React, { useEffect, useState } from 'react';
import { useGetCandlesQuery } from '../../redux/services';
import CandlesItem from '../CandlesItem/CandlesItem';

import styles from './CandlesList.module.css';

// import card from './db.json';

export default function CandlesList() {
  const { data, error, isLoading } = useGetCandlesQuery();
  const [catalog, setCatalog] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (data) {
      setCatalog(data);
    }
  }, [data]);

  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = catalog.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  return (
    <div className={styles.wrapper}>
      <ul className={styles.cardList}>
        {currentItems.map((candle, index) => (
          <CandlesItem key={index} candle={candle} />
        ))}
      </ul>
      <div className={styles.pagination}>
        {Array.from({
          length: Math.ceil(catalog.length / itemsPerPage),
        }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={
              index + 1 === currentPage
                ? `${styles.pageNumber} ${styles.activePage}`
                : styles.pageNumber
            }
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
