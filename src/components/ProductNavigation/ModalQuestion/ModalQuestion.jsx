import { useState } from 'react';
import styles from './ModalQuestion.module.css';
import { toast } from 'react-toastify';

export default function ModalQuestion({ setShowModal, addNewQuestion }) {
  const [firstName, setFirstName] = useState('');
  const [question, setQuestion] = useState('');

  const getCurrentDate = () => {
    const months = [
      'JAN',
      'FEB',
      'MAR',
      'APR',
      'MAY',
      'JUN',
      'JUL',
      'AUG',
      'SEP',
      'OCT',
      'NOV',
      'DEC',
    ];
    const currentDate = new Date();
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  const handleAddQuestion = () => {
    const currentDate = getCurrentDate();

    if (firstName.trim() === '' || question.trim() === '') {
      toast.error('The field cannot be empty.');
      return;
    }

    const newQuestion = {
      name: firstName,
      question: question,
      date: currentDate,
    };

    addNewQuestion(newQuestion);

    setFirstName('');
    setQuestion('');
    setShowModal(false);
  };

  return (
    <div className={styles.overlay} onClick={() => setShowModal(false)}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={() => setShowModal(false)}
        >
          X
        </button>
        <label className={styles.label}>
          Your first Name:
          <input
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            name="firstName"
            required="true"
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Your question:
          <textarea
            value={question}
            onChange={e => setQuestion(e.target.value)}
            name="question"
            placeholder="Enter the question"
            rows={4}
            required="true"
            className={styles.textarea}
          />
        </label>
        <button type="button" onClick={handleAddQuestion}>
          Add question
        </button>
      </div>
    </div>
  );
}
