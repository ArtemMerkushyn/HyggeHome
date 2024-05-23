import style from './MyReviews.module.css';
import MyAccountNav from "../../../../components/MyAccontNav/MyAccountNav";
import { useState } from 'react';
import data from './reviews.json';
import FeedbackItem from '../../../../components/FeedbackItem/FeedbackItem';


export const MyReviews = () => {
    const [reviews, setReviews] = useState(data);

    const handleDeleteRewiew = (index) => {
        const updatedReviews = [...reviews];
        updatedReviews.splice(index, 1);
        setReviews(updatedReviews);
    };
    
    return (
        <div className={style.reviews__page}>
            <MyAccountNav />
            <div className={style.container}>
                <h3 className={style.title}> My Reviews</h3>
                {reviews.map((review, index) => (
                    <FeedbackItem key={index} index={index} data={review} onDeleteFeedback={handleDeleteRewiew} />
                ))}
            </div>
        </div>
    );
}
