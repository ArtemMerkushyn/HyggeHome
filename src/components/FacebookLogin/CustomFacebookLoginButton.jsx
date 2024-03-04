import React, { useState, useEffect } from 'react';
import { LoginSocialFacebook } from 'reactjs-social-login';
import css from '../LoginForm/LoginForm.module.css';
import Icons from '../Icons/Icons';
import { toast } from 'react-toastify';

const REDIRECT_URI = window.location.href;

const CustomFacebookLoginButton = ({ modalAction }) => {
  const [provider, setProvider] = useState('');
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (profile && profile.name) {
      toast.success(`Вітання, ${profile.name}`);
      modalAction()
    }
  }, [profile, modalAction]);

  return (
    <LoginSocialFacebook
      appId={process.env.REACT_APP_FB_APP_ID || '1574643319992056'}
      fieldsProfile={
        'id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender'
      }
      redirect_uri={REDIRECT_URI}
      onResolve={({ provider, data }) => {
        setProvider(provider);
        setProfile(data);
      }}
      onReject={err => {
        console.log(err);
      }}
    >
      <span>
        <button className={css.logIn_with_button} type='button'>
          <Icons icon='facebook' />
          Facebook
        </button>
      </span>
    </LoginSocialFacebook>
  );
};

export default CustomFacebookLoginButton;
