import { useEffect, useState } from 'react';

import ModalQuestion from '../ModalQuestion/ModalQuestion';
import styles from './Questions.module.css';

import items from './db.json';

export default function Questions() {
  const [questions, setQuestions] = useState(items);
  const [showModal, setShowModal] = useState(false);

  const addNewQuestion = newQuestion => {
    setQuestions([...questions, newQuestion]);
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showModal]);

  return (
    <div>
      {questions.map((item, index) => (
        <div className={styles.question} key={index}>
          <div
            className={styles.question__wrapper}
            key={index}
          >
            <div className={styles.question__left}>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.date}>{item.date}</p>
            </div>
            <div>
              <p className={styles.comment}>{item.question}</p>
            </div>
          </div>
          <div className={styles.rectangle}></div>
        </div>
      ))}
      <button
        type="button"
        className={styles.button}
        onClick={() => setShowModal(!showModal)}
      >
        Add question +
      </button>
      {showModal && (
        <ModalQuestion
          setShowModal={setShowModal}
          addNewQuestion={addNewQuestion}
        />
      )}
    </div>
  );
}
