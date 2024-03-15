import { useSelector } from 'react-redux';
import styles from './Cart.module.css';
import { selectCurtProducts } from '../../../redux/selectors';
import { CurtItem } from '../../../components/CurtItem/CurtItem';
import Button from '../../../components/UI/Button/Button';
import { useState } from 'react';

export const Cart = ({ tabs, setSelectedId }) => {
  const curtItems = useSelector(selectCurtProducts);
  const [edit, setEdit] = useState(false);

  const handleEditCart = () => setEdit(true);

  const handleNextStep = () => {
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
        ) : <div style={{height: '47px'}}></div>}
        <Button text={'Next step'} funcClick={handleNextStep}/>
      </div>
    </div>
  );
}
