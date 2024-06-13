import { useState, useEffect } from 'react';
import styles from './InputRange.module.css';
import ReactSlider from 'react-slider';

export const InputRange = ({ price, setPriceRange }) => {
  const [values, setValues] = useState([price[0], price[1]]);
  const [range, setRange] = useState([0, 0]);

  useEffect(() => {
    if (price && price.length === 2) {
      setValues([price[0], price[1]]);
      setRange([price[0], price[1]]);
    }
  }, [price]);

  const handleInputChange = (index, event) => {
    let newValue = Number(event.target.value);
    if (!isNaN(newValue)) {
      const newValues = [...values];

      if (index === 0 && newValue < price[0]) {
        newValue = price[0];
      }
      if (index === 1 && newValue > price[1]) {
        newValue = price[1];
      }
      newValues[index] = newValue;
      setValues(newValues);
      setPriceRange(newValues);
    }
  };

  const setSlider = event => {
    setValues(event);
    setPriceRange(event);
  };

  return (
    <>
      <ReactSlider
        className={styles.slider}
        onChange={setSlider}
        value={values}
        min={range[0]}
        max={range[1]}
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
          readOnly
        />
        <input
          className={styles.priceInput}
          type="text"
          value={values[1]}
          onChange={event => handleInputChange(1, event)}
          readOnly
        />
      </div>
    </>
  );
};
