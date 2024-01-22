import CandlesItem from '../CandlesItem/CandlesItem'
import styles from './CandlesList.module.css'

import card from './db.json'

export default function CandlesList() {

    return (
        <div className={styles.wrapper }>
        <ul className={ styles.cardList }>
        {card.map((candle, index) => (
                <CandlesItem key={index} candle={candle} />
        ))}            
        </ul>
            <button className={styles.showMore}>Show more</button>
        </div>
    )
}