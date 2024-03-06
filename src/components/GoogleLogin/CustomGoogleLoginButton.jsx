import React, { useEffect, useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import css from '../LoginForm/LoginForm.module.css';
import Icons from '../Icons/Icons';
import { toast } from 'react-toastify';
import useGoogleProfile from '../../utils/helpers/useGoogleProfile';

const CustomGoogleLoginButton = ({ modalAction }) => {
    const [user, setUser] = useState(null);
    const profile = useGoogleProfile(user);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(() => {
        if (profile) {
            modalAction();
            toast.success(`Привіт, ${profile.name}`);
        }
    }, [profile, modalAction]);

    return (
        <button className={css.logIn_with_button} type='button' onClick={login}>
            <Icons icon='google' />Google
        </button>
    );
};

export default CustomGoogleLoginButton;
