import { NavLink } from 'react-router-dom';
import styles from './BurgerMenu.module.css';

export default function BurgerMenu({ burgerMenu, SetBurgerMenu }) {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const active = ({ isActive }) => {
        return {
            borderBottom: isActive ? '2px solid #FCB654' : '',
        }
    }

    return (
        <div 
            className={styles.burger__menu}
            style={{right: burgerMenu ? '0' : '-360px'}}
        >
            <div className={styles.burger__wrapper}>
                <button className={styles.close} onClick={() => SetBurgerMenu(false)}></button>
                {storedUser ? <spam className={styles.username}>{storedUser.name}</spam> : <span className={styles.username}>Houseguest</span>}
                <nav>
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
