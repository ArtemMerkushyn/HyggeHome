import React from "react";
import { ModalForm } from "../ModalForm/ModalForm";
import css from './Modal.module.css'

export const Modal = ({funcClick}) => {
    const handleModalClick = (e) => {
        e.stopPropagation();
    };
    return(
        
        <div className={css.overlay} onClick={funcClick}>
            <div className={css.modal} onClick={handleModalClick}>
                <button onClick={funcClick}>close</button>
            <ModalForm toggleModal={funcClick}/>
            </div>
        </div>
    )
}
