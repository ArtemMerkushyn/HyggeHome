import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import css from '../LoginForm/LoginForm.module.css';
import Icons from '../Icons/Icons';
import { toast } from 'react-toastify';
import useGoogleProfile from '../../utils/helpers/useGoogleProfile';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../../redux/slices/userSlice';
import { useRegisterUserMutation } from '../../redux/services';

const GoogleRegister = () => {
  const [user, setUser] = useState(null);
  const profile = useGoogleProfile(user);
  const [registerUser] = useRegisterUserMutation();
  const dispatch = useDispatch();

  const handleUserRegistration = async profile => {
    const userData = {
      email: profile.email,
      verified_email: profile.verified_email,
      name: profile.name,
      id: profile.id,
      regType: 'google',
    };

    if (profile.verified_email === true) {
      try {
        await registerUser(userData);
      } catch (error) {
        toast.error('Failed to register user. Please try again later.');
      }
    }
  };

  const handleSuccessLogin = async codeResponse => {
    setUser(codeResponse);
    dispatch(setLoggedIn({ userData: profile, token: 'bebra' }));
    await handleUserRegistration(profile);
  };

  const register = useGoogleLogin({
    onSuccess: handleSuccessLogin,
    onError: error => console.log('Login Failed:', error),
  });

  return (
    <button className={css.logIn_with_button} type="button" onClick={register}>
      <Icons icon="google" />
      Google
    </button>
  );
};

export default GoogleRegister;
