import { useCallback, useEffect, useRef, useState } from 'react';
import { addPrice } from '../../redux/slices/filterSlice.js';
import PropTypes from 'prop-types';
import styles from './InputRange.module.css';
import { useDispatch } from 'react-redux';

export const InputRange = ({ maxValue }) => {
  const [min, setMin] = useState(Math.round(1).toString());
  const [max, setMax] = useState(Math.round(maxValue / 2).toString());
  const [isDragging1, setIsDragging1] = useState(false);
  const [isDragging2, setIsDragging2] = useState(false);
  const [inputError1, setInputError1] = useState(false);
  const [inputError2, setInputError2] = useState(false);
  const sliderRef = useRef(null);
  const dispatch = useDispatch();

  const handleMouseDown = (e, setIsDragging) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseMove = useCallback(
    e => {
      if (!isDragging1 && !isDragging2) return;

      const sliderRect = sliderRef.current.getBoundingClientRect();
      let newPosition =
        ((e.clientX - sliderRect.left) / sliderRect.width) * maxValue;

      // Проверка для предотвращения выхода за границы слайдера
      newPosition = Math.max(0, Math.min(newPosition, maxValue));

      if (isDragging1 && newPosition <= parseInt(max, 10) - 50) {
        setMin(Math.round(newPosition).toString());
      } else if (isDragging2 && newPosition >= parseInt(min, 10) + 50) {
        setMax(Math.round(newPosition).toString());
      }
    },
    [isDragging1, isDragging2, maxValue, min, max]
  );

  const handleMouseUp = () => {
    setIsDragging1(false);
    setIsDragging2(false);
  };

  const handleInputChange = (e, setValue) => {
    const inputValue = e.target.value;
    const intValue = parseInt(inputValue, 10);
  
    if (setValue === setMin && (intValue >= parseInt(max, 10) || intValue <= 1)) {
      setValue((parseInt(max, 10) - 50).toString());
    } else if (setValue === setMin && intValue < 1) {
      setValue('1');
    } else if (setValue === setMax && intValue > maxValue) {
      setValue(maxValue.toString());
    } else if (setValue === setMax && intValue < parseInt(min, 10) + 50) {
      setValue((parseInt(min, 10) + 50).toString());
    } else {
      setValue(inputValue);
    }
  };

  useEffect(() => {
    setInputError1(min === '' || parseInt(min, 10) > parseInt(max, 10));
    setInputError2(max === '' || parseInt(max, 10) < parseInt(min, 10));
  }, [min, max]);

  useEffect(() => {
    const handleGlobalMouseMove = e => {
      handleMouseMove(e);
    };

    const handleGlobalMouseUp = () => {
      handleMouseUp();
    };

    if (isDragging1 || isDragging2) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging1, isDragging2, handleMouseMove]);

  useEffect(() => {
    // Отправляем обновленные значения цен в хранилище
    dispatch(addPrice({ minPrice: min, maxPrice: max }));
  }, [min, max, dispatch]);

  return (
    <>
      <div className={styles.slider} ref={sliderRef}>
        <div
          className={styles.slider__thumb1}
          style={{
            left: `calc(${(parseInt(min, 10) / maxValue) * 100}% - 10px)`,
          }}
          onMouseDown={e => handleMouseDown(e, setIsDragging1)}
        >
          <span className={styles.value}>
            ${min === '' ? '' : Math.round(parseInt(min, 10))}
          </span>
        </div>
        <div
          className={styles.line}
          style={{
            left: `calc(${(parseInt(min, 10) / maxValue) * 100}% - 10px)`,
            width: `calc(${
              ((parseInt(max, 10) - parseInt(min, 10)) / maxValue) * 100
            }%)`,
          }}
        />
        <div
          className={styles.slider__thumb2}
          style={{
            left: `calc(${(parseInt(max, 10) / maxValue) * 100}% - 10px)`,
          }}
          onMouseDown={e => handleMouseDown(e, setIsDragging2)}
        >
          <span className={styles.value}>
            ${max === '' ? '' : Math.round(parseInt(max, 10))}
          </span>
        </div>
      </div>
      <div className={styles.priceInputs}>
        <input
          type="number"
          value={min}
          onChange={e => handleInputChange(e, setMin)}
          className={styles.priceInput}
          style={{ background: inputError1 ? '#f4adad' : '#fff' }}
        />
        <input
          type="number"
          value={max}
          onChange={e => handleInputChange(e, setMax)}
          className={styles.priceInput}
          style={{ background: inputError2 ? '#f4adad' : '#fff' }}
        />
      </div>
    </>
  );
};

InputRange.propTypes = {
  maxValue: PropTypes.number,
};

