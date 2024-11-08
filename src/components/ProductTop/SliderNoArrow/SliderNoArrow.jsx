import { useState } from 'react';
import styles from './SliderNoArrow.module.css';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavorite,
  removeFavorite,
} from '../../../redux/slices/favoriteSlice';
import { selectFavorites, selectUser } from '../../../redux/selectors';
import Icons from '../../Icons/Icons';
import { Link } from 'react-router-dom';

export const SliderNoArrow = ({ data }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const itemsFavorites = useSelector(selectFavorites);
  const user = useSelector(selectUser);
  const isAdmin = user?.isAdmin;
  console.log(isAdmin);
  const isLiked = itemsFavorites.some(
    ({ article }) => article === data.article,
  );
  const dispatch = useDispatch();

  const handleDotClick = index => {
    setSelectedImageIndex(index);
  };

  const handleToggleFavorite = () => {
    if (isLiked) {
      dispatch(removeFavorite(data));
      toast.info(`${data.name} has been removed from the wishlist`, {
        theme: 'colored',
      });
    } else {
      dispatch(addFavorite(data));
      toast.success(`${data.name} has been added to the wishlist`, {
        theme: 'colored',
      });
    }
  };

  return (
    <div className={styles.slider}>
      <div className={styles.dots}>
        {data.image.map((img, index) => {
          return (
            <div
              key={index}
              className={styles.dot}
              onClick={() => handleDotClick(index)}
            >
              <img src={img} alt={index + 1} />
            </div>
          );
        })}
        {data.image.map((img, index) => {
          return (
            <div
              key={index}
              className={styles.dot}
              onClick={() => handleDotClick(index)}
            >
              <img src={img} alt={index + 1} />
            </div>
          );
        })}
      </div>
      <div className={styles.img}>
        {!isAdmin ? (
          <button className={styles.like} onClick={handleToggleFavorite}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={styles.icon}
              style={{ fill: isLiked ? '#fcb654' : '' }}
            >
              <path
                d="M22.1 9.1C22 5.7 19.3 3 15.9 3C14.8 3 13.1 3.8 12.4 5.1C12.3 5.4 11.9 5.4 11.8 5.1C11 3.9 9.4 3.1 8.2 3.1C4.9 3.1 2.1 5.8 2 9.1V9.3C2 11 2.7 12.6 3.9 13.8C3.9 13.8 3.9 13.8 3.9 13.9C4 14 8.8 18.2 11 20.1C11.6 20.6 12.5 20.6 13.1 20.1C15.3 18.2 20 14 20.2 13.9C20.2 13.9 20.2 13.9 20.2 13.8C21.4 12.7 22.1 11.1 22.1 9.3V9.1Z"
                strokeWidth="2"
              />
            </svg>
          </button>
        ) : (
          <button className={styles.like}>
            <Link to={`/change-product/${data.article}`} state={data}>
              <span className={styles.icon}>
                <Icons icon={'edit'} />
              </span>
            </Link>
          </button>
        )}

        {data.image.map((img, index) => {
          return (
            <img
              key={index}
              src={img}
              alt={index + 1}
              style={{
                opacity: index === selectedImageIndex ? 1 : 0,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
