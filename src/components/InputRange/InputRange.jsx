import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

// import { addPrice } from '../../redux/slices/filterSlice.js';

import styles from './InputRange.module.css';
import { useState } from 'react';

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 8;

export const InputRange = () => {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (_event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue([clamped - minDistance, clamped]);
      }
    } else {
      setValue(newValue);
    }
  };
  return (
    <>
      <Box sx={{ width: ' auto' }}>
        <Slider
          getAriaLabel={() => 'Minimum distance shift'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disableSwap
        />
      </Box>
      <div className={styles.priceInputs}>
        <input
          className={styles.priceInput}
          type="text"
          value={value[0]}
          onChange={handleChange}
        />
        <input
          className={styles.priceInput}
          type="text"
          value={value[1]}
          onChange={handleChange}
        />
      </div>
    </>
  );
};
