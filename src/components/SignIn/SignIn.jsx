import { useFormik } from 'formik';
import React, { useState } from 'react';
import MyInput from '../UI/MyInput';
import Button from '../UI/Button/Button';
import { formSchema } from '../../schemas/formSchema';
import { useRegisterUserMutation } from '../../redux/services';
import { toast } from 'react-toastify';
import css from './SignIn.module.css';
import Icons from '../Icons/Icons';
import GoogleRegister from '../GoogleRegister/GoogleRegister';
import CustomFacebookLoginButton from '../FacebookLogin/CustomFacebookLoginButton';
import { useSelector } from 'react-redux';
import { selectCurtProducts, selectFavorites } from '../../redux/selectors';

export const SignIn = ({ toggleModal, handleLoginClick }) => {
  const [registerUser] = useRegisterUserMutation();
  const [firstCheckbox, setFirstCheckbox] = useState(false);
  const [secondCheckbox, setSecondCheckbox] = useState(false);
  const [passwordVisability, setPasswordVisability] = useState(false);
  const [confirmPasswordVisability, setConfirmPasswordVisability] =
    useState(false);
  const favoriteItems = useSelector(selectFavorites);
  const cartItems = useSelector(selectCurtProducts);

  const onSubmit = async values => {
    const cart = cartItems.map(cart => cart.dataProduct);
    try {
      registerUser({
        email: values.email,
        password: values.password,
        fullName: values.fullName,
        promo: secondCheckbox,
        regType: 'email',
        wishList: favoriteItems,
        inCart: cart,
      }).then(res => {
        if (res.error) {
          toast.console.error(res.error.data.error);
        } else {
          toggleModal();
          toast.success('User registered successfully');
        }
      });
    } catch (error) {
      toast.error('Failed to register user. Please try again later.');
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      validationSchema: formSchema,
      onSubmit,
    });

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
        <h2 className={css.modal_register_text}>Sign in</h2>

        <MyInput
          type="text"
          id="name"
          placeholder="Your full name"
          name="fullName"
          labelFor="Your full name*"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          errorField={errors.fullName}
          touched={touched.fullName}
        />

        <MyInput
          type="text"
          id="email"
          name="email"
          placeholder="Your email"
          labelFor="Your Email*"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          errorField={errors.email}
          touched={touched.email}
        />

        <div className={css.hide_password}>
          <MyInput
            type={passwordVisability ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Password"
            labelFor="Create password*"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            errorField={errors.password}
            touched={touched.password}
          />
          <button
            className={css.hide_password_button}
            type="button"
            onClick={() => setPasswordVisability(!passwordVisability)}
          >
            {passwordVisability ? (
              <Icons icon={'eye'} />
            ) : (
              <Icons icon={'closed_eye'} />
            )}
          </button>
        </div>

        <div className={css.hide_password}>
          <MyInput
            type={confirmPasswordVisability ? 'text' : 'password'}
            id="confirm-password"
            name="confirmPassword"
            placeholder="Password"
            labelFor="Confirm the password*"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            errorField={errors.confirmPassword}
            touched={touched.confirmPassword}
          />
          <button
            className={css.hide_password_button}
            type="button"
            onClick={() =>
              setConfirmPasswordVisability(!confirmPasswordVisability)
            }
          >
            {confirmPasswordVisability ? (
              <Icons icon={'eye'} />
            ) : (
              <Icons icon={'closed_eye'} />
            )}
          </button>
        </div>

        <Button
          text="Sign in"
          style={{ width: '250px', marginTop: '23px' }}
          type="submit"
          buttonType="outlined"
        />
        <Button
          text="Log in"
          type="button"
          style={{ width: '250px', marginTop: '23px' }}
          funcClick={handleLoginClick}
        />
      </form>
      <div className={css.logIn_with_container}>
        <h2 className={css.logIn_with}>Sign in with</h2>
        <GoogleRegister modalAction={toggleModal} />
        <CustomFacebookLoginButton modalAction={toggleModal} />
      </div>
    </>
  );
};
