import React, { useEffect, useState } from 'react';

import CandlesItem from '../CardItem/CardItem';
import styles from './CardList.module.css';
import SkeletonProductLib from '../skeleton/SkeletonProductLib';
import scrollToTop from '../../utils/helpers/scrollToTop';
import imgError from '../../image/error.jpeg';

export default function CardList({ data, error, isLoading }) {
  const [catalog, setCatalog] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (data) setCatalog(data);
  }, [data]);

  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = catalog.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

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
    return (
      <div className={styles.errorWrapper}>
        <img className={styles.error} src={imgError} alt="Error loading" />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      {catalog.length === 0 ? (
        <div className={styles.notFound}>
          <img
            style={{ borderRadius: '24px' }}
            src="/images/notFound/notFound.jpg"
            alt="not-found"
          />
        </div>
      ) : (
        <ul className={styles.cardList}>
          {currentItems.map((candle, index) => (
            <CandlesItem key={index} candle={candle} />
          ))}
        </ul>
      )}
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
