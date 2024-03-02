import React, { useState } from 'react';
import css from './LoginForm.module.css'
import MyInput from '../UI/MyInput';
import Icons from '../Icons/Icons';


const LoginForm = () => {

    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    });
    const [passwordVisability, setPasswordVisability] = useState(false)
    const [checkbox, setCheckbox] = useState(false)
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };
    

    return (
        <div className={css.container}>
            <h2 className={css.logIn_text}>Log in</h2>
            <MyInput 
                type="text"
                id="email"
                name="email"
                placeholder="Your email" 
                labelFor="Your email or phone number*"
                value={formValues.email}
                onChange={handleChange}
            />

            <div className={css.hide_password}>  
            <MyInput 
                type={passwordVisability ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                labelFor="Password*"
                value={formValues.password}
                onChange={handleChange}
                />
                <button
                className={css.hide_password_button}
                type='button'
                onClick={() => setPasswordVisability(!passwordVisability)}
                 >
                {passwordVisability ? <Icons icon={'eye'} /> : <Icons icon={'closed_eye'}/> }
                    </button>
                    <div className={css.remember_and_remind}>
                        <div className={css.modal_checkbox_container}>
                <button
                    type="button"
                    className={`${css.modal_checkbox} ${
                    checkbox ? css.checked : ''
                    }`}
                    onClick={() => {
                    setCheckbox(prev => !prev);
                    }}
                >
                    <div className={css.svg_div}>
                    <Icons icon={'check'} />
                    </div>
                </button>
                <label htmlFor="remember" className={css.remember_me}>
                    Remember me
                </label>
                    </div>
                    <button className={css.remind_password}>Remind password</button>
                    </div>
            </div>


        </div>
    );
};

export default LoginForm;