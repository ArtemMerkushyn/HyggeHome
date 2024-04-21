import { useEffect, useState } from 'react';
import { Rating } from '../Rating/Rating';
import { Amount } from '../Amount/Amount';
import styles from './ProductTop.module.css';
import { SliderNoArrow } from './SliderNoArrow/SliderNoArrow';
import { toast } from 'react-toastify';
import { addToCurt } from '../../redux/slices/curtSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurtProducts } from '../../redux/selectors';

export const ProductTop = ({ data }) => {
  const [amount, setAmount] = useState(1);
  const [isInCurt, setIsInCurt] = useState(false); 
  const curtItems = useSelector(selectCurtProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    const foundItem = curtItems.find(item => item.dataProduct._id === data._id);
    setIsInCurt(!!foundItem);
  }, [curtItems, data._id]);

  const handleAmountChange = newAmount => {
    setAmount(newAmount);
  }

  const handleAddToCart = () => {
    if(isInCurt === true) {
      toast('You have already added the product to the cart');
      return;
    }

    const productToCart = {
      dataProduct: data,
      amount,
    }
    dispatch(addToCurt(productToCart));
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
          <div className={styles.price_and_amount}>
            <p className={styles.price}>${data.price}</p>
            <Amount onAmountChange={handleAmountChange} />
            </div>
          <button className={styles.btn} disabled={isInCurt} onClick={handleAddToCart}>{isInCurt ? 'Added to cart' : 'Add to cart'}</button>
        </div>
      </div>
    </div>
  );
}


