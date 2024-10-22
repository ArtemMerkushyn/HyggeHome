import React from 'react';
import styles from './ReviewsNQuestions.module.css';
import MyAccountNav from '../../../components/MyAccontNav/MyAccountNav';

const ReviewsNQuestions = () => {
  return (
    <div className={styles.wrapper}>
      <MyAccountNav />
      <div className={styles.container}></div>
    </div>
  );
};

export default ReviewsNQuestions;
