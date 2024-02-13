import styles from './Questions.module.css';

import items from './db.json';

export default function Questions() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <ul>
        {items.map((item, index) => (
          <>
            <li
              key={index}
              style={{
                display: 'flex',
                alignItems: 'baseline',
              }}
            >
              <div style={{ width: '332px' }}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.date}>{item.date}</p>
              </div>
              <div style={{ width: '743px' }}>
                <p className={styles.comment}>{item.questions}</p>
              </div>
            </li>
            <div className={styles.rectangle}></div>
          </>
        ))}
      </ul>
      <button className={styles.button}>Add question +</button>
    </div>
  );
}
