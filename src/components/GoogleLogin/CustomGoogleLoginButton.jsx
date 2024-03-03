import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import css from '../LoginForm/LoginForm.module.css';
import Icons from '../Icons/Icons';
import { toast } from 'react-toastify';
import useGoogleProfile from '../../utils/helpers/useGoogleProfile';

const CustomGoogleLoginButton = () => {
    const [user, setUser] = React.useState(null);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    const profile = useGoogleProfile(user);

    React.useEffect(() => {
        if (profile) {
            toast.success(`Привіт, ${profile.name}`);
        }
    }, [profile]);

    return (
        <button className={css.logIn_with_button} type='button' onClick={login}><Icons icon='google' />Google</button>
    );
};

export default CustomGoogleLoginButton;
