import React, { useEffect } from 'react';
import MyAccountNav from '../../components/MyAccontNav/MyAccountNav';
import { useNavigate } from 'react-router-dom';

const MyAccount = () => {

    const navigate = useNavigate()
    useEffect(() => {
        navigate('/my-account/my-wishlist')
    })

    return (
        <div>
            <MyAccountNav/>
        </div>
    );
};

export default MyAccount;