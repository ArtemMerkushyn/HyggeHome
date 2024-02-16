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
  'blue',
  'green',
  'grey',
  'red',
  'black',
  'purple',
  'yellow',
  'pink',
];

export default function Filters({
  colorsView,
  dataFilter,
  onUpdateFilteredData,
}) {
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

  const [skipToken, setSkipToken] = useState(true);
  const [minV, setMinV] = useState(null);
  const [maxV, setMaxV] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const prevDataRef = useRef([]);
  const sortValue = useSelector(state => state.filter.sortValue);

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

      if (sortValue === 'Expensive') {
        const sortedData = [...filteredData].sort((a, b) => b.price - a.price);
        onUpdateFilteredData(sortedData);
      } else if (sortValue === 'Cheapest') {
        const sortedData = [...filteredData].sort((a, b) => a.price - b.price);
        onUpdateFilteredData(sortedData);
      }
    }
  }, [filteredData, onUpdateFilteredData, sortValue]);

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
      if (sortValue === 'Expensive') {
        const sortedData = [...filteredDataSearch].sort((a, b) => b.price - a.price);
        onUpdateFilteredData(sortedData);
      } else if (sortValue === 'Cheapest') {
        const sortedData = [...filteredDataSearch].sort((a, b) => a.price - b.price);
        onUpdateFilteredData(sortedData);
      }
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
