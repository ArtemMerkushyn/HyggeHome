import { useState } from 'react';
import styles from './Amount.module.css';

export const Amount = ({ onAmountChange, dataAmount}) => {
  const [amount, setAmount] = useState(dataAmount ? dataAmount : 1);

  const handlePlus = () => {
    setAmount(amount + 1);
    onAmountChange(amount + 1);
  }

  const handleMinus = () => {
    setAmount(amount <= 1 ? 1 : amount - 1);
    onAmountChange(amount <= 1 ? 1 : amount - 1);
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.btn} onClick={handleMinus}>
        -
      </button>
      <span className={styles.amountText}>{amount}</span>
      <button className={styles.btn} onClick={handlePlus}>
        +
      </button>
    </div>
  );
}
