import { useSelector } from 'react-redux';
import styles from './Cart.module.css';
import { selectCurtProducts } from '../../../redux/selectors';
import { CurtItem } from '../../../components/CurtItem/CurtItem';
import Button from '../../../components/UI/Button/Button';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const Cart = ({ tabs, setSelectedId }) => {
  const curtItems = useSelector(selectCurtProducts);
  const [edit, setEdit] = useState(false);

  const handleEditCart = () => setEdit(!edit);

  const handleNextStep = () => {
    if(curtItems.length === 0) {
      toast('your cart is empty');
      return;
    }
    setSelectedId(tabs[1].id);
  }

  return (
    <div style={{ marginBottom: '120px' }}>
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
            <CurtItem key={index} productData={product} edit={edit}/>
          ))
        )}
      </div>
      <div className={styles.btns}>
        {!edit ? (
          <Button text={'Edit cart'} funcClick={handleEditCart}/>
        ) : (<Button text={'Close editing'} funcClick={handleEditCart}/>)}
        <Button text={'Next step'} funcClick={handleNextStep}/>
      </div>
    </div>
  );
}
