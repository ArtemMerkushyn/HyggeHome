import React, { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import css from './MyAccontNav.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedOut } from '../../redux/slices/userSlice';
import { selectUser } from '../../redux/selectors';

const MyAccountNav = () => {
  const authorized = localStorage.getItem('token');
  const storedUser = useSelector(selectUser);

  const userRoutes = [
    {
      route: 'my-orders',
      title: 'My orders',
    },
    {
      route: 'my-cart',
      title: 'My cart',
    },
    {
      route: 'my-wishlist',
      title: 'My wishlist',
    },
    {
      route: 'reviews',
      title: 'My reviews',
    },
    {
      route: 'my-delivery-information',
      title: 'My delivery information',
    },
  ];

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!authorized) {
  //     navigate('/');
  //   }
  // }, [authorized, navigate]);

  return (
    <aside className={css.navBar}>
      {storedUser ? (
        <h2 className={css.headedText}>{storedUser.name}</h2>
      ) : (
        <h2 className={css.headedText}>User</h2>
      )}
      <div className={css.linkContainer}>
        {userRoutes.map(({ route, title }) => (
          <NavLink
            key={route}
            to={`/my-account/${route}`}
            className={css.navLink}
            style={{
              color:
                location.pathname === `/my-account/${route}` ? '#FCB654' : '',
            }}
          >
            {title}
          </NavLink>
        ))}
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
