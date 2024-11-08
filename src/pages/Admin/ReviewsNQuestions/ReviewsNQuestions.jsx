import React, { useState, useEffect } from 'react';
import styles from './ReviewsNQuestions.module.css';
import MyAccountNav from '../../../components/MyAccontNav/MyAccountNav';
import DropDownSort from '../../../components/DropDownSort/DropDownSort';
import Switcher from '../../../components/Switcher/Switcher';
import { questionsArray, feedbackArray } from './db';
import QuestionItem from '../../../components/QuestionItem/QuestionItem';
import ReviewItem from '../../../components/ReviewItem/ReviewItem';
import AdminQuestionItem from '../../../components/AdminQuestionItem/AdminQuestionItem';

const rewievTabs = [
  { id: 1, title: 'New' },
  { id: 2, title: 'Accepted' },
  { id: 3, title: 'Declined' },
];
const questionTabs = [
  {
    id: 1,
    title: 'New',
  },
  { id: 2, title: 'Answered' },
];

const ReviewsNQuestions = () => {
  const [sortValue, setSortValue] = useState('Reviews');
  const tabs = sortValue === 'Reviews' ? rewievTabs : questionTabs;
  const [selectedId, setSelectedId] = useState(tabs[0].id);
  const [data, setData] = useState([]);

  const handleFilterPick = () => {
    if (sortValue === 'Reviews') {
      switch (selectedId) {
        case 1:
          setData(
            feedbackArray
              .slice()
              .filter(item => !item.approved)
              .sort((a, b) => b.feedbackDate - a.feedbackDate),
          );
          break;
        case 2:
          setData(feedbackArray.filter(item => item.approved));
          break;
        case 3:
          setData(feedbackArray.filter(item => !item.approved));
          break;
        default:
          setData(feedbackArray);
      }
    } else if (sortValue === 'Questions') {
      switch (selectedId) {
        case 1:
          setData(
            questionsArray
              .filter(item => !item.answers.length)
              .sort((a, b) => b.questionDate - a.questionDate),
          );
          break;
        case 2:
          setData(questionsArray.filter(item => item.answers.length));
          break;
        default:
          setData(questionsArray);
      }
    }
  };

  useEffect(() => {
    handleFilterPick();
  }, [sortValue, selectedId]);

  return (
    <div className={styles.wrapper}>
      <MyAccountNav />
      <div className={styles.container}>
        <h3 className={styles.title}>List of all reviews and questions</h3>
        <div className={styles.filterSettings}>
          <div className={styles.switcher}>
            <DropDownSort
              options={['Reviews', 'Questions']}
              value={sortValue}
              setValue={setSortValue}
            />
          </div>
          <Switcher
            tabs={tabs}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        </div>
        <ul className={styles.list}>
          {data.map((item, index) =>
            sortValue === 'Questions' ? (
              <AdminQuestionItem item={item} index={index} />
            ) : (
              <ReviewItem item={item} index={index} />
            ),
          )}
        </ul>
      </div>
    </div>
  );
};

export default ReviewsNQuestions;
