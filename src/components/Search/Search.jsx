import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import Icons from '../Icons/Icons.jsx';
import styles from './Search.module.css';
import { useGetSearchByNameQuery } from '../../redux/services.js';
import { setError, setIsLoading, setSearch } from '../../redux/searchSlice.js';
import { useNavigate } from 'react-router-dom';

export const Search = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [active, setActive] = useState(false);
  const { data, error, isLoading } = useGetSearchByNameQuery(inputValue);

  const navigate = useNavigate();

  useEffect(() => {
    if (active) {
      document.getElementById('searchInput').focus();
    }
  }, [active]);

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const searchName = () => {
    if (inputValue.trim() === '') {
      return toast.error('The field cannot be empty.');
    }
    if (data) {
      dispatch(setSearch(data));
    }

    if (error) {
      dispatch(setError(error));
    }

    dispatch(setIsLoading(isLoading));

    navigate('search');
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
          id="searchInput"
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
