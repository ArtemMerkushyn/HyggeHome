import { useState } from 'react';
import Icons from '../Icons/Icons.jsx';
import styles from './Search.module.css';
import PropTypes from 'prop-types';

export const Search = ({ funcClick }) => {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.wrapper}>
      {active ? (
        <button onClick={() => setActive(false)} className={styles.closeBtn}>
          
      </button>
      ) : (
      <button onClick={() => setActive(true)} className={active ? `${styles.openBtn} ${styles.open}` : `${styles.openBtn}`}><Icons icon={'search'} /></button>
      )}
      <div
        className={active ? `${styles.search} ${styles.active}` : styles.search}
        onClick={() => setActive(true)}
      >
        <input
          className={active ? `${styles.input} ${styles.active}` : styles.input}
          placeholder="Search"
          type="text"
        />
        <button className={styles.searchBtn} onClick={funcClick}>
          <Icons icon={'search'} />
        </button>
      </div>
    </div>
  );
};

Search.propTypes = {
  funcClick: PropTypes.func,
};
