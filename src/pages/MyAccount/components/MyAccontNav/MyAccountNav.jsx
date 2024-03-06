import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import css from './MyAccontNav.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthorized } from '../../../../redux/selectors';
import { setLoggedOut } from '../../../../redux/slices/userSlice';

const MyAccountNav = () => {
    const authorized = useSelector(selectAuthorized);
    const location = useLocation();
    const dispatch = useDispatch();

    return (
        <aside className={css.navBar}>
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
                    <button className={css.logOut_Button} onClick={() => dispatch(setLoggedOut)}>
                        Log Out
                    </button>
                </NavLink>
            </div>
        </aside>
    );
};

export default MyAccountNav;
