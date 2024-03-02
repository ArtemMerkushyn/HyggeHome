import React from 'react';
import css from "./Button.module.css";
import PropTypes from 'prop-types';

const Button = ({ text, funcClick, style, type, buttonType }) => {
  return (
    <button className={
      buttonType === 'outlined'
        ? css.outlined_button
        : css.primary_button
    } onClick={funcClick} style={style} type={type}>{text}</button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  funcClick: PropTypes.func,
  style: PropTypes.object,
  type: PropTypes.string,
  buttonType: PropTypes.string,
}

export default Button;
