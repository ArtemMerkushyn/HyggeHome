import React from 'react';
import MyAccountNav from '../../../components/MyAccontNav/MyAccountNav';
import css from './Orders.module.css';
import OrderItem from '../../../components/OrderItem/OrderItem';
import data from '../../MyAccount/components/MyOrders/db.json';

const Orders = () => {
  return (
    <div className={css.wrapper}>
      <MyAccountNav />
      <div className={css.container}>
        <h3 className={css.title}>List of all orders</h3>
        {data.map((orderData, index) => (
          <OrderItem key={index} data={orderData} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
