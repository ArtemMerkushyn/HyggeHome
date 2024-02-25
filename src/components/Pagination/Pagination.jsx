import { useState } from 'react';

import styles from './Pagination.module.css';

export default function Pagination({ totalPages, newPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    newPage(pageNumber);
    scrollToTop();
  };

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }

  return (
    <>
      {totalPages > 1 && (
        <div className={styles.pagination}>
          {Array.from({ length: totalPages }).map((_, index) => (
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
    </>
  );
}
