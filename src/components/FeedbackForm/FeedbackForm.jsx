import React, { useState } from 'react';
import css from './FeedbackForm.module.css';
import Icons from '../Icons/Icons';
import Button from '../UI/Button/Button';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { usePostFeedbackMutation } from '../../redux/services';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/selectors';

const FeedbackForm = ({ toggle }) => {
  const { product_article } = useParams();
  const [selectedStars, setSelectedStars] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [postFeedback] = usePostFeedbackMutation();
  const storedUser = useSelector(selectUser);

  const handleStarClick = starIndex => {
    setSelectedStars(starIndex + 1);
  };

  const handleStarHover = starIndex => {
    setHoveredStar(starIndex + 1);
  };

  const handleStarLeave = () => {
    setHoveredStar(0);
  };
  const handleChange = e => {
    setFeedback(e.target.value);
  };

  const handleFeedback = () => {
    postFeedback({
      article: product_article,
      fullName: storedUser.name,
      message: feedback,
      stars: selectedStars,
    }).then(res => {
      console.log(res);
      if (res.data.status === 200) {
        toast('Thanks for your feedback');
        toggle();
      } else if (res.data.status === 401) {
        toast.error(`${res.error.data.error}`);
      } else if (res.data.status === 204) {
        toast.error(`You've already left a review`);
      } else {
        toast.error('Review has not been posted. Try again later');
      }
    });
  };

  return (
    <div className={css.feedback_wrapper}>
      <h1 className={css.leave_feedback_text}>Leave your feedback</h1>
      <div className={css.stars_div}>
        {Array.from({ length: 5 }, (_, index) => (
          <button
            key={index}
            className={
              index < selectedStars || index < hoveredStar
                ? `${css.star_button} ${css.selected}`
                : css.star_button
            }
            onClick={() => handleStarClick(index)}
            onMouseEnter={() => handleStarHover(index)}
            onMouseLeave={handleStarLeave}
          >
            <Icons icon="star" />
          </button>
        ))}
      </div>
      <textarea
        type="text"
        value={feedback}
        onChange={handleChange}
        className={css.feedback_textarea}
      />
      <Button
        type={'button'}
        funcClick={handleFeedback}
        text="Send feedback"
        style={{ width: '250px' }}
      />
    </div>
  );
};

export default FeedbackForm;
