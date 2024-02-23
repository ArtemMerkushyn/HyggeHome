import { useState } from 'react';
import Button from '../MainPageContent/Button/Button';
import { Rating } from '../Rating/Rating';
import { Amount } from '../Amount/Amount';
import styles from './ProductTop.module.css';
import { SliderNoArrow } from './SliderNoArrow/SliderNoArrow';
import { toast } from 'react-toastify';

export const ProductTop = ({ data }) => {
  const [amount, setAmount] = useState(1);

  const handleAmountChange = newAmount => {
    setAmount(newAmount);
  }

  const handleAddToCart = () => {
    const productToCart = {
      data,
      amount,
    }
    console.log(productToCart);
    toast.success(`You have added ${amount} products to the cart`);
  }

  return (
    <div className={styles.product}>
      <SliderNoArrow data={data} />
      <div className={styles.info}>
        <div className={styles.info__item}>
          <h3>{data.name}</h3>
          <div className={styles.rating}>
            <Rating rating={4} />
            <span>({'4'} reviews)</span>
          </div>
          <p className={styles.text}>{data.description}</p>
        </div>
        <div className={styles.info__item}>
          <div className={styles.price}>${data.price}</div>
          <Amount onAmountChange={handleAmountChange} />
          <div className={styles.toCatr}>
            <Button funcClick={handleAddToCart} text={'Add to cart'} />
          </div>
        </div>
      </div>
    </div>
  );
}