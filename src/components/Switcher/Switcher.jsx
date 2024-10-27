import { useState } from 'react';
import styles from './Switcher.module.css';

export default function Switcher({ tabs, selectedId, setSelectedId }) {
  return (
    <>
      <div className={styles.wrapper}>
        {tabs.map(tab => (
          <button
            className={`${styles.title} ${
              selectedId === tab.id ? styles.selected : ''
            }`}
            key={tab.id}
            onClick={() => setSelectedId(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className={styles.hr}></div>
    </>
  );
}
