import { useEffect, useState } from 'react';
import ModalQuestion from '../ModalQuestion/ModalQuestion';
import styles from './Questions.module.css';
import QuestionItem from '../../QuestionItem/QuestionItem';

export default function Questions({ data }) {
  const [questions, setQuestions] = useState(data.questions);
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
      {data.questions.length > 0 &&
        data.questions.map((item, index) => (
          <QuestionItem item={item} index={index} />
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
