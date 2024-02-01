import { useState } from 'react';
import Icons from '../Icons/Icons.jsx';
import styles from './Search.module.css';
import PropTypes from 'prop-types';
import { useGetCandlesByNameQuery } from '../../redux/services.js';

export const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [active, setActive] = useState(false);
  const { data } = useGetCandlesByNameQuery(inputValue);

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const searchName = () => {
    if (inputValue.trim() === '') {
      return alert('The field cannot be empty.');
    }

    console.log(data);
    setInputValue('');
  };

  return (
    <div className={styles.wrapper}>
      {active ? (
        <button
          onClick={() => setActive(false)}
          className={styles.closeBtn}
        ></button>
      ) : (
        <button
          onClick={() => setActive(true)}
          className={
            active ? `${styles.openBtn} ${styles.open}` : `${styles.openBtn}`
          }
        >
          <Icons icon={'search'} />
        </button>
      )}
      <div
        className={active ? `${styles.search} ${styles.active}` : styles.search}
        onClick={() => setActive(true)}
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className={active ? `${styles.input} ${styles.active}` : styles.input}
          placeholder="Search"
        />
        <button className={styles.searchBtn} onClick={searchName}>
          <Icons icon={'search'} />
        </button>
      </div>
    </div>
  );
};

Search.propTypes = {
  funcClick: PropTypes.func,
};
