import React, { useState, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import css from '../LoginForm/LoginForm.module.css'
import Icons from '../Icons/Icons';
import axios from 'axios';
import { toast } from 'react-toastify';

const CustomGoogleLoginButton = () => {

    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                        toast.success(`Привіт, ${res.data.name}`)
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );
    return (
        <button className={css.logIn_with_button} type='button' onClick={login}><Icons icon='google' />Google</button>
    );
};

export default CustomGoogleLoginButton;