import { useState } from 'react';
import { Amount } from '../Amount/Amount';
import styles from './CurtItem.module.css';

export const CurtItem = ({ productData }) => {
    const { dataProduct, amount } = productData;
    const [amountCart, setAmountCart] = useState(amount || 1);

    const handleAmountChange = newAmount => {
        setAmountCart(newAmount);
    }

    return (
        <div className={styles.product}>
            <div className={styles.img} style={{maxWidth: '191px', width: '100%',}}>
                <img src={dataProduct.image[0]} alt="img" />
            </div>
            <div className={styles.title} style={{maxWidth: '412px', width: '100%',}}>{dataProduct.name}</div>
            <div className={styles.price} style={{maxWidth: '191px', width: '100%',}}>{dataProduct.price}</div>
            <div className={styles.amount} style={{maxWidth: '191px', width: '100%',}}>
                <Amount onAmountChange={handleAmountChange} dataAmount={amountCart}/>
            </div>
            <div className={styles.allPrice} style={{maxWidth: '191px', width: '100%',}}>${dataProduct.price * amountCart}</div>
        </div>
    );
}

