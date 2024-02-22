import { useState } from 'react';
import AboutProduct from '../AboutProduct/AboutProduct';
import Reviews from '../Reviews/Reviews';
import Questions from '../Questions/Questions';
import styles from './TabSwitcher.module.css';

const tabComponents = {
  'About the product': AboutProduct,
  Reviews,
  Questions,
};

const tabIds = ['About the product', 'Reviews', 'Questions'];

export default function TabSwitcher({ data }) {
  const [selectedId, setSelectedId] = useState(tabIds[0]);
  const SelectedComponent = tabComponents[selectedId];

  return (
    <>
      <div className={styles.wrapper}>
        {tabIds.map(tabId => (
          <button
            className={`${styles.title} ${
              selectedId === tabId ? styles.selected : ''
            }`}
            key={tabId}
            onClick={() => setSelectedId(tabId)}
          >
            {tabId}
          </button>
        ))}
      </div>
      <div className={styles.hr}></div>
      <div className={styles.wrapperContent}>
        {/* Передаем данные только в выбранный компонент */}
        {selectedId === 'About the product' && <SelectedComponent key={selectedId} data={data} />}
        {selectedId !== 'About the product' && <SelectedComponent key={selectedId} />}
      </div>
    </>
  );
}
