import styles from './NewCollectionItem.module.css';
import imageNotFound from '../../image/broken-images.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurtProducts, selectFavorites } from '../../redux/selectors';
import { addFavorite, removeFavorite } from '../../redux/slices/favoriteSlice';
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import { addToCurt } from '../../redux/slices/curtSlice';

export default function NewCollectionItem({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const pathName = location.pathname;

  const itemFavorites = useSelector(selectFavorites);
  const curtItems = useSelector(selectCurtProducts);

  const isChecked = itemFavorites.some(({ _id }) => _id === item._id);
  const isInCurt = curtItems.some(curt => curt.dataProduct._id === item._id);

  const handleToggleFavorite = () => {
    if (isChecked) {
      dispatch(removeFavorite(item));
      toast.info(`${item.name} remove from favorite`, {
        theme: 'colored',
      });
    } else {
      dispatch(addFavorite(item));
      toast.success(`${item.name} add to favorite`, {
        theme: 'colored',
      });
    }
  };

  const handleAddToCart = () => {
    if (isInCurt === true) {
      toast('You have already added the product to the cart');
      return;
    }

    const productToCart = {
      dataProduct: item,
    };
    dispatch(addToCurt(productToCart));
    toast.success(`You have added product to the cart`);
  };

  const handleToProductPage = item => {
    navigate(
      `/${item.category.toLowerCase().replaceAll(' ', '-')}/product/${
        item._id
      }`,
      { state: { item } },
    );
  };

  return (
    <div>
      <li className={styles.cardItem}>
        <div className={styles.itemWrapper}>
          <img
            className={styles.cardImage}
            src={item.image ? item.image[0] : imageNotFound}
            alt="Product"
                  />
                  <div className={styles.line}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="374"
            height="3"
            viewBox="0 0 374 3"
            fill="none"
            
          >
            <path d="M1 1L373 2" stroke="#FCB654" strokeLinecap="round" />
                      </svg>
                      </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p className={styles.titleItem}>{item.name}</p>
            <div className={styles.iconsWrapper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                className={styles.icons}
                style={{ fill: isInCurt ? '#fcb654' : '' }}
              >
                <path
                  d="M5 4H6.5L9 16M9 16H17M9 16C7.89543 16 7 16.8954 7 18C7 19.1046 7.89543 20 9 20C10.1046 20 11 19.1046 11 18C11 16.8954 10.1046 16 9 16ZM17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16ZM8.5 13H17.75L19 7H7.3125"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <button
                className={styles.favButton}
                type="button"
                onClick={handleToggleFavorite}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className={styles.icons}
                  style={{ fill: isChecked ? '#fcb654' : '' }}
                >
                  <path
                    d="M22.1 9.1C22 5.7 19.3 3 15.9 3C14.8 3 13.1 3.8 12.4 5.1C12.3 5.4 11.9 5.4 11.8 5.1C11 3.9 9.4 3.1 8.2 3.1C4.9 3.1 2.1 5.8 2 9.1V9.3C2 11 2.7 12.6 3.9 13.8C3.9 13.8 3.9 13.8 3.9 13.9C4 14 8.8 18.2 11 20.1C11.6 20.6 12.5 20.6 13.1 20.1C15.3 18.2 20 14 20.2 13.9C20.2 13.9 20.2 13.9 20.2 13.8C21.4 12.7 22.1 11.1 22.1 9.3V9.1Z"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
          <p className={styles.priceItem}>${item.price}</p>
        </div>

        <img
          className={styles.cardPicture}
          src={item.picture ? item.picture : imageNotFound}
          alt="Product"
          onClick={() => handleToProductPage(item)}
        />
      </li>
      {pathName === '/wish' && (
        <button
          type="button"
          onClick={handleAddToCart}
          className={styles.button}
        >
          Add to cart
        </button>
      )}
    </div>
  );
}
