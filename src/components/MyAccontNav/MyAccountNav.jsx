import React, { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import css from './MyAccontNav.module.css';
import { useDispatch } from 'react-redux';
import { setLoggedOut } from '../../redux/slices/userSlice';

const MyAccountNav = () => {
  const authorized = localStorage.getItem('token');
  const storedUser = JSON.parse(localStorage.getItem('user'));

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authorized) {
      navigate('/');
    }
  }, [authorized, navigate]);

  return (
    <aside className={css.navBar}>
      {storedUser ? (
        <h2 className={css.headedText}>{storedUser.name}</h2>
      ) : (
        <h2 className={css.headedText}>User</h2>
      )}
      <div className={css.linkContainer}>
        <NavLink
          to="/my-account/my-orders"
          className={css.navLink}
          style={{
            color:
              location.pathname === '/my-account/my-orders' ? '#FCB654' : '',
          }}
        >
          My orders
        </NavLink>
        <NavLink
          to="/cart"
          className={css.navLink}
          style={{
            color: location.pathname === '/my-account/my-cart' ? '#FCB654' : '',
          }}
        >
          My cart
        </NavLink>
        <NavLink
          to="/my-account/my-wishlist"
          className={css.navLink}
          style={{
            color:
              location.pathname === '/my-account/my-wishlist' ? '#FCB654' : '',
          }}
        >
          My wishlist
        </NavLink>
        <NavLink
          to="/my-account/my-feedback"
          className={css.navLink}
          style={{
            color:
              location.pathname === '/my-account/my-feedback' ? '#FCB654' : '',
          }}
        >
          My reviews
        </NavLink>
        <NavLink
          to="/my-account/my-delivery-information"
          className={css.navLink}
          style={{
            color:
              location.pathname === '/my-account/my-delivery-information'
                ? '#FCB654'
                : '',
          }}
        >
          My delivery information
        </NavLink>
        <NavLink to="/">
          <button
            className={css.logOut_Button}
            onClick={() => dispatch(setLoggedOut())}
          >
            Log Out
          </button>
        </NavLink>
      </div>
    </aside>
  );
};

export default MyAccountNav;
