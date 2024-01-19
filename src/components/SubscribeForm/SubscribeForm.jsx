import { useState } from 'react';
import { toast } from 'react-toastify';
import styles from './SubscribeForm.module.css';

export default function SubscribeForm() {
    const [email, setEmail] = useState('');

    function subscribe(event) {
        event.preventDefault();
      
        toast(`You subscribed with '${email}'`);
        setEmail('');
    }

    return (
        <form onSubmit={subscribe} className={styles.form}>
            <input
                type="email"
                name="email"
                className={styles.input}
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className={styles.button}>{'>'}</button>
        </form>
    );
}
