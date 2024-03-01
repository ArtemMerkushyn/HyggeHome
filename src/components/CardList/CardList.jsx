import React from 'react';

import CardItem from '../CardItem/CardItem';
import styles from './CardList.module.css';
import SkeletonProductLib from '../skeleton/SkeletonProductLib';
import imgError from '../../image/error.jpeg';

export default function CardList({ data, error, isLoading, totalPages }) {
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
    <div
      className={styles.wrapper}
      style={{ marginBottom: totalPages > 1 ? '60px' : '120px' }}
    >
      {data.length === 0 ? (
        <div className={styles.notFound}>
          <img
            style={{ borderRadius: '24px' }}
            src="/images/notFound/notFound.jpg"
            alt="not-found"
          />
        </div>
      ) : (
        <ul className={styles.cardList}>
          {data.map((item, index) => (
            <CardItem key={index} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}
