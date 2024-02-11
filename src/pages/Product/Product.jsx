import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { ProductTop } from '../../components/ProductTop/ProductTop';
import Icons from '../../components/Icons/Icons';
import styles from './Product.module.css';

export const Product = () => {
  const location = useLocation();
  const data = location.state.candle;

  return (
    <div>
      <div className={styles.navigation}>
        <Link to={'/'}>Home</Link>
        <Icons icon="next" />
        <span>{data.name}</span>
      </div>
      <ProductTop data={data} />
    </div>
  );
};
