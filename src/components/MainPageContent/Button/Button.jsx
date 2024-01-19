import React from 'react';
import css from "./Button.module.css"

const Button = (props) => {
  return (
    <button className={css.special_button}><p className={css.button_text}>{props.text}</p></button>
  );
};

export default Button;
