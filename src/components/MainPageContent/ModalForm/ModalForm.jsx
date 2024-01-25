import React from 'react';
import css from './ModalForm.module.css'

export const ModalForm = ({toggleModal}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        toggleModal()
        //Future code for sending data to backend
    }

    return (
        <div>
            <form action="/submit" method="post" onSubmit={handleSubmit} className={css.modal_form}>
                <label htmlFor="name">Ім'я:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="phone">Телефон:</label>
                <input type="tel" id="phone" name="phone" required />

                <label htmlFor="email">Електронна пошта:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Пароль:</label>
                <input type="password" id="password" name="password" required />

                <div className="checkbox-container">
                    <input type="checkbox" id="agreement" name="agreement" required />
                    <label htmlFor="agreement">Я погоджуюсь з умовами використання</label>
                </div>

                <input type="submit" value="Погодитись і відправити" />
            </form>
        </div>
    );
}
