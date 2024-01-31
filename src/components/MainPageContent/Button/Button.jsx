import React from 'react';
import css from "./Button.module.css";
import PropTypes from 'prop-types';

const Button = ({ text, funcClick, style, type }) => {
  return (
    <button className={css.special_button} onClick={funcClick} style={style} typeof={type}><p className={css.button_text}  >{text}</p></button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  funcClick: PropTypes.func,
  style: PropTypes.object,
  type: PropTypes.string,
}

export default Button;
