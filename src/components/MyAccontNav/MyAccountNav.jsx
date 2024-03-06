import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import css from './MyAccontNav.module.css';

const MyAccountNav = () => {
    const location = useLocation();
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
                </div>
            </aside>
    );
};

export default MyAccountNav;
