import { Link, NavLink, useLocation } from 'react-router-dom';
import { PagesLinks } from '../PagesLinks/PagesLinks';
import Icons from '../Icons/Icons.jsx';
import styles from './Header.module.css';
import { Search } from '../Search/Search.jsx';
import User from '../User/User.jsx';
import { useState } from 'react';
import { Modal } from '../MainPageContent/ModalWindow/Modal.jsx';
import { RegistrationForm } from '../MainPageContent/RegistrationForm/RegistrationForm.jsx';
import LoginForm from '../LoginForm/LoginForm.jsx';

export const Header = () => {
  const logoStyles = {
    fontFamily: 'DM Mono',
  }

  const active = ({ isActive }) => {
    return {
        borderBottom: isActive ? '2px solid #FCB654' : ''
    }
  }

  const[ burgerMenu, SetBurgerMenu ] = useState(false);

  const [modal, setModal] = useState(false)
  const [register, setRegister] = useState(false)
  const location = useLocation();
  const authorized = localStorage.getItem('token');


  const handleRegisterClick = () => {
    setRegister(!register)
  }

    const toggleModal = () => {
        setModal(!modal);
        if (!modal) {
          document.body.style.overflow = 'hidden';
          document.body.style.marginRight = '15px';
            setRegister(false)
        } else {
          document.body.style.overflow = 'auto';
          document.body.style.marginRight = '';
        }
    }

  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        <Icons icon={'logo'} style={{ width: '88px', height: '60px' }} />
        <div className="text-2xl" style={logoStyles}>
          <div className="text-my-red">
            <span className={styles.yellow}>H</span>
            <span>y</span>
            <span className={styles.yellow}>gg</span>
            <span>e</span>
          </div>
          <div>
            <span className={styles.yellow}>H</span>
            <span>o</span>
            <span className={styles.yellow}>m</span>
            <span>e</span>
          </div>
        </div>
      </Link>
      <div className={styles.wrapper}>
        <PagesLinks />
        <div className={styles.wrapper}>
          <Search />
          <NavLink className={styles.link} to={'/cart'} style={{ borderBottom: location.pathname === '/cart' ? '2px solid #FCB654' : '2px solid transparent'}}>
            <Icons icon={'basket'} />
          </NavLink>

          {authorized
            ? (<NavLink 
            className={styles.link} 
            to={'/my-account/my-wishlist'} 
            style={{ borderBottom: location.pathname.startsWith('/my-account') ? '2px solid #FCB654' : '2px solid transparent'}}
            >
            <User/>
            </NavLink>)
            :
            <User toggleModal={toggleModal} />
          }
          <button className={styles.burger__btn} onClick={() => SetBurgerMenu(true)}>
            <span className={styles.burger__line}></span>
            <span className={styles.burger__line}></span>
            <span className={styles.burger__line}></span>
          </button>
        </div>
      </div>
       {modal && (<Modal funcClick={toggleModal}>
                {register
                    ?
                    <RegistrationForm toggleModal={toggleModal}/>
                    :
                    <LoginForm closeModal={toggleModal} handleRegisterClick={handleRegisterClick} />}</Modal>)}
      <div 
        className={styles.burger__menu}
        style={{top: burgerMenu ? 0 : '-100vh'}}
      >
        <div className={styles.burger__wrapper}>
          <button className={styles.close} onClick={() => SetBurgerMenu(false)}></button>
          <nav>
            <NavLink 
                className={styles.nav__item}
                to="/" 
                style={active}
                onClick={() => SetBurgerMenu(false)}
                >
                Home
            </NavLink>
            <NavLink
                className={styles.nav__item}
                to="/candles" 
                style={active}
                onClick={() => SetBurgerMenu(false)}
                >
                Candles
            </NavLink>
            <NavLink 
                className={styles.nav__item}
                to="/lighting-decor" 
                style={active}
                onClick={() => SetBurgerMenu(false)}
                >
                Lighting Decor
            </NavLink>
            <NavLink
                className={styles.nav__item}
                to="/gift-sets" 
                style={active}
                onClick={() => SetBurgerMenu(false)}
                >
                Gift Sets
            </NavLink>
            <NavLink 
                className={styles.nav__item}
                to="/get-warm"
                style={active}
                onClick={() => SetBurgerMenu(false)}
                >
                Get Warm
            </NavLink>
            <NavLink
                className={styles.nav__item}
                to="/table-games" 
                style={active}
                onClick={() => SetBurgerMenu(false)}
                >
                Table Games
            </NavLink>
            <NavLink
                className={styles.nav__item} 
                to="/books-&-journals" 
                style={active}
                onClick={() => SetBurgerMenu(false)}
                >
                Books & Journals
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};