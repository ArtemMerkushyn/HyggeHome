import styles from './CandlesItem.module.css'

export default function CandlesItem({ candle }) {
    
     const backgroundImageStyle = {
        background: `url(${candle.image})`,
        backgroundSize: 'cover',        
    };

        return (
            <li className={styles.cardItem} style={backgroundImageStyle}>  
            <div className={styles.overlay}></div>        
            </li>
    );
}