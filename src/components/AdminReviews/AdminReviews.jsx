import { useState, useEffect } from 'react';
import { Rating } from '../../Rating/Rating';
import styles from './AdminReviews.module.css';
import FeedbackForm from '../../FeedbackForm/FeedbackForm';
import { Modal } from '../../MainPageContent/ModalWindow/Modal';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/selectors';
import { toast } from 'react-toastify';
import { useDeleteFeedbackMutation } from '../../../redux/services';

export default function AdminReviews({ data }) {
  const [modal, setModal] = useState(false);
  const [reviews, setReviews] = useState(data.feedbacks);
  const storedUser = useSelector(selectUser);
  const [deleteReview] = useDeleteFeedbackMutation();

  const toggleModal = () => {
    if (!storedUser.email && !storedUser.isAdmin && !storedUser.name) {
      toast.error('Authorize to leave a feedback');
    } else {
      const body = document.body;
      setModal(!modal);
      if (!modal) {
        body.style.overflow = 'hidden';
        body.style.marginRight = '15px';
      } else {
        body.style.overflow = 'auto';
        body.style.marginRight = '';
      }
    }
  };

  useEffect(() => {
    if (data.feedbacks.length > 0) {
      const sortedReviews = data.feedbacks.filter(item => item.approved);

      setReviews(sortedReviews);
    }
  }, [data.feedbacks, storedUser.isAdmin]);

  const formatDate = timestamp => {
    const date = new Date(timestamp);
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  // const handleDeleteReview = async email => {
  //   try {
  //     await deleteReview({ article: data.article, email });
  //     setReviews(prevReviews =>
  //       prevReviews.filter(item => item.email !== email),
  //     );
  //     toast.success('Review deleted successfully');
  //   } catch (error) {
  //     toast.error('Failed to delete review');
  //   }
  // }; Add to review component

  return (
    <div>
      {reviews.length > 0 &&
        reviews.map((item, index) => (
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
        ))}
    </div>
  );
}
