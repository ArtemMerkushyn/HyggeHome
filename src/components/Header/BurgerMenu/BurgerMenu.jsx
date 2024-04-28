import { NavLink, useNavigate } from 'react-router-dom';
import styles from './BurgerMenu.module.css';
import { setLoggedOut } from '../../../redux/slices/userSlice';
import { useDispatch } from 'react-redux';
import { Search2 } from '../../Search2/Search2';

export default function BurgerMenu({ burgerMenu, SetBurgerMenu, toggleModal }) {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const authorized = localStorage.getItem('token');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const active = ({ isActive }) => {
        return {
            borderBottom: isActive ? '2px solid #FCB654' : '',
        }
    }

    const logInHandler = () => {
        toggleModal();
        SetBurgerMenu(false);
    }

    const logOutHandler = () => {
        dispatch(setLoggedOut());
        SetBurgerMenu(false);
        navigate('/');
    }

    return (
        <div 
            className={styles.burger__menu}
            style={{right: burgerMenu ? '0' : '-360px'}}
        >
            <div className={styles.burger__wrapper}>
                <button className={styles.close} onClick={() => SetBurgerMenu(false)}></button>
                <div className={styles.username}>
                    {authorized ? <spam>{storedUser.name}</spam> : <span>Houseguest</span>}
                    <div className={styles.auth}>
                        {authorized ? (<button onClick={logOutHandler}>Log out</button>) : (<button onClick={logInHandler}>Log in</button>)}
                    </div>
                </div>
                <Search2/>
                <nav className={styles.nav__items}>
                    {[
                        { to: '/cart', text: 'My cart' },
                        { to: '/wish', text: 'My wish list' },
                        { to: '/', text: 'Home' },
                        { to: '/candles', text: 'Candles' },
                        { to: '/lighting-decor', text: 'Lighting Decor' },
                        { to: '/gift-sets', text: 'Gift Sets' },
                        { to: '/get-warm', text: 'Get Warm' },
                        { to: '/table-games', text: 'Table Games' },
                        { to: '/books-&-journals', text: 'Books & Journals' },
                    ].map((item) => (
                        <NavLink
                            key={item.to}
                            className={styles.nav__item}
                            to={item.to}
                            style={active}
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
