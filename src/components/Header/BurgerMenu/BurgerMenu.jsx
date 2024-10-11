import { NavLink, useNavigate } from 'react-router-dom';
import styles from './BurgerMenu.module.css';
import { setLoggedOut } from '../../../redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Search2 } from '../../Search2/Search2';
import { selectUser } from '../../../redux/selectors';
import { useLogoutMutation } from '../../../redux/services'; // Используем мутацию для logout

export default function BurgerMenu({ burgerMenu, SetBurgerMenu, toggleModal }) {
  const storedUser = useSelector(selectUser);
  const authorized = localStorage.getItem('token');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Используем мутацию для выхода
  const [logout, { isLoading, isSuccess, isError }] = useLogoutMutation();

  const active = ({ isActive }) => {
    return {
      borderBottom: isActive ? '2px solid #FCB654' : '',
    };
  };

  const logInHandler = () => {
    toggleModal();
    SetBurgerMenu(false);
  };

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
            <span>{!storedUser ? 'User' : storedUser.name}</span>
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
            {[
              { to: '/cart', text: 'My cart' },
              { to: '/my-account/my-wishlist', text: 'My wish list' },
              authorized
                ? { to: '/my-account/my-orders', text: 'My orders' }
                : null,
              authorized
                ? { to: '/my-account/reviews', text: 'My reviews' }
                : null,
              authorized
                ? {
                    to: '/my-account/my-delivery-information',
                    text: 'My delivery information',
                  }
                : null,
            ].map(
              item =>
                item && (
                  <NavLink
                    key={item.to}
                    className={
                      item.text === 'Home'
                        ? `${styles.nav__item} border`
                        : styles.nav__item
                    }
                    to={item.to}
                    style={active}
                    onClick={() => SetBurgerMenu(false)}
                  >
                    {item.text}
                  </NavLink>
                ),
            )}
          </div>
          {[
            { to: '/', text: 'Home' },
            { to: '/candles', text: 'Candles' },
            { to: '/lighting-decor', text: 'Lighting Decor' },
            { to: '/gift-sets', text: 'Gift Sets' },
            { to: '/get-warm', text: 'Get Warm' },
            { to: '/table-games', text: 'Table Games' },
            { to: '/books-&-journals', text: 'Books & Journals' },
          ].map(
            item =>
              item && (
                <NavLink
                  key={item.to}
                  className={
                    item.text === 'Home'
                      ? `${styles.nav__item} border`
                      : styles.nav__item
                  }
                  to={item.to}
                  style={active}
                  onClick={() => SetBurgerMenu(false)}
                >
                  {item.text}
                </NavLink>
              ),
          )}
        </nav>
      </div>
    </div>
  );
}
