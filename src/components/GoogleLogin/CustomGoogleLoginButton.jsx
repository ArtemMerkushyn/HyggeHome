// import React, { useEffect, useState } from 'react';
// import { useGoogleLogin } from '@react-oauth/google';
// import css from '../LoginForm/LoginForm.module.css';
// import Icons from '../Icons/Icons';
// import { toast } from 'react-toastify';
// import useGoogleProfile from '../../utils/helpers/useGoogleProfile';
// import { useDispatch } from 'react-redux';
// import { setLoggedIn } from '../../redux/slices/userSlice';
// import { useNavigate } from 'react-router-dom';

// const CustomGoogleLoginButton = ({ modalAction }) => {
//     const [user, setUser] = useState(null);
//     const profile = useGoogleProfile(user);
//     const dispatch = useDispatch();
//     const navigate = useNavigate()

//     const login = useGoogleLogin({
//         onSuccess: (codeResponse) => {
//             setUser(codeResponse)
//             dispatch(setLoggedIn({userData: profile, token: 'bebra'}))
//             navigate('/my-account')

//         },
//         onError: (error) => console.log('Login Failed:', error)
//     });

//     useEffect(() => {
//         if (profile) {
//             modalAction();
//             toast.success(`Привіт, ${profile.name}`);
//             dispatch(setLoggedIn({ userData: profile, token: 'bebra' }))
//             localStorage.setItem('user', JSON.stringify(profile));
//         }
//     }, [profile, modalAction, dispatch]);

//     return (
//         <button className={css.logIn_with_button} type='button' onClick={login}>
//             <Icons icon='google' />Google
//         </button>
//     );
// };

// export default CustomGoogleLoginButton;
import React from 'react';

const CustomGoogleLoginButton = () => {
  return <div></div>;
};

export default CustomGoogleLoginButton;
