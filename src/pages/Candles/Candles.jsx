import CandlesList from '../../components/CandlesList/CandlesList';
import styles from './Candles.module.css'

export const Candles = () => {
    return (
        <div className={ styles.wrapperFilters }>
            <div className={ styles.wrapper }>
            <span>Home </span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 8 15" fill="none">
  <path d="M0 1.27778L0.8 0.5L8 7.5L0.8 14.5L0 13.7222L6.4 7.5L0 1.27778Z" fill="#CACCCE"/>
                </svg><span className={ styles.wrapperSpan }> Candles</span>
            </div>
            <h2 className={styles.title}>Choose the <span className={styles.spanTitle}>perfect candles</span> for atmosphere</h2>
            <div className={styles.wrapperButtons }>
                <button className={styles.button }>Open filters</button>
                <div className={styles.dropdownList}>Sort by<button className={ styles.dropdown }>Popular <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
  <path d="M13.2222 0.5L14 1.3L7 8.5L9.53674e-07 1.3L0.777779 0.5L7 6.9L13.2222 0.5Z" fill="#252525"/>
</svg></button></div>
            </div>
            <CandlesList />            
            </div>
    );
}
