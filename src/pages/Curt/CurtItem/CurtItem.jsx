import { useState } from 'react';
import { Amount } from '../../../components/Amount/Amount';
import styles from './CurtItem.module.css';

export const CurtItem = ({ productData }) => {
    const [amount, setAmount] = useState(productData.amount);

    const handleAmountChange = newAmount => {
        setAmount(newAmount);
    }
    //console.log(productData)
    return (
        <div className={styles.product}>
            <div className={styles.img} style={{maxWidth: '191px', width: '100%',}}>
                <img src={productData.image[0]} alt="img" />
            </div>
            <div className={styles.title} style={{maxWidth: '412px', width: '100%',}}>{productData.name}</div>
            <div className={styles.price} style={{maxWidth: '191px', width: '100%',}}>{productData.price}</div>
            <div className={styles.amount} style={{maxWidth: '191px', width: '100%',}}>
                <Amount onAmountChange={handleAmountChange} dataAmount={amount}/>
            </div>
            <div className={styles.allPrice} style={{maxWidth: '191px', width: '100%',}}>${productData.price*amount}</div>
        </div>
    );
}
