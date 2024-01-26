import styles from './CandlesItem.module.css';

export default function CandlesItem({ candle }) {
  return (
    <div>
      <li className={styles.cardItem}>
        <img
          className={styles.cardImage}
          src={candle.image}
          alt="Candles"
        ></img>
        <img
          className={styles.cardPicture}
          src={candle.picture}
          alt="Candles"
        ></img>
      </li>
      <p className={styles.titleItem}>Product name</p>
      <p className={styles.titleItem} style={{ opacity: '0.8' }}>
        $4
      </p>
    </div>
  );
}
