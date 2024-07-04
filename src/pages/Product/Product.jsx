import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { ProductTop } from '../../components/ProductTop/ProductTop';
import Icons from '../../components/Icons/Icons';
import styles from './Product.module.css';
import TabSwitcher from '../../components/TabSwitcher/TabSwitcher';
import { NewCollection } from '../../components/MainPageContent/secondMainContent/NewCollection';
import AboutProduct from '../../components/ProductNavigation/AboutProduct/AboutProduct';
import Reviews from '../../components/ProductNavigation/Reviews/Reviews';
import Questions from '../../components/ProductNavigation/Questions/Questions';
import { useGetProductQuery } from '../../redux/services';

export const Product = () => {
  // const location = useLocation();
  // const product = location.state.item;

  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const productArticle = pathParts[pathParts.length - 1];
  const { data: product, error, isLoading } = useGetProductQuery(productArticle);

  const tabs = [
    { id: 'about', title: 'About the product', component: AboutProduct },
    { id: 'reviews', title: 'Reviews', component: Reviews },
    { id: 'questions', title: 'Questions', component: Questions },
  ];

  useEffect(() => {
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
    }

    scrollToTop();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!!!</div>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.navigation}>
        <Link to={'/'}>Home</Link>
        <Icons icon="next" />
        <Link to={`/${product.category.toLowerCase().replaceAll(' ', '-')}`}>
          {product.category}
        </Link>
        <Icons icon="next" />
        <span>{product.name}</span>
      </div>

      <ProductTop data={product} />

      <div style={{ marginTop: '120px' }}>
        <NewCollection
          sliderNeeded={false}
          upperText="products for you"
          lowerText="You might also like"
        />
      </div>

      <TabSwitcher tabs={tabs} data={product} />
    </div>
  );
};
