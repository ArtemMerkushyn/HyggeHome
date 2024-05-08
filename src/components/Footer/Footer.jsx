import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import styles from './Footer.module.css';
import Icons from '../Icons/Icons.jsx';
import SubscribeForm from '../SubscribeForm/SubscribeForm.jsx';

export default function Footer() {
  const active = ({ isActive }) => {
    return {
      borderBottom: isActive ? '2px solid #FCB654' : '',
    };
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <NavLink to="/">
          <div className={styles.container}>
            <div className={styles.wrapperLogo}>
              <Icons icon={'logo'} />

              <div className={styles.text_container}>
                <p className={styles.textLogo}>
                  <span>H</span>
                  <span className={styles.span}>y</span>
                  <span>gg</span>
                  <span className={styles.span}>e</span>
                </p>
                <p className={styles.textLogo_2}>
                  <span>H</span>
                  <span className={styles.span}>o</span>
                  <span>m</span>
                  <span className={styles.span}>e</span>
                </p>
              </div>
            </div>
            <div className={styles.iconsWrapper_tablet}>
              <a
                href="https://www.facebook.com"
                aria-label="Read more about Hygge Home"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <FaFacebook className={styles.icons_tablet} />
              </a>
              <a
                href="https://twitter.com/"
                aria-label="Read more about Hygge Home"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <FaXTwitter className={styles.icons_tablet} />
              </a>
              <a
                href="https://www.instagram.com/"
                aria-label="Read more about Hygge Home"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <FaInstagram className={styles.icons_tablet} />
              </a>
            </div>
          </div>
        </NavLink>
        <div className={styles.nav}>
          <div className={styles.nav_wrapper_1}>
            <NavLink style={active} to="/candles">
              Candles
            </NavLink>
            <NavLink style={active} to="/lighting-decor">
              Lighting Decor
            </NavLink>
            <NavLink style={active} to="/gift-sets">
              Gift Sets
            </NavLink>
          </div>
          <div className={styles.nav_wrapper_2}>
            <NavLink style={active} to="/get-warm">
              Get Warm
            </NavLink>
            <NavLink style={active} to="/table-games">
              Table Games
            </NavLink>
            <NavLink style={active} to="/books-&-journals">
              Books & Journals
            </NavLink>
          </div>
        </div>

        <div className={styles.iconsWrapper}>
          <a
            href="https://www.facebook.com"
            aria-label="Read more about Hygge Home"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <FaFacebook className={styles.icons} />
          </a>
          <a
            href="https://twitter.com/"
            aria-label="Read more about Hygge Home"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <FaXTwitter className={styles.icons} />
          </a>
          <a
            href="https://www.instagram.com/"
            aria-label="Read more about Hygge Home"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <FaInstagram className={styles.icons} />
          </a>
        </div>
      </div>
      <div className={styles.wrapperInput}>
        <p className={styles.text}> Subscribe now</p>
        <SubscribeForm />
      </div>
    </footer>
  );
}
