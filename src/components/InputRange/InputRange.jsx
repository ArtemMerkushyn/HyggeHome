import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import styles from './InputRange.module.css';
import { useEffect, useState } from 'react';

export const InputRange = ({ price, applyFilterPrice }) => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const step = Math.round(max / min);
  const minDistance = (max - min) * 0.08;
  const [value, setValue] = useState([0, 0]);
  const [inputLeft, setInputLeft] = useState(min.toString());
  const [inputRight, setInputRight] = useState(max.toString());

  // useEffect(() => {
  //   if (price.length > 0) {
  //     setMin(price[0]);
  //     setMax(price[1]);
  //     setInputLeft(price[0]);
  //     setInputRight(price[1]);
  //   }
  // }, [price]);

  const handleChange = (_event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], max - minDistance);
        setValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue([clamped - minDistance, clamped]);
      }
    } else {
      setValue(newValue);
    }
  };

  const handleChangeInput = (index, e) => {
    let parsedValue = parseInt(e);
    if (isNaN(parsedValue)) {
      parsedValue = 0;
    }

    if (index === 0) {
      if (parsedValue > max) return;
      setInputLeft([parsedValue.toString()]);
    } else {
      if (parsedValue > max) return;
      setInputRight(parsedValue.toString());
    }
  };

  // useEffect(() => {
  //   setValue([inputLeft, inputRight]);
  // }, [inputLeft, inputRight, value]);

  return (
    <>
      <Box>
        <Slider
          step={step}
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="off"
          sx={{ color: '#FCB654' }}
        />
      </Box>
      <div className={styles.priceInputs}>
        <input
          className={styles.priceInput}
          type="text"
          value={value[0]}
          onChange={e => handleChangeInput(0, e.target.value)}
        />
        <input
          className={styles.priceInput}
          type="text"
          value={value[1]}
          onChange={e => handleChangeInput(1, e.target.value)}
        />
      </div>
    </>
  );
};
