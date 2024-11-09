import React, { useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import styles from './BurgerMenu.module.css';
import { setLoggedOut } from '../../../redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Search2 } from '../../Search2/Search2';
import { selectUser } from '../../../redux/selectors';
import { useLogoutMutation } from '../../../redux/services';
import { generalRoutes, userRoutes, adminRoutes } from './routes';

export default function BurgerMenu({ burgerMenu, SetBurgerMenu, toggleModal }) {
  const storedUser = useSelector(selectUser);
  const isAdmin = storedUser?.isAdmin;
  const authorized = localStorage.getItem('token');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [logout, { isLoading, isError }] = useLogoutMutation();

  const activeStyle = ({ isActive }) => ({
    borderBottom: isActive ? '2px solid #FCB654' : '',
  });

  const logInHandler = () => {
    toggleModal();
    SetBurgerMenu(false);
  };

  const logOutHandler = async () => {
    try {
      await logout().unwrap();
      dispatch(setLoggedOut());
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', isError);
    }
  };

  const protectedRoutes = [...adminRoutes, ...userRoutes].map(
    route => route.to,
  );

  useEffect(() => {
    const currentPath = location.pathname;

    const isProtectedRoute = protectedRoutes.includes(currentPath);

    if (!authorized && isProtectedRoute) {
      navigate('/');
    }
  }, [authorized, location.pathname, navigate, protectedRoutes]);

  return (
    <div
      className={styles.burger__menu}
      style={{ right: burgerMenu ? '0' : '-360px' }}
    >
      <div className={styles.burger__wrapper}>
        <button
          className={styles.close}
          onClick={() => SetBurgerMenu(false)}
        ></button>
        <div className={styles.username}>
          {authorized ? (
            <span>{storedUser?.name || 'User'}</span>
          ) : (
            <span>Houseguest</span>
          )}
          <div className={styles.auth}>
            {authorized ? (
              <button onClick={logOutHandler} disabled={isLoading}>
                {isLoading ? 'Logging out...' : 'Log out'}
              </button>
            ) : (
              <button onClick={logInHandler}>Log in</button>
            )}
          </div>
        </div>
        <Search2 />
        <nav className={styles.nav__items}>
          <div className={styles.nav__top}>
            {(isAdmin ? adminRoutes : userRoutes).map(item => (
              <NavLink
                key={item.to}
                className={styles.nav__item}
                to={item.to}
                style={activeStyle}
                onClick={() => SetBurgerMenu(false)}
              >
                {item.text}
              </NavLink>
            ))}
          </div>
          {generalRoutes.map(item => (
            <NavLink
              key={item.to}
              className={`${styles.nav__item} ${
                item.text === 'Home' ? 'border' : ''
              }`}
              to={item.to}
              style={activeStyle}
              onClick={() => SetBurgerMenu(false)}
            >
              {item.text}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
