import React, { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import css from './MyAccontNav.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedOut } from '../../redux/slices/userSlice';
import { selectUser } from '../../redux/selectors';
import { useLogoutMutation } from '../../redux/services';

const MyAccountNav = () => {
  const authorized = localStorage.getItem('token');
  const storedUser = useSelector(selectUser);
  const [logout, { isLoading, isSuccess, isError }] = useLogoutMutation();

  const userRoutes = [
    {
      route: 'my-orders',
      title: 'My orders',
    },
    {
      route: '/cart',
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

  const adminRoutes = [
    {
      route: 'add-product',
      title: 'Add product',
    },
    {
      route: 'all-orders',
      title: 'List of all orders',
    },
    {
      route: 'all-reviews',
      title: 'List of all reviews and questions',
    },
    {
      route: 'delete-card',
      title: 'Deleting/deactivating a card',
    },
    {
      route: 'stats',
      title: 'Statistics of sales, orders',
    },
  ];

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authorized) {
      navigate('/');
    }
  }, [authorized, navigate]);

  const isAdmin = storedUser?.isAdmin;

  const routesToRender = isAdmin ? adminRoutes : userRoutes;

  const getBaseRoute = route =>
    isAdmin
      ? `/${route}`
      : route === '/cart'
      ? `${route}`
      : `/my-account/${route}`;

  const logOutHandler = async () => {
    try {
      await logout().then(() => {
        dispatch(setLoggedOut());
        navigate('/');
      });
    } catch (error) {
      console.error('Logout failed:', isError);
    }
  };

  return (
    <aside className={css.navBar}>
      {storedUser ? (
        <h2 className={css.headedText}>{storedUser.name}</h2>
      ) : (
        <h2 className={css.headedText}>User</h2>
      )}
      <div className={css.linkContainer}>
        {routesToRender.map(({ route, title }) => (
          <NavLink
            key={route}
            to={getBaseRoute(route)}
            className={css.navLink}
            style={{
              color: location.pathname === getBaseRoute(route) ? '#FCB654' : '',
            }}
          >
            {title}
          </NavLink>
        ))}
        <NavLink to="/">
          <button className={css.logOut_Button} onClick={logOutHandler}>
            Log Out
          </button>
        </NavLink>
      </div>
    </aside>
  );
};

export default MyAccountNav;
