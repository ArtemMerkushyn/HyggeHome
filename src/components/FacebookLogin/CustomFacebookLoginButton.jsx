import React, { useCallback, useState } from 'react';
import { LoginSocialFacebook } from 'reactjs-social-login';
import css from '../LoginForm/LoginForm.module.css'
import Icons from '../Icons/Icons';
import { toast } from 'react-toastify';

const REDIRECT_URI = window.location.href;

const CustomFacebookLoginButton = ({ modalAction }) => {
    
    const [provider, setProvider] = useState('')
  const [profile, setProfile] = useState(null)
  const onLoginStart = useCallback(() => {
    alert('login start')
  }, [])
    
    return (
    <LoginSocialFacebook
            isOnlyGetToken={false}
            appId={process.env.REACT_APP_FB_APP_ID || '1574643319992056'}
            fieldsProfile={
            'id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender'
          }
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider)
                setProfile(data)
                console.log(profile)
            }}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <span><button className={css.logIn_with_button} type='button'><Icons icon='facebook' />Facebook</button></span>
        </LoginSocialFacebook>
    );
};

export default CustomFacebookLoginButton;