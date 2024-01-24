import { useState } from 'react';
import { toast } from 'react-toastify';
import styles from './SubscribeForm.module.css';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setValidEmail] = useState(true);

  function subscribe(event) {
    event.preventDefault();

    if (email.trim() === '') {
      toast.error('The field cannot be empty.');
      return;
    }

    if (isValidEmail) {
      toast(`You subscribed with '${email}'`);
      setEmail('');
    } else {
      toast.error('Please enter a valid email address.');
    }
  }

  function handleEmailChange(e) {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enteredEmail);
    setValidEmail(isValid);
  }

  return (
    <form onSubmit={subscribe} className={styles.form}>
      <input
        type="email"
        name="email"
        className={styles.input}
        placeholder="Your email"
        value={email}
        onChange={handleEmailChange}
      />
      <button type="submit" className={styles.button}></button>
    </form>
  );
}
