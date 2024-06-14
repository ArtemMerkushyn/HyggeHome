import { useState } from 'react';
import Button from '../UI/Button/Button.jsx';
import styles from './Filters.module.css';
import { InputRange } from '../InputRange/InputRange.jsx';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addColor } from '../../redux/slices/filterSlice.js';

const colors = [
  'Blue',
  'Green',
  'Grey',
  'Red',
  'White',
  'Purple',
  'Yellow',
  'Pink',
];

export default function Filters({
  colorsView,
  onUpdateFilteredData,
  currentPrice,
  setCurrentPrice,
  defaultPrice,
}) {
  const [openFilter, setOpenFilter] = useState(false);
  const [selectedColors, setSelectedColors] = useState({
    Blue: false,
    Green: false,
    Grey: false,
    Red: false,
    White: false,
    Purple: false,
    Yellow: false,
    Pink: false,
  });

  const dispatch = useDispatch();

  const handleItemChange = color => {
    setSelectedColors(prevColors => ({
      ...prevColors,
      [color]: !prevColors[color],
    }));
  };

  const handleApply = () => {
    const colors = Object.keys(selectedColors).filter(
      color => selectedColors[color],
    );
    onUpdateFilteredData({
      colors,
      minPr: currentPrice[0],
      maxPr: currentPrice[1],
    });
    dispatch(addColor(colors));

    setOpenFilter(false);
  };

  return (
    <div className={styles.wrapper}>
      {openFilter ? (
        <Button text={'Close filters'} funcClick={() => setOpenFilter(false)} />
      ) : (
        <Button text={'Open filters'} funcClick={() => setOpenFilter(true)} />
      )}
      <div
        className={styles.filterWrapper}
        style={{
          opacity: openFilter ? 1 : 0,
          visibility: openFilter ? 'visible' : 'hidden',
          transition: 'opacity 0.2s linear, visibility 0.2s linear',
        }}
      >
        <h5>Price range:</h5>
        <InputRange
          defaultPrice={defaultPrice}
          currentPrice={currentPrice}
          setCurrentPrice={setCurrentPrice}
        />
        {colorsView ? (
          <div className={styles.colorFilters}>
            <h5>Color:</h5>
            <div className={styles.wrapperLabels}>
              <div>
                {colors.slice(0, 4).map(color => (
                  <label key={color}>
                    <span
                      className={
                        selectedColors[color]
                          ? `${styles.check} ${styles.active}`
                          : styles.check
                      }
                    ></span>
                    <input
                      className={styles.checkBox}
                      type="checkbox"
                      onChange={() => handleItemChange(color)}
                      checked={selectedColors[color]}
                    />
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </label>
                ))}
              </div>
              <div>
                {colors.slice(4, 8).map(color => (
                  <label key={color}>
                    <span
                      className={
                        selectedColors[color]
                          ? `${styles.check} ${styles.active}`
                          : styles.check
                      }
                    ></span>
                    <input
                      className={styles.checkBox}
                      type="checkbox"
                      onChange={() => handleItemChange(color)}
                      checked={selectedColors[color]}
                    />
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </label>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
        <Button text={'Apply'} funcClick={handleApply} />
      </div>
    </div>
  );
}

Filters.propTypes = {
  colorsView: PropTypes.bool,
};
