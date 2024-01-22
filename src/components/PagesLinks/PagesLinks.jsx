import { NavLink } from 'react-router-dom';
import styles from "./PagesLinks.module.css";

export const PagesLinks = () => {
    const active = ({ isActive }) => {
        return {
            borderBottom: isActive ? '2px solid #FCB654' : ''
        }
    }

    return (
        <div className={styles.wrapper}>
            <NavLink 
                className={styles.item}
                to="/" 
                style={active}
                >
                Home
            </NavLink>
            <NavLink
                className={styles.item}
                to="/candles" 
                style={active}
                >
                Candles
            </NavLink>
            <NavLink 
                className={styles.item}
                to="/lighting-decor" 
                style={active}>
                Lighting Decor
            </NavLink>
            <NavLink
                className={styles.item}
                to="/gift-sets" 
                style={active}>
                Gift sets
            </NavLink>
            <NavLink 
                className={styles.item}
                to="/get-warm"
                style={active}>
                Get warm
            </NavLink>
            <NavLink
                className={styles.item}
                to="/table-games" 
                style={active}
                >
                Table games
            </NavLink>
            <NavLink
                className={styles.item} 
                to="/books-journals" 
                style={active}
                >
                Books & Journals
            </NavLink>
        </div>
    );
}
