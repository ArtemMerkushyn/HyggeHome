import { useState } from 'react';
import { Amount } from '../Amount/Amount';
import styles from './CurtItem.module.css';
import { removeFromCart } from '../../redux/slices/curtSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export const CurtItem = ({ productData, index }) => {
  const { dataProduct, amount } = productData;
  const [amountCart, setAmountCart] = useState(amount || 1);

  const dispatch = useDispatch();

  const handleAmountChange = newAmount => {
    setAmountCart(newAmount);
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
      <div className={styles.product_info}>
        <div className={styles.li_product}>
          {index === 0 && <p className={styles.product_info_text}>Product</p>}
          <div className={styles.title}>{dataProduct.name}</div>
        </div>
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
            />
          </div>
        </div>
        <div className={styles.li}>
          {index === 0 && <p className={styles.product_info_text}>Total</p>}
          <div className={styles.allPrice}>
            ${dataProduct.price * amountCart}
          </div>
        </div>
      </div>
      <button className={styles.minus} onClick={handleRemoveProduct}></button>
    </div>
  );
};
