import React from 'react';
// import { ModalForm } from "../ModalForm/ModalForm";
import css from './Modal.module.css';

export const Modal = ({ funcClick, children }) => {
  const handleModalClick = e => {
    e.stopPropagation();
  };
  return (
    <div className={css.overlay} onClick={funcClick}>
      <div className={css.modal} onClick={handleModalClick}>
        {children}
      </div>
    </div>
  );
};
