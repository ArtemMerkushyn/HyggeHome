import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { ProductTop } from '../../components/ProductTop/ProductTop';
import Icons from '../../components/Icons/Icons';
import styles from './Product.module.css';
import { Carousel } from '../../components/MainPageContent/secondMainContent/NewCollection';
import { useEffect, useState } from 'react';
import { useGetCandlesQuery } from '../../redux/services';

export const Product = () => {
  const location = useLocation();
  const product = location.state.candle;
  const [catalog, setCatalog] = useState([]);
  const { data, error, isLoading } = useGetCandlesQuery();

  useEffect(() => {
    if (data) {
      setCatalog(data);
    }
  }, [data]);
  

  return (
    <div>
      <div className={styles.navigation}>
        <Link to={'/'}>Home</Link>
        <Icons icon="next" />
        <span>{product.name}</span>
      </div>
      <ProductTop data={product} />
      <Carousel 
      catalog={catalog} 
      error={error} 
      isLoading={isLoading} 
      upperText='products for you' 
      lowerText='You might also like'
      />
    </div>

    
  );
};
