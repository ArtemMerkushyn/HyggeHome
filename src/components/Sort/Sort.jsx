import { useState, useEffect, useRef } from 'react';

import styles from './Sort.module.css';

export default function Sort({ data, onUpdateFilteredData }) {
  const [isOpen, setOpen] = useState(false);
  const [value, setValue] = useState('Popular');
  const dropdownRef = useRef(null);

  const toggleDropdown = event => {
    event.stopPropagation();
    setOpen(!isOpen);
  };

  const handleOptionClick = option => {
    setValue(option);
    setOpen(false);

    if (option === 'Expensive') {
      const sortedData = [...data].sort((a, b) => b.price - a.price);
      onUpdateFilteredData(sortedData);
    } else if (option === 'Cheapest') {
      const sortedData = [...data].sort((a, b) => a.price - b.price);
      onUpdateFilteredData(sortedData);
    }
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
