import React, { useState } from 'react';
import MyAccountNav from '../../../../components/MyAccontNav/MyAccountNav';
import css from './MyFeedback.module.css';
import data from './feedbackbase.json';
import FeedbackItem from '../../../../components/FeedbackItem/FeedbackItem';

const MyFeedback = () => {
    const [feedbackList, setFeedbackList] = useState(data);

    const handleDeleteFeedback = (index) => {
        const updatedFeedbackList = [...feedbackList];
        updatedFeedbackList.splice(index, 1);
        setFeedbackList(updatedFeedbackList);
    };

    return (
        <div>
            <MyAccountNav />
            <div className={css.container}>
                <h1 className={css.headed_text}> My orders</h1>
                {feedbackList.map((orderData, index) => (
                    <FeedbackItem key={index} index={index} data={orderData} onDeleteFeedback={handleDeleteFeedback} />
                ))}
            </div>
        </div>
    );
};

export default MyFeedback;
