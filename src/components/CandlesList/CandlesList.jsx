// import CandlesItem from '../CandlesItem/CandlesItem'
// import styles from './CandlesList.module.css'

// import card from './db.json'

// export default function CandlesList() {

//     return (
//         <div className={styles.wrapper }>
//         <ul className={ styles.cardList }>
//         {card.map((candle, index) => (
//                 <CandlesItem key={index} candle={candle} />
//         ))}
//         </ul>
//             <button className={styles.showMore}>Show more</button>
//         </div>
//     )
// }

import React, { useState } from 'react';
import CandlesItem from '../CandlesItem/CandlesItem';
import styles from './CandlesList.module.css';

import card from './db.json';

export default function CandlesList() {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = card.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.cardList}>
        {currentItems.map((candle, index) => (
          <CandlesItem key={index} candle={candle} />
        ))}
      </ul>
      <div className={styles.pagination}>
        {Array.from({ length: Math.ceil(card.length / itemsPerPage) }).map(
          (_, index) => (
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
          ),
        )}
      </div>
    </div>
  );
}
