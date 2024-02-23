import { useState } from 'react';
import styles from './TabSwitcher.module.css';
import PropTypes from 'prop-types';



export default function TabSwitcher({ data, tabs }) {
  const [selectedId, setSelectedId] = useState(tabs[0].id);

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
      <div className={styles.wrapperContent}>
      {tabs.map(tab => (
          selectedId === tab.id && (
            <tab.component key={tab.id} data={tab.data || data} />
          )
        ))}
      </div>
    </>
  );
}

TabSwitcher.propTypes = {
  data: PropTypes.object,
  tabs: PropTypes.array,
}