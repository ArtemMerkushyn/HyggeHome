import { Link, NavLink, useLocation } from 'react-router-dom';
import { PagesLinks } from '../PagesLinks/PagesLinks';
import Icons from '../Icons/Icons.jsx';
import styles from './Header.module.css';
import { Search } from '../Search/Search.jsx';
import User from '../User/User.jsx';

export const Header = () => {
  const logoStyles = {
    fontFamily: 'DM Mono',
  };

  const location = useLocation();

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
            <User/>
          </NavLink>
        </div>
      </div>
    </header>
  );
};
