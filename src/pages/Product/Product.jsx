import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { ProductTop } from '../../components/ProductTop/ProductTop';
import Icons from '../../components/Icons/Icons';
import styles from './Product.module.css';
import ProductNavigation from '../../components/ProductNavigation/TabSwitcher/TabSwitcher';
import { useEffect, useState } from 'react';
import { useGetCandlesQuery } from '../../redux/services';
import { NewCollection } from '../../components/MainPageContent/secondMainContent/NewCollection';

export const Product = () => {
  const location = useLocation();
  const product = location.state.candle;
  const [catalog, setCatalog] = useState([]);
  const { data, error, isLoading } = useGetCandlesQuery();

  useEffect(() => {
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
    }

    scrollToTop();
  }, []);

  useEffect(() => {
    if (data) {
      setCatalog(data);
    }
  }, [data]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.navigation}>
        <Link to={'/'}>Home</Link>
        <Icons icon="next" />
        <Link to={`/${product.category}`}>{product.category}</Link>
        <Icons icon="next" />
        <span>{product.name}</span>
      </div>
      <ProductTop data={product} />
      <NewCollection
        sliderNeeded={false}
        catalog={catalog}
        error={error}
        i
        sLoading={isLoading}
        upperText="products for you"
        lowerText="You might also like"
      />
      <ProductNavigation />
    </div>
  );
};
