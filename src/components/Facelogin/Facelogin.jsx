import React from 'react';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { LoginSocialFacebook } from 'reactjs-social-login';
import css from '../LoginForm/LoginForm.module.css'
import Icons from '../Icons/Icons';
import { toast } from 'react-toastify';


const Facelogin = ({modalAction}) => {
    return (
        <LoginSocialFacebook
            appId='1574643319992056'
            onResolve={(res) => {
                toast.success("Hi", res.data.name)
                modalAction()
            }}
            onReject={(error) => {
                console.log(error)
            }}
        >
            <span><button className={css.logIn_with_button} type='button'><Icons icon='facebook' />Facebook</button></span>
        </LoginSocialFacebook>
    );
};

export default Facelogin;