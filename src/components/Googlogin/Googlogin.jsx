import { GoogleLogin } from 'react-google-login'
import React from 'react';
import Icons from '../Icons/Icons';
import css from '../LoginForm/LoginForm.module.css'
import { toast } from 'react-toastify';

const Googlogin = ({modalAction}) => {
    const clientId = "385264558532-ki06cm6018e1lg683chsotp6lc7deqhg.apps.googleusercontent.com"
    const onSuccess = (res) => {
        console.log("Login success! Current user:", res.profileObj.name);
        toast.success(`Hi, ${res.profileObj.name}`);
        modalAction()

    }
    const onFailure = (res) => {
        console.log("Login failed! res:", res)
    }
    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                render={renderProps => (<button className={css.logIn_with_button} type='button' onClick={renderProps.onClick}><Icons icon='google' />Google</button>)}
                
            />

        </div>
    );
};

export default Googlogin;
