import { useSelector } from 'react-redux';
import styles from './Cart.module.css';
import { selectCurtProducts } from '../../../redux/selectors';
import { CurtItem } from '../../../components/CurtItem/CurtItem';
import Button from '../../../components/UI/Button/Button';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const Cart = ({ tabs, setSelectedId, setHandleNext, handleNext }) => {
  const curtItems = useSelector(selectCurtProducts);
  const [edit, setEdit] = useState(false);

  const handleNextStep = () => {
    if (curtItems.length === 0) {
      toast('your cart is empty');
      return;
    }
    setSelectedId(tabs[1].id);
    setHandleNext(!handleNext);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {curtItems.length === 0 ? (
          <div className={styles.notFound}>
            <img
              style={{ borderRadius: '24px' }}
              src="/images/notFound/notFound.jpg"
              alt="not-found"
            />
          </div>
        ) : (
          curtItems.map((product, index) => (
            <CurtItem key={index} productData={product} index={index} />
          ))
        )}
      </div>
      {curtItems.length !== 0 && (
        <span className={styles.button_span}>
          <Button
            text={'Next step'}
            funcClick={handleNextStep}
            style={{ width: '280px', justifySelf: 'flex-end' }}
          />
        </span>
      )}
    </div>
  );
};
