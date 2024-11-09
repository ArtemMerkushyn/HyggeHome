import React, { useState } from 'react';
import styles from './AdminQuestionItem.module.css';
import ModalAnswer from '../ModalAnswer/ModalAnswer';

const AdminQuestionItem = ({ item, index }) => {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const formatDate = timestamp => {
    const date = new Date(timestamp);
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const handleOpenModal = (answer = null) => {
    setModalData(answer);
    setModal(true);
  };

  return (
    <li className={styles.question} key={index}>
      <div className={styles.question__wrapper}>
        <div className={styles.question__left}>
          <p className={styles.name}>{item.fullName}</p>
          <p className={styles.date}>{formatDate(item.questionDate)}</p>
        </div>
        <div>
          <p className={styles.comment}>{item.message}</p>
        </div>
      </div>
      <hr className={styles.line} />
      {item.answers && item.answers.length > 0 ? (
        item.answers.map(answer => (
          <div className={styles.answerWrapper} key={answer.id}>
            <div className={styles.answerInfo}>
              <h2 className={styles.answerName}>{answer.fullName}</h2>
              <p className={styles.answerDate}>
                {formatDate(answer.answerDate)}
              </p>
              <p className={styles.answerMessage}>{answer.message}</p>
            </div>
            <button
              className={styles.editButton}
              onClick={() => handleOpenModal(answer)}
            >
              Edit
            </button>
          </div>
        ))
      ) : (
        <button
          className={styles.answerButton}
          onClick={() => handleOpenModal()}
        >
          Answer
        </button>
      )}
      {modal && (
        <ModalAnswer
          setShowModal={setModal}
          data={item}
          existingAnswer={modalData}
        />
      )}
    </li>
  );
};

export default AdminQuestionItem;
