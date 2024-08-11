import { useState } from 'react';
import styles from './Amount.module.css';

export const Amount = ({ onAmountChange, dataAmount, quantity }) => {
  const [amount, setAmount] = useState(dataAmount ? dataAmount : 1);

  const handlePlus = () => {
    const newAmount = amount + 1;
    if (amount < quantity) {
      setAmount(newAmount);
      onAmountChange(newAmount);
    }
  };

  const handleMinus = () => {
    const newAmount = amount <= 1 ? 1 : amount - 1;
    setAmount(newAmount);
    onAmountChange(newAmount);
  };

  const handleChange = newAmount => {
    setAmount(newAmount);
  };

  const handleBlur = () => {
    if (!amount || amount < 1) {
      setAmount(1);
      onAmountChange(1);
      return;
    }
    if (amount > Number(quantity)) {
      setAmount(Number(quantity));
      onAmountChange(Number(quantity));
      return;
    }
    setAmount(amount);
    onAmountChange(Number(amount));
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.btn} onClick={handleMinus}>
        -
      </button>
      <input
        className={styles.amountText}
        value={amount}
        type="number"
        onChange={e => handleChange(e.target.value)}
        onBlur={handleBlur}
      />
      <button className={styles.btn} onClick={handlePlus}>
        +
      </button>
    </div>
  );
};
