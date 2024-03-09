import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import css from './MyAccontNav.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedOut } from '../../../../redux/slices/userSlice';
import { selectUser } from '../../../../redux/selectors';

const MyAccountNav = ({ wishHeight }) => {
    const authorized = localStorage.getItem('token');
    const location = useLocation();
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const [marginTop, setMarginTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const height = wishHeight - 400;

            if (scrollPosition >= height) {
                setMarginTop();
            } else {
                setMarginTop(scrollPosition)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [wishHeight]);

    return (
        <div className={css.wrapper}>
            <aside className={css.navBar} style={{ marginTop: `${marginTop}px` }}>
                <h2 className={css.headedText}>User name</h2>
                <div className={css.linkContainer}>
                    <NavLink to='/my-account/my-orders' className={css.navLink} style={{ color: location.pathname === '/my-account/my-orders' ? '#FCB654' : ''}}>
                        My orders
                    </NavLink>
                    <NavLink to='/my-account/my-cart' className={css.navLink} style={{ color: location.pathname === '/my-account/my-cart' ? '#FCB654' : ''}}>
                        My cart
                    </NavLink>
                    <NavLink to='/my-account/my-wishlist' className={css.navLink} style={{ color: location.pathname === '/my-account/my-wishlist' ? '#FCB654' : ''}}>
                        My wishlist
                    </NavLink>
                    <NavLink to='/my-account/my-feedback' className={css.navLink} style={{ color: location.pathname === '/my-account/my-feedback' ? '#FCB654' : ''}}>
                        My feedback
                    </NavLink>
                    <NavLink to='/my-account/my-delivery-information' className={css.navLink} style={{ color: location.pathname === '/my-account/my-delivery-information' ? '#FCB654' : ''}}>
                        My delivery information
                    </NavLink>
                    <NavLink to='/'>
                        <button className={css.logOut_Button} onClick={() => dispatch(setLoggedOut())}>
                            Log Out
                        </button>
                    </NavLink>
                </div>
            </aside>
       </div>
        
    );
};

export default MyAccountNav;
