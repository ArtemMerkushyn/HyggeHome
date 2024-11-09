import React, { useState, useEffect } from 'react';
import styles from './ReviewsNQuestions.module.css';
import MyAccountNav from '../../../components/MyAccontNav/MyAccountNav';
import DropDownSort from '../../../components/DropDownSort/DropDownSort';
import Switcher from '../../../components/Switcher/Switcher';
import ReviewItem from '../../../components/ReviewItem/ReviewItem';
import AdminQuestionItem from '../../../components/AdminQuestionItem/AdminQuestionItem';
import {
  useGetFeedbacksQuery,
  useGetQuestionsQuery,
} from '../../../redux/services';
import Pagination from '../../../components/Pagination/Pagination';
import AdminReviewItem from '../../../components/AdminReviewItem/AdminReviewItem';

const reviewTabs = [
  { id: 1, title: 'New' },
  { id: 2, title: 'Accepted' },
  { id: 3, title: 'Declined' },
];
const questionTabs = [
  { id: 1, title: 'New' },
  { id: 2, title: 'Answered' },
];

const ReviewsNQuestions = () => {
  const [sortValue, setSortValue] = useState('Reviews');
  const tabs = sortValue === 'Reviews' ? reviewTabs : questionTabs;
  const [selectedId, setSelectedId] = useState(tabs[0].id);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [email, setEmail] = useState('');

  const {
    data: questionsData,
    error: questionsError,
    isLoading: questionsLoading,
  } = useGetQuestionsQuery({ page, email });
  const {
    data: feedbackData,
    error: feedbackError,
    isLoading: feedbackLoading,
  } = useGetFeedbacksQuery({ page, email });

  const handleFilterPick = () => {
    if (sortValue === 'Reviews' && feedbackData) {
      switch (selectedId) {
        case 1:
          setItems(
            feedbackData.results
              .slice()
              .filter(item => !item.approved)
              .sort(
                (a, b) => new Date(b.feedbackDate) - new Date(a.feedbackDate),
              ),
          );
          break;
        case 2:
          setItems(feedbackData.results.filter(item => item.approved));
          break;
        case 3:
          setItems(feedbackData.results.filter(item => !item.approved));
          break;
        default:
          setItems(feedbackData.results);
      }
    } else if (sortValue === 'Questions' && questionsData) {
      switch (selectedId) {
        case 1:
          setItems(
            questionsData.results
              .filter(item => !item.answers.length)
              .sort(
                (a, b) => new Date(b.questionDate) - new Date(a.questionDate),
              ),
          );
          break;
        case 2:
          setItems(questionsData.results.filter(item => item.answers.length));
          break;
        default:
          setItems(questionsData.results);
      }
    }
  };

  useEffect(() => {
    if (
      (sortValue === 'Reviews' &&
        !feedbackLoading &&
        !feedbackError &&
        feedbackData) ||
      (sortValue === 'Questions' &&
        !questionsLoading &&
        !questionsError &&
        questionsData)
    ) {
      if (sortValue === 'Reviews' && feedbackData) {
        setTotalPages(feedbackData.totalPages);
      } else if (sortValue === 'Questions' && questionsData) {
        setTotalPages(questionsData.totalPages);
      }
      handleFilterPick();
      if (sortValue === 'Questions' && selectedId === 3) {
        setSelectedId(1);
      }
    }
  }, [sortValue, selectedId, feedbackData, questionsData, page]);

  if (feedbackLoading || questionsLoading) {
    return <div>Загрузка...</div>;
  }

  if (feedbackError || questionsError) {
    return <div>Ошибка загрузки данных</div>;
  }

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
          {items.map((item, index) =>
            sortValue === 'Questions' ? (
              <AdminQuestionItem key={item.id} item={item} index={index} />
            ) : (
              <AdminReviewItem
                key={item.id}
                item={item}
                index={index}
                status={selectedId}
              />
            ),
          )}
        </ul>
        <Pagination totalPages={totalPages} newPage={setPage} />
      </div>
    </div>
  );
};

export default ReviewsNQuestions;
