import { useState, useRef } from 'react';
import { Amount } from '../Amount/Amount';
import styles from './CurtItem.module.css';
import { changeAmount, removeFromCart } from '../../redux/slices/curtSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useQuantityInCartMutation } from '../../redux/services';

export const CurtItem = ({ productData, index }) => {
  const { dataProduct, amount } = productData;
  const [amountCart, setAmountCart] = useState(amount || 1);
  const timeoutIdRef = useRef(null);
  const [changeQuantity] = useQuantityInCartMutation();
  const dispatch = useDispatch();

  const handleAmountChange = newAmount => {
    setAmountCart(newAmount);
    dispatch(changeAmount({ product: dataProduct, amount: newAmount }));

    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    timeoutIdRef.current = setTimeout(() => {
      changeQuantity({ article: dataProduct.article, quantity: newAmount });
    }, 2000);
  };

  const handleRemoveProduct = () => {
    dispatch(removeFromCart(dataProduct));
    toast(`${dataProduct.name} has been removed from the cart`);
  };

  return (
    <div className={styles.product}>
      <div className={styles.img}>
        <img src={dataProduct.image[0]} alt="img" />
      </div>

      <div className={styles.li_product}>
        {index === 0 && <p className={styles.product_info_text}>Product</p>}
        <div className={styles.title}>{dataProduct.name}</div>
      </div>
      <span className={styles.span}>
        <div className={styles.li}>
          {index === 0 && <p className={styles.product_info_text}>Price</p>}
          <div className={styles.price}>{dataProduct.price}</div>
        </div>
        <div className={styles.li}>
          {index === 0 && <p className={styles.product_info_text}>QTY</p>}
          <div className={styles.amount}>
            <Amount
              onAmountChange={handleAmountChange}
              dataAmount={amountCart}
              quantity={dataProduct.quantity}
            />
          </div>
        </div>
        <div className={styles.li}>
          {index === 0 && <p className={styles.product_info_text}>Total</p>}
          <div className={styles.allPrice}>
            ${dataProduct.price * amountCart}
          </div>
        </div>
      </span>
      <button className={styles.minus} onClick={handleRemoveProduct}></button>
    </div>
  );
};
