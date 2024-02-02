import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import Icons from '../Icons/Icons.jsx';
import styles from './Search.module.css';
import { useGetSearchByNameQuery } from '../../redux/services.js';
import { setSearch } from '../../redux/searchSlice.js';
import { useNavigate } from 'react-router-dom';

export const Search = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [active, setActive] = useState(false);
  const { data } = useGetSearchByNameQuery(inputValue);

  const navigate = useNavigate();

  useEffect(() => {
    if (active) {
      document.getElementById('searchInput').focus();
    }
  }, [active]);

  const handleInputOpen = () => {
    setActive(true);
  }

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const searchName = async () => {
    if (inputValue.trim() === '') {
      return toast.error('Поле не может быть пустым.');
    }
    try {
      await dispatch(setSearch(data));
      navigate('/search');
    } catch (error) {
      console.log(error);
    }
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
          onClick={handleInputOpen}
          className={
            active ? `${styles.openBtn} ${styles.open}` : `${styles.openBtn}`
          }
        >
          <Icons icon={'search'} />
        </button>
      )}
      <div
        className={active  ? `${styles.search} ${styles.activeSearch}` : styles.search}
      >
        <input
          id="searchInput"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className={styles.input}
          placeholder="Search"
        />
        <button className={styles.searchBtn} onClick={searchName}>
          <Icons icon={'search'} />
        </button>
      </div>
    </div>
  );
};
