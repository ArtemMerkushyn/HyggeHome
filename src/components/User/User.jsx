import React, { useState } from 'react';
import Icons from '../Icons/Icons';
import css from './User.module.css'
import { Modal } from '../MainPageContent/ModalWindow/Modal';
import LoginForm from '../LoginForm/LoginForm';

const User = () => {
    const [modal, setModal] = useState(true)

    const toggleModal = () => {
        setModal(!modal);
        if (!modal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }
    return (
        <div className={css.container}>
            <button className={css.user_icon_button} onClick={toggleModal}>
                <Icons icon={'user'}/>
            </button>
            {modal && (<Modal funcClick={toggleModal}><LoginForm/></Modal>)}
        </div>
    );
};

export default User;