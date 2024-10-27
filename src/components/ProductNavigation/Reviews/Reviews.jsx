import { useState, useEffect } from 'react';
import { Rating } from '../../Rating/Rating';
import styles from './Reviews.module.css';
import FeedbackForm from '../../FeedbackForm/FeedbackForm';
import { Modal } from '../../MainPageContent/ModalWindow/Modal';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/selectors';
import { toast } from 'react-toastify';
import { useDeleteFeedbackMutation } from '../../../redux/services';
import ReviewItem from '../../ReviewItem/ReviewItem';

export default function Reviews({ data }) {
  const [modal, setModal] = useState(false);
  const [reviews, setReviews] = useState(data.feedbacks);
  console.log(data.feedbacks);
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
    if (data.feedbacks) {
      if (data.feedbacks.length > 0) {
        const sortedReviews = data.feedbacks.filter(item => item.approved);
        setReviews(sortedReviews);
      }
    }
  }, [data.feedbacks]);

  return (
    <div>
      {reviews &&
        reviews.length > 0 &&
        reviews.map((item, index) => <ReviewItem item={item} index={index} />)}
      <button className={styles.button} onClick={toggleModal}>
        Leave Review
      </button>
      {modal && (
        <Modal funcClick={toggleModal}>
          <FeedbackForm toggle={toggleModal} />
        </Modal>
      )}
    </div>
  );
}
