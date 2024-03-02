import React from 'react';
import css from './Modal.module.css';

export const Modal = ({ funcClick, children }) => {
  const handleModalClick = e => {
    e.stopPropagation();
    e.preventDefault();
  };
  return (
    <div className={css.overlay} onClick={funcClick}>
      <div className={css.modal} onClick={handleModalClick}>
        {children}
      </div>
    </div>
  );
};
