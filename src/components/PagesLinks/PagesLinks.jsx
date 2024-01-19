import { NavLink } from 'react-router-dom';
import styles from "./PagesLinks.module.css";

export const PagesLinks = () => { 
    return (
        <div className={styles.wrapper}>
            <NavLink className={styles.item} to='/'>Home</NavLink>
            <NavLink className={styles.item} to='/candles'>Candles</NavLink>
            <NavLink className={styles.item} to='/lighting-decor'>Lighting Decor</NavLink>
            <NavLink className={styles.item} to='/gift-sets'>Gift sets</NavLink>
            <NavLink className={styles.item} to='/get-warm'>Get warm</NavLink>
            <NavLink className={styles.item} to='/table-games'>Table games</NavLink>
            <NavLink className={styles.item} to='/books-journals'>Books & Journals</NavLink>
        </div>
    );
}
