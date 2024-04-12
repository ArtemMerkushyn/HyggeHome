import { useState } from 'react';
import { Amount } from '../Amount/Amount';
import styles from './CurtItem.module.css';
import { removeFromCart } from '../../redux/slices/curtSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export const CurtItem = ({ productData, edit }) => {
    const { dataProduct, amount } = productData;
    const [amountCart, setAmountCart] = useState(amount || 1);

    const dispatch = useDispatch();

    const handleAmountChange = newAmount => {
        setAmountCart(newAmount);
    }

    const handleRemoveProduct = () => {
        dispatch(removeFromCart(dataProduct));
        toast(`${dataProduct.name} has been removed from the cart`);
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
            {edit ? (<button className={styles.minus} onClick={handleRemoveProduct}></button>) : null}
        </div>
    );
}