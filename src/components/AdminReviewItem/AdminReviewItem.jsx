import React from 'react';
import styles from './AdminReviewItem.module.css';
import { Rating } from '../Rating/Rating';
import { useUpdateFeedbackStatusMutation } from '../../redux/services';

const AdminReviewItem = ({ item, index, status, reviews, setReviews }) => {
  console.log(item);
  const [approve] = useUpdateFeedbackStatusMutation();
  const formatDate = timestamp => {
    const date = new Date(timestamp);
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const handleApprove = item => {
    approve({
      article: item.article,
      email: item.email,
      approved: true,
    }).then(res => {
      const updatedList = reviews.filter(
        review => review.feedbackDate !== item.feedbackDate,
      );
      setReviews(updatedList);
    });
  };

  const handleDecline = item => {
    approve({
      article: item.article,
      email: item.email,
      approved: false,
    }).then(res => {
      const updatedList = reviews.filter(
        review => review.feedbackDate !== item.feedbackDate,
      );
      setReviews(updatedList);
    });
  };

  const renderButtons = status => {
    switch (status) {
      case 1:
        return (
          <>
            <button
              className={styles.declineButton}
              onClick={() => handleDecline(item)}
            >
              Decline
            </button>
            <button
              className={styles.acceptButton}
              onClick={() => handleApprove(item)}
            >
              Accept
            </button>
          </>
        );
      case 2:
        return (
          <button
            className={styles.declineButton}
            onClick={() => handleDecline(item)}
          >
            Decline
          </button>
        );
      case 3:
        return (
          <button
            className={styles.acceptButton}
            onClick={() => handleApprove(item)}
          >
            Accept
          </button>
        );
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
