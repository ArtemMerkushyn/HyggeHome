import { useSelector } from 'react-redux';
import MyAccountNav from '../MyAccontNav/MyAccountNav';
import CardList from '../../../../components/CardList/CardList';
import { NewCollection } from '../../../../components/MainPageContent/secondMainContent/NewCollection';
import css from './MyWishlist.module.css'
import { selectFavorites } from '../../../../redux/selectors';

const MyWishlist = () => {
  const favoritList = useSelector(selectFavorites);

    return (
        <>
      <MyAccountNav/>
    <div className={css.wish}>
      <CardList data={favoritList} />
      <NewCollection
        sliderNeeded={false}
        upperText="products for you"
        lowerText="You might also like"
      />
            </div>
            </>
  );
};

export default MyWishlist