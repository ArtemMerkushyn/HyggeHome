import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { NewCollection } from '../../components/MainPageContent/secondMainContent/NewCollection';
import CardList from '../../components/CardList/CardList';
import { selectFavorites } from '../../redux/selectors';
import styles from './Wish.module.css';

export const Wish = () => {
  const favoritList = useSelector(selectFavorites);

  return (
    <div className={styles.wish}>
      <div className={styles.nav}>
        <div className={styles.nav__item}>
          <span>Your wish list</span>
        </div>
        <div className={styles.nav__item}>
          <Link to={'/cart'}>Your cart</Link>
        </div>
      </div>

      <div className={styles.line}></div>
      <CardList data={favoritList} />
      <NewCollection
        sliderNeeded={false}
        upperText="products for you"
        lowerText="You might also like"
      />
    </div>
  );
};
