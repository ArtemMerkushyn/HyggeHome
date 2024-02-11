import { Link } from 'react-router-dom';
import { ProductTop } from '../../components/ProductTop/ProductTop';
import Icons from '../../components/Icons/Icons';
import styles from './Product.module.css';

export const Product = () => {
  return (
    <div>
      <div className={styles.navigation}>
        <Link to={'/'}>Home</Link>
        <Icons icon='next'/>
        <span>Product name</span>
      </div>
      <ProductTop />
    </div>
  );
};
