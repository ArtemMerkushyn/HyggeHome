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
        <h3 className={styles.title}>Write your question</h3>
        <label className={styles.label}>
        Your first name*
          <input
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            name="firstName"
            required="true"
            className={styles.input}
            placeholder='Your first name'
          />
        </label>
        <label className={styles.label}>
        Your email*
          <input            
            name="email"            
            className={styles.input}
            placeholder='Your email'
          />
        </label>
        <label className={styles.label}>
        Your question*
          <textarea
            value={question}
            onChange={e => setQuestion(e.target.value)}
            name="question"
            placeholder="What materials are used in the production of candles?"
            rows={4}
            required="true"
            className={styles.textarea}
          />
        </label>
        <button type="button" onClick={handleAddQuestion} className={styles.button}>
          Add question
        </button>
      </div>
    </div>
  );
}
