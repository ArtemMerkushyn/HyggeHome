import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 6.5;

export default function MinimumDistanceSlider() {
  const [value, setValue] = useState([20, 37]);

  const handleChange2 = (_event, newValue, activeThumb) => {
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
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Minimum distance shift'}
        value={value}
        onChange={handleChange2}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
    </Box>
  );
}
