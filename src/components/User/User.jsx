import React, { useState } from 'react';
import Icons from '../Icons/Icons';
import css from './User.module.css'
import { Modal } from '../MainPageContent/ModalWindow/Modal';
import LoginForm from '../LoginForm/LoginForm';
import { RegistrationForm } from '../MainPageContent/RegistrationForm/RegistrationForm';

const User = () => {
    const [modal, setModal] = useState(false)
    const [register, setRegister] = useState(false)

    const handleRegisterClick = () => {
        setRegister(!register)
    }

    const toggleModal = () => {
        setModal(!modal);
        if (!modal) {
            document.body.style.overflow = 'hidden';
            setRegister(false)
        } else {
            document.body.style.overflow = 'auto';
        }
    }
    return (
        <div className={css.container}>
            <button className={css.user_icon_button} onClick={toggleModal}>
                <Icons icon={'user'}/>
            </button>
            {modal && (<Modal funcClick={toggleModal}>
                {register
                    ?
                    <RegistrationForm toggleModal={toggleModal}/>
                    :
                    <LoginForm closeModal={toggleModal} handleRegisterClick={handleRegisterClick} />}</Modal>)}
        </div>
    );
};

export default User;