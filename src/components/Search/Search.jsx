import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { DebounceInput } from 'react-debounce-input';

import Icons from '../Icons/Icons.jsx';
import styles from './Search.module.css';
import { useSearchByNameQuery } from '../../redux/services.js';
import {
  setError,
  setIsActive,
  setIsLoading,
  setSearch,
  setSearchInputValue,
} from '../../redux/slices/searchSlice.js';
import { selectIsActive } from '../../redux/selectors.js';

export const Search = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState(null);
  const active = useSelector(selectIsActive);
  const { data, error, isLoading } = useSearchByNameQuery(searchValue, {
    skip: !searchValue,
  });

  const location = useLocation();
  const pathName = location.pathname;

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      dispatch(setSearch(data));
    }
    if (error) {
      dispatch(setError(error));
    }
    dispatch(setIsLoading(isLoading));
  }, [data, error, isLoading, dispatch]);

  useEffect(() => {
    if (active) {
      document.getElementById('searchInput').focus();
    }
  }, [active]);

  const handleInputOpen = () => {
    dispatch(setIsActive(true));
  };

  const handleInputClose = () => {
    dispatch(setIsActive(false));
  };

  const handleInputChange = e => {
    const value = e.target.value.trim();
    if (value === '') {
      setInputValue('');
      return toast.error('The field cannot be empty.');
    }

    setInputValue(value);
    
    setSearchValue(value);

    dispatch(setSearchInputValue(value));
    
    if (pathName !== '/search') {
      navigate('search');
      return;
    }
  };
  

  const searchName = () => {
    if (inputValue.trim() === '') {
      return toast.error('The field cannot be empty.');
    }

    setSearchValue(inputValue);
    navigate('search');
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      searchName();
    }
  };

  return (
    <div className={styles.wrapper}>
      {active ? (
        <button onClick={handleInputClose} className={styles.closeBtn}></button>
      ) : (
        <button
          onClick={handleInputOpen}
          className={
            active ? `${styles.openBtn} ${styles.open}` : `${styles.openBtn}`
          }
          style={{
            borderBottom:
              pathName === '/search'
                ? `2px solid #fcb654`
                : '2px solid transparent',
          }}
        >
          <Icons icon={'search'} />
        </button>
      )}
      <div
        className={
          active ? `${styles.search} ${styles.activeSearch}` : styles.search
        }
      >
        <DebounceInput
          id="searchInput"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={styles.input}
          placeholder="Search"
          minLength={1}
          debounceTimeout={2000}
        />
        <button className={styles.searchBtn} onClick={searchName}>
          <Icons icon={'search'} />
        </button>
      </div>
    </div>
  );
};
