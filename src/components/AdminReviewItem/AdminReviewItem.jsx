import React from 'react';
import styles from './AdminReviewItem.module.css';
import { Rating } from '../Rating/Rating';

const AdminReviewItem = ({ item, index, status }) => {
  const formatDate = timestamp => {
    const date = new Date(timestamp);
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const renderButtons = status => {
    switch (status) {
      case 1:
        return (
          <>
            <button className={styles.declineButton}>Decline</button>
            <button className={styles.acceptButton}>Accept</button>
          </>
        );
      case 2:
        return <button className={styles.declineButton}>Decline</button>;
      case 3:
        return <button className={styles.acceptButton}>Accept</button>;
      default:
        return null;
    }
  };

  return (
    <div key={index} className={styles.wrapper}>
      <div className={styles.review}>
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

      <hr className={styles.line} />
      <div className={styles.buttonsWrapper}>{renderButtons(status)}</div>
    </div>
  );
};

export default AdminReviewItem;
