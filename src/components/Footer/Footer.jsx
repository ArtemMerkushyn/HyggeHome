import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import styles from "./Footer.module.css";
import Icons from '../Icons/Icons.jsx';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
            <div className={styles.wrapperLogo}>
                <Icons icon={'logo'} />
            <p className={styles.textLogo}><span>H</span><span className={styles.span}>y</span><span>gg</span><span className={styles.span}>e</span></p>
            </div>
            <div className={styles.nav}>
                <NavLink  to='/candles'>Candles</NavLink>
                <NavLink to='/lighting-decor'>Lighting Decor</NavLink>
                <NavLink to='/gift-sets'>Gift sets</NavLink>
                <NavLink to='/get-warm'>Get warm</NavLink>
                <NavLink to='/table-games'>Table games</NavLink>
                <NavLink to='/books-journals'>Books & Journals</NavLink>
            </div>
                <div className={styles.iconsWrapper }>
                <FaFacebook className={styles.icons} />
                <FaXTwitter className={styles.icons} />
                <FaInstagram className={styles.icons} />
            </div>
            </div>
            <div className={styles.wrapperInput }>
                <p className={ styles.text}> Subscribe now</p>
                <input className={styles.input} placeholder="Your email"></input>
                <button className={styles.button }> {'>'} </button>
            </div>
        </footer>
    );
}
