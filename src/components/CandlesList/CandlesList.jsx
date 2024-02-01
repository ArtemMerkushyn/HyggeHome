import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useGetCandlesQuery } from '../../redux/services';
import CandlesItem from '../CandlesItem/CandlesItem';
import styles from './CandlesList.module.css';
import SkeletonProductLib from '../skeleton/SkeletonProductLib';
import { isActiveSearch, selectCandles } from '../../redux/selectors';

export default function CandlesList() {
  const { data, error, isLoading } = useGetCandlesQuery();
  const [catalog, setCatalog] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const resultSearch = useSelector(selectCandles);
  const isActive = useSelector(isActiveSearch);
  console.log(isActive)
  console.log(data);

  useEffect(() => {
    if(data) isActive === true ? setCatalog(resultSearch) : setCatalog(data);
  }, [isActive, resultSearch, data]);

  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = catalog.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  if (isLoading) {
    return (
      <div className={styles.skeleton}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(loading => (
          <div className="col-3" key={loading}>
            <SkeletonProductLib />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  return (
    <div className={styles.wrapper}>
      <ul
        className={styles.cardList}
        style={{ marginBottom: catalog.length > itemsPerPage ? '' : '129px' }}
      >
        {currentItems.map((candle, index) => (
          <CandlesItem key={index} candle={candle} />
        ))}
      </ul>
      {catalog.length > itemsPerPage && (
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
      )}
    </div>
  );
}
