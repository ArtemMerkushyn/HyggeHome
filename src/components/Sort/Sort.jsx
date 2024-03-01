import { useState, useEffect, useRef } from 'react';

import styles from './Sort.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addSortValue } from '../../redux/slices/filterSlice';

export default function Sort() {
  const sortValue = useSelector(state => state.filter.sortValue);
  const [isOpen, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  const toggleDropdown = event => {
    event.stopPropagation();
    setOpen(!isOpen);
  };

  useEffect(() => {
    
    const sortValueMap = {
      popular: 'Popular',
      reviews: 'Reviews',
      price: sortValue.dir === 'desc' ? 'Expensive' : 'Cheapest',
    };

    setValue(sortValueMap[sortValue.field]);
  }, [sortValue]);

  const handleOptionClick = option => {
    setValue(option);

    const sortOptions = {
      Popular: { field: 'popular', dir: 'desc' },
      Reviews: { field: 'reviews', dir: 'desc' },
      Expensive: { field: 'price', dir: 'desc' },
      Cheapest: { field: 'price', dir: 'asc' },
    };

    dispatch(addSortValue(sortOptions[option]));
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button onClick={toggleDropdown} className={styles.dropdown}>
        {value}
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
          >
            <path
              d="M0.777778 8.5L0 7.7L7 0.5L14 7.7L13.2222 8.5L7 2.1L0.777778 8.5Z"
              fill="#252525"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
          >
            <path
              d="M13.2222 0.5L14 1.3L7 8.5L9.53674e-07 1.3L0.777779 0.5L7 6.9L13.2222 0.5Z"
              fill="#252525"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <ul ref={dropdownRef} className={styles.dporList}>
          {['Popular', 'Reviews', 'Expensive', 'Cheapest'].map(
            option =>
              value !== option && (
                <li
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className={styles.dropItem}
                >
                  {option}
                </li>
              ),
          )}
        </ul>
      )}
    </div>
  );
}
