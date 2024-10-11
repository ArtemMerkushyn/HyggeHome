import { useState } from 'react';
import { Rating } from '../../Rating/Rating';
import styles from './Reviews.module.css';
import items from './db.json';
import FeedbackForm from '../../FeedbackForm/FeedbackForm';
import { Modal } from '../../MainPageContent/ModalWindow/Modal';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/selectors';
import { toast } from 'react-toastify';

export default function Reviews() {
  const [modal, setModal] = useState(false);
  const storedUser = useSelector(selectUser);
  const toggleModal = () => {
    if (
      storedUser.email === null &&
      storedUser.isAdmin === null &&
      storedUser.name === null
    ) {
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
  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className={styles.review}>
          <div className={styles.review__left}>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.date}>{item.date}</p>
          </div>
          <div className={styles.review__right}>
            <Rating rating={item.rating} />
            <p className={styles.comment}>{item.comment}</p>
          </div>
          <div className={styles.rectangle}></div>
        </div>
      ))}
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
