import { useEffect, useState, useRef } from 'react';
import Button from '../MainPageContent/Button/Button';
import styles from './Filters.module.css';
import { InputRange } from '../InputRange/InputRange.jsx';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addColor } from '../../redux/slices/filterSlice.js';
import { useGetFilterPriceQuery } from '../../redux/services.js';
import { useLocation } from 'react-router-dom';

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
  dataFilter,
  onUpdateFilteredData,
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
  const minPrice = useSelector(state => state.filter.filter.minPrice);
  const maxPrice = useSelector(state => state.filter.filter.maxPrice);
  console.log(minPrice, maxPrice)
  const [skipToken, setSkipToken] = useState(true);
  const [minV, setMinV] = useState(null);
  const [maxV, setMaxV] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const prevDataRef = useRef([]);

  const { data, isLoading } = useGetFilterPriceQuery(
    { min: minV, max: maxV },
    { skip: skipToken },
  );

  const location = useLocation();
  const pathName = location.pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading && data) {
      if (pathName !== '/search') {
        setFilteredData(data);
      } else {
        setFilteredData(dataFilter);
      }
    }
  }, [data, isLoading, pathName, dataFilter]);

  useEffect(() => {
    if (filteredData !== prevDataRef.current) {
      prevDataRef.current = filteredData;
      onUpdateFilteredData(filteredData);
    }
  }, [filteredData, onUpdateFilteredData]);

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

    if (pathName === '/search') {
      const filteredDataSearch = dataFilter.filter(
        item => item.price >= minPrice && item.price <= maxPrice,
      );
      onUpdateFilteredData(filteredDataSearch);
    } else {
      setMinV(minPrice);
      setMaxV(maxPrice);
      setSkipToken(false);
      dispatch(addColor(colors));
    }
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
        <InputRange maxValue={300} />
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
