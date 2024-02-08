import { useState } from 'react';
import Button from '../MainPageContent/Button/Button';
import styles from './Filters.module.css';
import { InputRange } from '../InputRange/InputRange.jsx';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addColor } from '../../redux/slices/filterSlice.js';

const colors = [
  'blue',
  'green',
  'grey',
  'red',
  'black',
  'purple',
  'yellow',
  'pink',
];

export default function Filters({ colorsView, data, onUpdateFilteredData }) {
  const [openFilter, setOpenFilter] = useState(false);
  const [selectedColors, setSelectedColors] = useState({
    blue: false,
    green: false,
    grey: false,
    red: false,
    black: false,
    purple: false,
    yellow: false,
    pink: false,
  });
  const minPrice = useSelector(state => state.filter.filter.minPrice);
  const maxPrice = useSelector(state => state.filter.filter.maxPrice);

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
    const min = minPrice;
    const max = maxPrice;

    dispatch(addColor(colors));

    if (!data) return [];
    const filteredData = data.filter(
      item => item.price >= min && item.price <= max,
    );

    // Вызываем функцию onUpdateFilteredData для передачи отфильтрованных данных обратно в Candles
    onUpdateFilteredData(filteredData);
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
        <InputRange maxValue={100} />
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
