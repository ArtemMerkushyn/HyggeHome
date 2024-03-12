import React from 'react';
import css from './FeedbackItem.module.css';
import { Rating } from '../Rating/Rating';
import Button from '../UI/Button/Button';

const FeedbackItem = ({ data, index, onDeleteFeedback }) => {
    const handleDelete = () => {
        onDeleteFeedback(index);
    };

    return (
        <div className={css.feedbackContainer}>
            <div className={css.feedbackWrapper}>
                <div className={css.name_and_date_container}>
                    <h3 className={css.userName}>{data.user_name}</h3>
                    <p className={css.date}>{data.date}</p>
                </div>
                <div className={css.rating_and_feedback_container}>
                    <div className={css.rating_wrapper}>
                        <Rating rating={data.rating} />
                    </div>
                    <p className={css.feedback_text}>{data.feedback}</p>
                </div>
            </div>
            <div className={css.line}></div>
            <div className={css.btns__wrapper}>
                <Button text={"Delete feedback"} funcClick={handleDelete} />
                <Button text={"Go to the product page"} />
            </div>
        </div>
    );
};

export default FeedbackItem;
