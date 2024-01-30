import React from 'react';
import css from './ModalForm.module.css'

export const ModalForm = ({toggleModal}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        toggleModal()
        //Future code for sending data to backend
    }

    return (
        <div className={css.modal_container}>
            <button type='button' onClick={toggleModal}>close</button>
            <form action="/submit" method="post" onSubmit={handleSubmit} className={css.modal_form}>
                <h2 className={css.modal_register_text}>Register Individual Account!</h2>

                <label htmlFor="first-name">Your first name*</label>
                <input type="text" id="first-name" name="first-name" className={css.modal_input} required />

                <label htmlFor="last-name">Your last name*</label>
                <input type="text" id="last-name" name="last-name" className={css.modal_input} required />

                <label htmlFor="email">Your Email*</label>
                <input type="email" id="email" name="email" className={css.modal_input} required />

                <label htmlFor="password">Create password*</label>
                <input type="password" id="password" name="password" className={css.modal_input} required />

                <label htmlFor="confirm-password">Confirm the password*</label>
                <input type="password" id="confirm-password" name="confirm-password" className={css.modal_input} required />

                <div className={css.modal_checkbox}>
                    <input type="checkbox" id="agreement" name="agreement" required ></input>
                    <label htmlFor="agreement" >I accept the Purchase Rules, User Agreemens and Privacy Policy conditions</label>
                </div>
                <div className={css.modal_checkbox}>
                    <input type="checkbox" id="agreement" name="agreement" required ></input>
                    <label htmlFor="agreement" >I agree to receive emails about the new offers from HyggeHome</label>
                </div>

                <input type="submit" value="Create account" className={css.modal_create_button}/>
            </form>
        </div>
    );
}
