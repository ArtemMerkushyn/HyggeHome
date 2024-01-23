import styles from './CandlesItem.module.css'

export default function CandlesItem({ candle }) {

        return (
            <li className={styles.cardItem} >
            <img className={ styles.cardImage } src={candle.image} alt='Candles'></img>
            <img className={ styles.cardPicture } src={candle.picture} alt='Candles'></img>   
            </li>
    );
}