import styles from './Rating.module.css';
import PropTypes from 'prop-types';
import Icons from '../Icons/Icons.jsx';

const stars = [1, 2, 3, 4, 5];

export const Rating = ({ rating }) => {
  return (
    <div className={styles.stars}>
      {stars.map((star, index) => {
        return (
          <div
            key={index}
            className={
              index + 1 <= rating ? styles.starActive : styles.starNoActive
            }
          >
            <Icons icon="star" />
          </div>
        );
      })}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number,
};
