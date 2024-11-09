import { useState } from 'react';
import { toast } from 'react-toastify';
import styles from './ModalAnswer.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/selectors';
import { usePostAnswerMutation } from '../../redux/services';
import { MdOutlineClose } from 'react-icons/md';

export default function ModalAnswer({ setShowModal, data, existingAnswer }) {
  const { article } = data;
  const storedUser = useSelector(selectUser);
  const [firstName, setFirstName] = useState(storedUser.name);

  const [answer, setAnswer] = useState(
    existingAnswer ? existingAnswer.message : '',
  );

  const [postAnswer] = usePostAnswerMutation();

  const handleAddAnswer = () => {
    if (answer.trim() === '') {
      toast.error('The field cannot be empty.');
      return;
    }

    const newAnswer = {
      article: article,
      fullName: firstName,
      message: answer,
    };

    if (existingAnswer) {
      console.log(newAnswer);
    } else {
      postAnswer(newAnswer).then(res => {
        console.log(res);
        if (res?.data?.status === 200) {
          toast.success(`${res.data.result}`);
          setShowModal(false);
        } else if (res?.error?.status === 401) {
          toast.error(`${res.error.data.error}`);
        } else {
          toast.error('Answer has not been posted. Try again later');
        }
      });
    }
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
        <h3 className={styles.title}>
          {existingAnswer ? 'Edit your answer' : 'Write your answer'}
        </h3>
        <textarea
          value={answer}
          onChange={e => setAnswer(e.target.value)}
          name="answer"
          placeholder="Write your answer..."
          rows={4}
          required={true}
          className={styles.textarea}
        />
        <button
          type="button"
          onClick={handleAddAnswer}
          className={styles.button}
        >
          {existingAnswer ? 'Update answer' : 'Add answer'}
        </button>
      </div>
    </div>
  );
}
