import { Rating } from '../../Rating/Rating';
import styles from './Reviews.module.css';

import items from './db.json';

export default function Reviews() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <ul>
        {items.map((item, index) => (
          <div key={index}>
            <li style={{ display: 'flex', marginTop: '20px' }}>
              <div style={{ width: '332px' }}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.date}>{item.date}</p>
              </div>
              <div style={{ width: '743px' }}>
                <Rating rating={item.rating} />
                <p className={styles.comment}>{item.comment}</p>
              </div>
            </li>
            <div className={styles.rectangle}></div>
          </div>
        ))}
      </ul>
      <button className={styles.button}>Open filters</button>
    </div>
  );
}
