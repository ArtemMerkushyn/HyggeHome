import React from 'react';
import styles from './QuestionItem.module.css';

const QuestionItem = ({ item, index }) => {
  const formatDate = timestamp => {
    const date = new Date(timestamp);
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  return (
    <div className={styles.question} key={index}>
      <div className={styles.question__wrapper} key={index}>
        <div className={styles.question__left}>
          <p className={styles.name}>{item.fullName}</p>
          <p className={styles.date}>{formatDate(item.questionDate)}</p>{' '}
        </div>
        <div>
          <p className={styles.comment}>{item.message}</p>
        </div>
      </div>
      <div className={styles.rectangle}></div>
    </div>
  );
};

export default QuestionItem;
