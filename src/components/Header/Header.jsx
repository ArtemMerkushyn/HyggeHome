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
  };
  const [modal, setModal] = useState(false)
  const [register, setRegister] = useState(false)
  const location = useLocation();

  const handleRegisterClick = () => {
    setRegister(!register)
  }

    const toggleModal = () => {
        setModal(!modal);
        if (!modal) {
            document.body.style.overflow = 'hidden';
            setRegister(false)
        } else {
            document.body.style.overflow = 'auto';
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
          <NavLink className={styles.link} to={'/cart'} style={{ borderBottom: location.pathname === '/curt' ? '2px solid #FCB654' : '2px solid transparent'}}>
            <Icons icon={'basket'} />
          </NavLink>
          <NavLink className={styles.link} to={'/'}>
            <User toggleModal={toggleModal} />
          </NavLink>
        </div>
      </div>
       {modal && (<Modal funcClick={toggleModal}>
                {register
                    ?
                    <RegistrationForm toggleModal={toggleModal}/>
                    :
                    <LoginForm closeModal={toggleModal} handleRegisterClick={handleRegisterClick} />}</Modal>)}
    </header>
  );
};
