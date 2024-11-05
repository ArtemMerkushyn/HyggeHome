import React, { useEffect, useRef, useState } from 'react';
import css from './DropDown.module.css';

const DropDown = props => {
  const { labelFor, data, setF, ...inputProps } = props;
  const [active, setActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState();
  const dropdownRef = useRef(null);

  const handleOptionClick = option => {
    setF(option);
    setSelectedOption(option);
    setActive(false);
  };

  const toggleDropdown = e => {
    e.stopPropagation();
    setActive(prevActive => !prevActive);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('scroll', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('scroll', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={css.input_container}>
        <label className={css.modal_input_label}>{labelFor}</label>
        <input
          className={css.modal_input}
          {...inputProps}
          onClick={toggleDropdown}
          readOnly
        />
        {active && (
          <ul className={css.optionList} ref={dropdownRef}>
            {data.map((item, index) => (
              <li
                key={index}
                className={`${css.optionItem} ${
                  selectedOption === item ? css.optionItemSelected : ''
                }`}
                onClick={() => handleOptionClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default DropDown;
