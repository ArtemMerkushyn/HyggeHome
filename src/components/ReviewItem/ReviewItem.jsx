import React from 'react';
import styles from './ReviewItem.module.css';
import { Rating } from '../Rating/Rating';

const ReviewItem = ({ item, index }) => {
  const formatDate = timestamp => {
    const date = new Date(timestamp);
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div key={index} className={styles.review}>
      <div className={styles.review__left}>
        <p className={styles.name}>{item.fullName}</p>
        <p className={styles.date}>{formatDate(item.feedbackDate)}</p>
      </div>
      <div className={styles.review__right}>
        <div className={styles.reviewInfoContainer}>
          <Rating rating={item.stars} />
        </div>
        <p className={styles.comment}>{item.message}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
