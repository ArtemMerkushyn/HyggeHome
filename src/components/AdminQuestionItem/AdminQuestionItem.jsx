import React from 'react';
import styles from './AdminQuestionItem.module.css';

const AdminQuestionItem = ({ item, index }) => {
  const formatDate = timestamp => {
    const date = new Date(timestamp);
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  return (
    <li className={styles.question} key={index}>
      <div className={styles.question__wrapper} key={index}>
        <div className={styles.question__left}>
          <p className={styles.name}>{item.fullName}</p>
          <p className={styles.date}>{formatDate(item.questionDate)}</p>{' '}
        </div>
        <div>
          <p className={styles.comment}>{item.message}</p>
        </div>
      </div>
      <hr className={styles.line} />
      {item.answers && item.answers.length > 0 ? (
        <button></button>
      ) : (
        <button className={styles.answerButton}>Answer</button>
      )}
    </li>
  );
};

export default AdminQuestionItem;
