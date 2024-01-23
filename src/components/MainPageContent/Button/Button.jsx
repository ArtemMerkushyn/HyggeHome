import React from 'react';
import css from "./Button.module.css";
import PropTypes from 'prop-types';

const Button = ({ text, funcClick }) => {
  return (
    <button className={css.special_button} onClick={funcClick} ><p className={css.button_text}>{text}</p></button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  funcClick: PropTypes.func,
}

export default Button;
