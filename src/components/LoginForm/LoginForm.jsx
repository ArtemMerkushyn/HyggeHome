import React, { useState } from 'react';
import css from './LoginForm.module.css';
import MyInput from '../UI/MyInput';
import Icons from '../Icons/Icons';
import Button from '../UI/Button/Button';
import { useFormik } from 'formik';
import { loginFormSchema } from '../../schemas/loginFormSchema';
import CustomGoogleLoginButton from '../GoogleLogin/CustomGoogleLoginButton';
import CustomFacebookLoginButton from '../FacebookLogin/CustomFacebookLoginButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../../redux/slices/userSlice';
import { useLoginUserMutation } from '../../redux/services';

const LoginForm = ({ closeModal, handleRegisterClick }) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async values => {
    console.log(values);
    closeModal();
    dispatch(setLoggedIn({ userData: values, token: 'bebra' }));
    navigate('/my-account/my-wishlist');
    const response = await loginUser({
      email: values.email,
      password: values.password,
    });
    if (response.error) {
      console.error('Login failed:', response.error);
    } else {
      console.log('Login successful:', response.data);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: loginFormSchema,
      onSubmit,
    });

  return (
    <>
      <div className={css.container}>
        <form onSubmit={handleSubmit} className={css.login_form}>
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
              name="password"
              placeholder="Password"
              labelFor="Password*"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              errorField={errors.password}
              touched={touched.password}
            />
            <button
              className={css.hide_password_button}
              type="button"
              onClick={() => setPasswordVisibility(!passwordVisibility)}
            >
              {passwordVisibility ? (
                <Icons icon={'eye'} />
              ) : (
                <Icons icon={'closed_eye'} />
              )}
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
              <button
                className={css.remind_password}
                onClick={() => {
                  alert('ФУНКЦІОНАЛ НЕ ЗАВЕЗЛИ!!!!');
                }}
              >
                Remind password
              </button>
            </div>
          </div>
          <div className={css.buttonDiv}>
            <Button
              text="Log in"
              type={'submit'}
              style={{ width: '250px', marginTop: '23px' }}
            />
            <Button
              type="button"
              text="Sign in"
              buttonType="outlined"
              funcClick={handleRegisterClick}
              style={{ textDecoration: 'underline' }}
            />
            <button
              className={css.mobile_signIn_button}
              type="button"
              onClick={handleRegisterClick}
            >
              Sign in
            </button>
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
