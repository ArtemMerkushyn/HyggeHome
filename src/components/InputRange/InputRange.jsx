import { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './InputRange.module.css';

export const InputRange = ({ maxValue }) => {
  const [value1, setValue1] = useState(Math.round(maxValue / 10).toString());
  const [value2, setValue2] = useState(Math.round(maxValue / 2).toString());
  const [isDragging1, setIsDragging1] = useState(false);
  const [isDragging2, setIsDragging2] = useState(false);
  const [inputError1, setInputError1] = useState(false);
  const [inputError2, setInputError2] = useState(false);
  const [closeDistancePoints, setCloseDistancePoints] = useState(false);
  const sliderRef = useRef(null);

  const handleMouseDown = (e, setIsDragging) => {
    e.preventDefault();
    setIsDragging(true);
  }

  const handleMouseMove = useCallback((e) => {
    if (!isDragging1 && !isDragging2) return;

    const sliderRect = sliderRef.current.getBoundingClientRect();
    let newPosition = (e.clientX - sliderRect.left) / sliderRect.width * maxValue;

    // Проверка для предотвращения выхода за границы слайдера
    newPosition = Math.max(0, Math.min(newPosition, maxValue));

    if (isDragging1 && newPosition <= parseInt(value2, 10)) {
      setValue1(Math.round(newPosition).toString());
    } else if (isDragging2 && newPosition >= parseInt(value1, 10)) {
      setValue2(Math.round(newPosition).toString());
    }
  }, [isDragging1, isDragging2, maxValue, value1, value2]);

  const handleMouseUp = () => {
    setIsDragging1(false);
    setIsDragging2(false);
  }

  const handleInputChange = (e, setValue) => {
    const inputValue = e.target.value;
    const intValue = parseInt(inputValue, 10);

    if (setValue === setValue1 && intValue > maxValue) {
      setValue1(maxValue.toString());
    } else if (setValue === setValue2 && intValue > maxValue) {
      setValue2(maxValue.toString());
    } else {
      setValue(inputValue);
    }
  }

  useEffect(() => {
    setInputError1(value1 === '' || parseInt(value1, 10) > parseInt(value2, 10));
    setInputError2(value2 === '' || parseInt(value2, 10) < parseInt(value1, 10));
    setCloseDistancePoints(value1 === value2);
  }, [value1, value2]);

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      handleMouseMove(e);
    }

    const handleGlobalMouseUp = () => {
      handleMouseUp();
    }

    if (isDragging1 || isDragging2) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging1, isDragging2, handleMouseMove]);

  return (
    <>
      <div className={styles.slider} ref={sliderRef}>
        <div
          className={styles.slider__thumb1}
          style={{
            left: `calc(${(parseInt(value1, 10) / maxValue) * 100}% - 10px)`,
            zIndex: closeDistancePoints ? 7 : 5
          }}
          onMouseDown={(e) => handleMouseDown(e, setIsDragging1)}
        >
          <span className={styles.value}>${value1 === '' ? '' : Math.round(parseInt(value1, 10))}</span>
        </div>
        <div 
          className={styles.line} 
          style={{ 
            left: `calc(${(parseInt(value1, 10) / maxValue) * 100}% - 10px)`, 
            width: `calc(${((parseInt(value2, 10) - parseInt(value1, 10)) / maxValue) * 100}%)`, 
          }} 
        />
        <div
          className={styles.slider__thumb2}
          style={{ left: `calc(${(parseInt(value2, 10) / maxValue) * 100}% - 10px)` }}
          onMouseDown={(e) => handleMouseDown(e, setIsDragging2)}
        >
          <span className={styles.value}>${value2 === '' ? '' : Math.round(parseInt(value2, 10))}</span>
        </div>
      </div>
      <div className={styles.priceInputs}>
        <input
          type="number"
          value={value1}
          onChange={(e) => handleInputChange(e, setValue1)}
          className={styles.priceInput}
          style={{background: inputError1 ? '#f4adad' : '#fff'}}
        />
        <input
          type="number"
          value={value2}
          onChange={(e) => handleInputChange(e, setValue2)}
          className={styles.priceInput}
          style={{ background: inputError2 ? '#f4adad' : '#fff'}}
        />
      </div>
    </>
  );
}

InputRange.propTypes = {
  maxValue: PropTypes.number
}