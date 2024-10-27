import { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { toast } from 'react-toastify';

import styles from './ModalQuestion.module.css';
import Checkbox from '../Сheckbox/Checkbox';
import { useParams } from 'react-router-dom';
import { usePostQuestionMutation } from '../../../redux/services';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/selectors';

export default function ModalQuestion({ setShowModal, addNewQuestion }) {
  const storedUser = useSelector(selectUser);
  const [firstName, setFirstName] = useState(storedUser.name);
  const [email, setEmail] = useState(storedUser.email);
  const [question, setQuestion] = useState('');
  const { product_article } = useParams();
  const [postQuestion] = usePostQuestionMutation();

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

    setFirstName('');
    setQuestion('');
    setShowModal(false);

    postQuestion({
      article: product_article,
      fullName: firstName,
      message: question,
    }).then(res => {
      console.log(res);
      if (res.data.statusCode === 200) {
        toast.success(`${res.result}`);
      } else if (res.error.status === 401) {
        toast.error(`${res.error.data.error}`);
      } else {
        toast.error('Message has not been posted. Try again later');
      }
    });
  };

  return (
    <div className={styles.overlay} onClick={() => setShowModal(false)}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={() => setShowModal(false)}
        >
          <MdOutlineClose className={styles.icons} />
        </button>
        <h3 className={styles.title}>Write your question</h3>
        <label className={styles.label}>
          Your first name*
          <input
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            name="firstName"
            required={true}
            className={styles.input}
            placeholder="Your first name"
          />
        </label>
        <label className={styles.label}>
          Your email*
          <input
            name="email"
            className={styles.input}
            placeholder="Your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            required={true}
            className={styles.textarea}
          />
        </label>
        <div>
          <Checkbox label="Send an answer to your question by email" />
        </div>
        <button
          type="button"
          onClick={handleAddQuestion}
          className={styles.button}
        >
          Add question
        </button>
      </div>
    </div>
  );
}
