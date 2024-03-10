import React from 'react';
import MyAccountNav from '../../../../components/MyAccontNav/MyAccountNav';
import css from './MyOrders.module.css'
import OrderItem from '../../../../components/OrderItem/OrderItem';
import data from './db.json'

const MyOrders = () => {
    return (
        <div>
            <MyAccountNav />
            <div className={css.container}>
                <h1 className={css.headed_text}> My orders</h1>
                {data.map((orderData, index) => (
                    <OrderItem key={index} data={orderData} />
                ))}
            </div>
        </div>
    );
};

export default MyOrders;