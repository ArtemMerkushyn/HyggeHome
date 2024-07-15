import { Rating } from '../../Rating/Rating';
import styles from './Reviews.module.css';

import items from './db.json';

export default function Reviews() {
  return (
    <div>
        {items.map((item, index) => (
            <div key={index} className={styles.review}>
              <div className={styles.review__left}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.date}>{item.date}</p>
              </div>
              <div className={styles.review__right}>
                <Rating rating={item.rating} />
                <p className={styles.comment}>{item.comment}</p>
              </div>
            <div className={styles.rectangle}></div>
          </div>
        ))}
      <button className={styles.button}>Open filters</button>
    </div>
  );
}
