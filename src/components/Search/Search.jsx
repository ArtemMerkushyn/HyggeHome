import { useState } from 'react';
import Icons from '../Icons/Icons.jsx';
import styles from './Search.module.css';
import PropTypes from 'prop-types';

export const Search = ({ funcClick }) => {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button onClick={() => setActive(false)} className={styles.closeBtn}>
        X
      </button>
      <div
        className={active ? `${styles.search} ${styles.active}` : styles.search}
        onClick={() => setActive(true)}
      >
        <input
          className={active ? `${styles.input} ${styles.active}` : styles.input}
          placeholder="Search"
          type="text"
        />
        {active ? (
          <button className={styles.btn} onClick={funcClick}>
            <Icons icon={'search'} />
          </button>
        ) : (
          <Icons icon={'search'} />
        )}
      </div>
    </div>
  );
};

Search.propTypes = {
  funcClick: PropTypes.func,
};
