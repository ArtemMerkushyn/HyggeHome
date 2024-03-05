import { useSelector } from 'react-redux';
import styles from './Cart.module.css';
import { selectCurtProducts } from '../../../redux/selectors';
import { NewCollection } from '../../../components/MainPageContent/secondMainContent/NewCollection';
import { CurtItem } from '../../../components/CurtItem/CurtItem';
import Button from '../../../components/UI/Button/Button';
import { useState } from 'react';

export const Cart = () => {
  const curtItems = useSelector(selectCurtProducts);
  const [edit, setEdit] = useState(false);
  console.log(curtItems)

  const handleEditCart = () => setEdit(true)

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
      <div className={styles.edit_btn}>
        <Button text={'Edit cart'} funcClick={handleEditCart}/>
      </div>
      <NewCollection
        sliderNeeded={false}
        upperText="products for you"
        lowerText="You might also like"
      />
    </div>
  );
}
