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
import BurgerMenu from './BurgerMenu/BurgerMenu.jsx';
import WIshListModal from '../WishListModal/WIshListModal.jsx';

export const Header = () => {
  const logoStyles = {
    fontFamily: 'DM Mono',
  }

  const[ burgerMenu, SetBurgerMenu ] = useState(false);

  const [modal, setModal] = useState(false);
  const [register, setRegister] = useState(false);
  const [wishListOpen, setWishListOpen] = useState(false);
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
        <div className={styles.wrapper__action}>
          <Search />
          <div className={styles.heartwrapper} onClick={() => setWishListOpen((prev) => !prev)}>
            <Icons icon={"heart"} />
            </div>
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
      {modal && (
        <Modal funcClick={toggleModal}>
            {register ? 
              <RegistrationForm toggleModal={toggleModal}/> 
                : <LoginForm closeModal={toggleModal} handleRegisterClick={handleRegisterClick} />
            }
        </Modal>)
      }
      <BurgerMenu burgerMenu={burgerMenu} SetBurgerMenu={SetBurgerMenu} toggleModal={toggleModal} />
      {wishListOpen && (
        <div className={styles.wishListContainer}>
          <WIshListModal toggleAction={setWishListOpen}/>
        </div>
      )}
    </header>
  );
}