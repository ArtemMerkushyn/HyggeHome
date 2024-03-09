import React, { useState } from 'react';
import css from './LoginForm.module.css';
import MyInput from '../UI/MyInput';
import Icons from '../Icons/Icons';
import Button from '../UI/Button/Button';
import { useFormik } from 'formik';
import { formSchema } from '../../schemas/formSchema';
import CustomGoogleLoginButton from '../GoogleLogin/CustomGoogleLoginButton';
import CustomFacebookLoginButton from '../FacebookLogin/CustomFacebookLoginButton';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ closeModal, handleRegisterClick }) => {
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [checkbox, setCheckbox] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (values) => {
            dispatch(setLoggedIn({values, token: 'bebra'}));
            navigate('/my-account');
        closeModal();
  };
    
    const { values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            email: '',
            logIn_password: '',
        },
        validationSchema: formSchema,
        onSubmit: handleRegister
    });

    return (
        <>
            <div className={css.container}>
                <form onSubmit={handleRegister} autoComplete="on">

                    <h2 className={css.logIn_text}>Log in</h2>
                    <MyInput
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Your email"
                        labelFor="Your email or phone number*"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errorField={errors.email}
                        touched={touched.email}
                    />
                    <div className={css.hide_password}>
                        <MyInput
                            type={passwordVisibility ? 'text' : 'password'}
                            id="password"
                            name="logIn_password"
                            placeholder="Password"
                            labelFor="Password*"
                            value={values.logIn_password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errorField={errors.logIn_password}
                            touched={touched.logIn_password}
                        />
                        <button
                            className={css.hide_password_button}
                            type="button"
                            onClick={() => setPasswordVisibility(!passwordVisibility)}
                        >
                            {passwordVisibility ? <Icons icon={'eye'} /> : <Icons icon={'closed_eye'} />}
                        </button>
                        <div className={css.remember_and_remind}>
                            <div className={css.modal_checkbox_container}>
                                <button
                                    type="button"
                                    className={`${css.modal_checkbox} ${checkbox ? css.checked : ''}`}
                                    onClick={() => setCheckbox((prev) => !prev)}
                                >
                                    <div className={css.svg_div}>
                                        <Icons icon={'check'} />
                                    </div>
                                </button>
                                <label htmlFor="remember" className={css.remember_me}>
                                    Remember me
                                </label>
                            </div>
                            <button className={css.remind_password} type="button" onClick={() => alert('ФУНКЦІОНАЛ НЕ ЗАВЕЗЛИ!!!!')}>
                                Remind password
                            </button>
                        </div>
                    </div>
                    <div className={css.buttonDiv}>
                        <Button text="Log in" type="submit" style={{ width: '250px', marginTop: '23px' }} />
                        <Button
                            text="Sign in"
                            buttonType="outlined"
                            type="button"
                            funcClick={handleRegisterClick}
                            style={{ textDecoration: 'underline' }}
                        />
                    </div>
                </form>
                <div className={css.div_li}>
                    <div className={css.hr}></div>
                </div>
                <div className={css.logIn_with_container}>
                    <h2 className={css.logIn_with}>Log in with</h2>
                    <CustomGoogleLoginButton modalAction={closeModal} />
                    <CustomFacebookLoginButton modalAction={closeModal} />
                </div>
            </div>
        </>
    );
};

export default LoginForm;
