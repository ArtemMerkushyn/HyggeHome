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
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <ul>
        {questions.map((item, index) => (
          <div key={index}>
            <li
              style={{
                display: 'flex',
                alignItems: 'baseline',
              }}
            >
              <div style={{ width: '332px' }}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.date}>{item.date}</p>
              </div>
              <div style={{ width: '743px' }}>
                <p className={styles.comment}>{item.question}</p>
              </div>
            </li>
            <div className={styles.rectangle}></div>
          </div>
        ))}
      </ul>
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
