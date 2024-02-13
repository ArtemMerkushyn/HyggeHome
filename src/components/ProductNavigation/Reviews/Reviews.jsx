import { Rating } from '../../Rating/Rating';
import styles from './Reviews.module.css';

import data from './db.json';

export default function Reviews() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <ul>
        {data.map(item => (
          <>
            <li style={{ display: 'flex', marginTop: '20px' }}>
              <div style={{ width: '332px' }}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.date}>{item.date}</p>
              </div>
              <div style={{ width: '743px' }}>
                <p>
                  <Rating rating={item.rating} />
                </p>
                <p className={styles.comment}>{item.comment}</p>
              </div>
            </li>
            <div className={styles.rectangle}></div>
          </>
        ))}
      </ul>
      <button className={styles.button}>Open filters</button>
    </div>
  );
}