import { useState } from 'react';
import Button from '../MainPageContent/Button/Button';
import { Rating } from '../Rating/Rating';
import { Amount } from './Amount/Amount';
import styles from './ProductTop.module.css';
import { SliderNoArrow } from './SliderNoArrow/SliderNoArrow';

export const ProductTop = () => {
    const [amount, setAmount] = useState(0);

    const handleAmountChange = (newAmount) => {
        setAmount(newAmount);
    }

    return (
        <div className={styles.product}>
            <SliderNoArrow/>
            <div className={styles.info}>
                <div className={styles.info__item}>
                    <h3>{'Product name'}</h3>
                    <div className={styles.rating}>
                        <Rating rating={4}/>
                        <span>({'4'} reviews)</span>
                    </div>
                    <p className={styles.text}>
                        {'Fragrance Oil | Coconut soy candle Hygge’s fragrance oil candles provide a clean long-lasting scent. A true Canadian tradition- Frosty sleigh rides and steaming cider. Warm up with Hygge’s Mulled Cider with a side of a crackling wood wick. Our candle has scent notes of sweet orange, mulled cider, cinnamon and clove.'}
                    </p>
                </div>
                <div className={styles.info__item}>
                    <div className={styles.price}>${'5'}</div>
                    <Amount onAmountChange={handleAmountChange}/>
                    <div className={styles.toCatr}>
                        <Button text={'Add to cart'} />
                    </div>
                </div>
            </div>
        </div>
    );
}
