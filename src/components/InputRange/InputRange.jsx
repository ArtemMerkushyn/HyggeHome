import { useEffect, useState } from 'react';
import styles from './InputRange.module.css';
import ReactSlider from 'react-slider';

export const InputRange = ({ defaultPrice, currentPrice, setCurrentPrice }) => {
  const [inputMinValue, setMin] = useState(0);
  const [inputMaxValue, setMax] = useState(0);

  useEffect(() => {
    setMin(currentPrice[0]);
    setMax(currentPrice[1]);
  }, [currentPrice]);

  function onSliderChange(event) {
    setCurrentPrice(event);
  }

  function onMinChange() {
    let minPrice = +inputMinValue;

    if (+minPrice < defaultPrice[0]) {
      minPrice = defaultPrice[0];
    }
    if (+minPrice >= currentPrice[1]) {
      minPrice = currentPrice[1] - 1;
    }

    setCurrentPrice([minPrice, currentPrice[1]]);
    setMin(minPrice);
  }

  function onMaxChange() {
    let maxPrice = +inputMaxValue;

    if (maxPrice > defaultPrice[1]) {
      maxPrice = defaultPrice[1];
    }
    if (+inputMaxValue <= currentPrice[0]) {
      maxPrice = currentPrice[0] + 1;
    }
    setCurrentPrice([currentPrice[0], maxPrice]);
    setMax(maxPrice);
  }

  return (
    <>
      <ReactSlider
        className={styles.slider}
        onChange={onSliderChange}
        value={currentPrice}
        min={defaultPrice[0]}
        max={defaultPrice[1]}
        step={1}
        thumbClassName={styles.thumb}
        trackClassName={styles.track}
        minDistance={1}
        pearling
      />

      <div className={styles.priceInputs}>
        <input
          className={styles.priceInput}
          type="number"
          value={inputMinValue}
          onChange={e => setMin(e.target.value)}
          onBlur={() => onMinChange()}
        />
        <input
          className={styles.priceInput}
          type="number"
          value={inputMaxValue}
          onChange={e => setMax(e.target.value)}
          onBlur={() => onMaxChange()}
        />
      </div>
    </>
  );
};
