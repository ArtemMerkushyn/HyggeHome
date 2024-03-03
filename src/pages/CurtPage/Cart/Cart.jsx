import { useSelector } from 'react-redux';
import styles from './Cart.module.css';
import { selectCurtProducts } from '../../../redux/selectors';
import { NewCollection } from '../../../components/MainPageContent/secondMainContent/NewCollection';
import { CurtItem } from '../../../components/CurtItem/CurtItem';

export const Cart = () => {
  const curtItems = useSelector(selectCurtProducts);

  return (
    <div style={{ marginBottom: '120px' }}>
      <div className={styles.sections}>
        <div
          className={styles.sections__item}
          style={{ maxWidth: '191px', width: '100%' }}
        ></div>
        <div
          className={styles.sections__item}
          style={{ maxWidth: '412px', width: '100%' }}
        >
          Product
        </div>
        <div
          className={styles.sections__item}
          style={{ maxWidth: '191px', width: '100%' }}
        >
          Price
        </div>
        <div
          className={styles.sections__item}
          style={{ maxWidth: '191px', width: '100%' }}
        >
          QTY
        </div>
        <div
          className={styles.sections__item}
          style={{ maxWidth: '191px', width: '100%' }}
        >
          Total
        </div>
      </div>
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
            <CurtItem key={index} productData={product} />
          ))
        )}
      </div>
      <NewCollection
        sliderNeeded={false}
        upperText="products for you"
        lowerText="You might also like"
      />
    </div>
  );
}
