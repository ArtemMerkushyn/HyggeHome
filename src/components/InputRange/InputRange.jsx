import React, { useCallback, useEffect, useRef, useState } from 'react';
import { addPrice } from '../../redux/slices/filterSlice.js';
import PropTypes from 'prop-types';
import styles from './InputRange.module.css';
import { useDispatch } from 'react-redux';

export const InputRange = ({ maxValue, applyPrice }) => {
  const initialMin = Math.round(1).toString();
  const initialMax = Math.round(maxValue / 2).toString();
  const [min, setMin] = useState(initialMin);
  const [max, setMax] = useState(initialMax);
  const [prevMin, setPrevMin] = useState(initialMin);
  const [prevMax, setPrevMax] = useState(initialMax);
  const [isDragging1, setIsDragging1] = useState(false);
  const [isDragging2, setIsDragging2] = useState(false);
  const [input1Value, setInput1Value] = useState(min);
  const [input2Value, setInput2Value] = useState(max);
  const [input1ValueError, setInput1ValueError] = useState(false);
  const [input2ValueError, setInput2ValueError] = useState(false);

  const sliderRef = useRef(null);
  const dispatch = useDispatch();

  const handleMouseMove = useCallback(
    e => {
      //if ((!isDragging1 && !isDragging2) || input1ValueError || input2ValueError) return;
      
      const sliderRect = sliderRef.current.getBoundingClientRect();
      let newPosition =
        ((e.clientX - sliderRect.left) / sliderRect.width) * maxValue;

      newPosition = Math.max(0, Math.min(newPosition, maxValue));

      if (isDragging1 && newPosition <= parseInt(max, 10) - 20) {
        setMin(Math.round(newPosition).toString());
        setInput1Value(Math.round(newPosition).toString());
      } else if (isDragging2 && newPosition >= parseInt(min, 10) + 20) {
        setMax(Math.round(newPosition).toString());
        setInput2Value(Math.round(newPosition).toString());
      }
    },
    [isDragging1, isDragging2, maxValue, min, max]
  );

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
    //if(!applyPrice) dispatch(addPrice({ minPrice: min, maxPrice: max }));
    dispatch(addPrice({ minPrice: min, maxPrice: max }));
  }, [min, max, dispatch, applyPrice]);

  useEffect(() => {
    if (!input1ValueError) {
      setMin(input1Value);
    }
  }, [input1Value, input1ValueError]);
  
  useEffect(() => {
    if (!input2ValueError) {
      setMax(input2Value);
    }
  }, [input2Value, input2ValueError]);

  useEffect(() => {
    setInput1ValueError(input1Value === '' || parseInt(input1Value) > parseInt(input2Value));
    setInput2ValueError(input2Value === '' || parseInt(input2Value) < parseInt(input1Value) || parseInt(input2Value) > maxValue);
  }, [input1Value, input2Value, maxValue]);

  const handleMouseDown = (e, setIsDragging) => {
    e.preventDefault();
    // if (!input1ValueError && !input2ValueError) {
    //   setIsDragging(true);
    // }
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging1(false);
    setIsDragging2(false);
  };

  const handleInputChange = (e, setInputValue) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue)) {
      if(input1Value > input2Value) { 
        
      }
      setInputValue(inputValue);
    }
  }
  

  useEffect(() => {
    if (input1ValueError || input2ValueError) {
      setMin(prevMin);
      //setMax(prevMax);
    } else {
      setPrevMin(min);
      setPrevMax(max);
    }
  }, [input1ValueError, input2ValueError, min, max, prevMin, prevMax]);

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
        </div>
      </div>
      <div className={styles.priceInputs}>
        <input
          className={styles.priceInput}
          style={{ background: input1ValueError ? '#f4adad' : '#fff' }}
          type="text"
          value={input1Value}
          onChange={(e) => handleInputChange(e, setInput1Value)}
        />
        <input
          className={styles.priceInput}
          style={{ background: input2ValueError ? '#f4adad' : '#fff' }}
          type="text"
          value={input2Value}
          onChange={(e) => handleInputChange(e, setInput2Value)}
        />
      </div>
    </>
  );
};

InputRange.propTypes = {
    maxValue: PropTypes.number,
};