import React, { useState } from 'react';
import css from './FeedbackForm.module.css';
import Icons from '../Icons/Icons';
import Button from '../UI/Button/Button';
import { toast } from 'react-toastify';

const FeedbackForm = ({ toggle }) => {
    const [selectedStars, setSelectedStars] = useState(0);
    const [hoveredStar, setHoveredStar] = useState(0);
    const [feedback, setFeedback] = useState("")

    const handleStarClick = (starIndex) => {
        setSelectedStars(starIndex + 1);
    };

    const handleStarHover = (starIndex) => {
        setHoveredStar(starIndex + 1);
    };

    const handleStarLeave = () => {
        setHoveredStar(0);
    };
    const handleChange = (e) => {
        setFeedback(e.target.value)
        console.log(feedback)
    }
    const handleFeedback = () => {
        toast('Thanks for your feedback')
        toggle()
    }

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
                        <Icons icon='star' />
                    </button>
                ))}
            </div>
            <textarea
                type='text'
                value={feedback}
                onChange={handleChange}
                className={css.feedback_textarea}
            />
            <Button
                type={'button'}
                funcClick={handleFeedback}
                text='Send feedback'
                style={{width: '250px'}}
            />
        </div>
    );
};

export default FeedbackForm;
