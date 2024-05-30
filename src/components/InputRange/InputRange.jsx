import { useState, useEffect } from 'react';
import styles from './InputRange.module.css';
import ReactSlider from 'react-slider';

export const InputRange = ({ price, applyFilterPrice }) => {
  const [values, setValues] = useState([price[0], price[1]]);

  useEffect(() => {
    if (price && price.length === 2) {
      setValues([price[0], price[1]]);
    }
  }, [price]);

  const handleInputChange = (index, event) => {
    const newValue = Number(event.target.value);
    if (!isNaN(newValue)) {
      const newValues = [...values];
      newValues[index] = newValue;
      setValues(newValues);
    }
  };

  return (
    <>
      <ReactSlider
        className={styles.slider}
        onChange={setValues}
        value={values}
        min={price[0]}
        max={price[1]}
        step={1}
        thumbClassName={styles.thumb}
        trackClassName={styles.track}
        minDistance={1}
        pearling
      />

      <div className={styles.priceInputs}>
        <input
          className={styles.priceInput}
          type="text"
          value={values[0]}
          onChange={event => handleInputChange(0, event)}
        />
        <input
          className={styles.priceInput}
          type="text"
          value={values[1]}
          onChange={event => handleInputChange(1, event)}
        />
      </div>
    </>
  );
};
