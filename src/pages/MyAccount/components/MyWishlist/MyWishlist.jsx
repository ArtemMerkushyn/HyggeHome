import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import MyAccountNav from '../MyAccontNav/MyAccountNav';
import CardList from '../../../../components/CardList/CardList';
import { NewCollection } from '../../../../components/MainPageContent/secondMainContent/NewCollection';
import css from './MyWishlist.module.css'
import { selectFavorites } from '../../../../redux/selectors';

const MyWishlist = () => {
  const favoritList = useSelector(selectFavorites);
  const wishRef = useRef(null);
  const [wishHeight, setWishHeight] = useState(0);

  useEffect(() => {
    const wishElement = wishRef.current;
    
    const resizeObserver = new ResizeObserver(entries => {
      // Loop through each entry (there will typically only be one)
      for (let entry of entries) {
        // Update the height of the wish element
        setWishHeight(entry.contentRect.height);
      }
    });

    // Start observing the wish element
    if (wishElement) {
      resizeObserver.observe(wishElement);
    }

    // Cleanup function
    return () => {
      if (wishElement) {
        resizeObserver.unobserve(wishElement);
      }
    };
  }, []);

  return (
    <div className={css.wrapper}>
      <MyAccountNav wishHeight={wishHeight} />
      <div className={css.wish} ref={wishRef}>
        <CardList data={favoritList} borderNeeded={true} />
      </div>
      <NewCollection
        sliderNeeded={false}
        upperText="products for you"
        lowerText="You might also like"
      />
    </div>
  );
};

export default MyWishlist;
