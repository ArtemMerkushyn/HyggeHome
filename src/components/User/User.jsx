import React from 'react';
import Icons from '../Icons/Icons';
import css from './User.module.css'

const User = ({toggleModal}) => {

    return (
        <div className={css.container}>
            <button className={css.user_icon_button} onClick={toggleModal}>
                <Icons icon={'user'}/>
            </button>
        </div>
    );
};

export default User;