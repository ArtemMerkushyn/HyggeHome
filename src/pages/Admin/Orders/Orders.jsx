import React, { useEffect } from 'react';
import MyAccountNav from '../../../components/MyAccontNav/MyAccountNav';
import css from './Orders.module.css';
import OrderItem from '../../../components/OrderItem/OrderItem';
import data from '../../MyAccount/components/MyOrders/db.json';
import { useGetOrdersQuery } from '../../../redux/services';

const Orders = () => {
  const orders = useGetOrdersQuery({
    min: '',
    max: '',
  });
  useEffect(() => {
    console.log(orders);
  }, [orders]);

  return (
    <div className={css.wrapper}>
      <MyAccountNav />
      <div className={css.container}>
        <h3 className={css.title}>List of all order</h3>
        {data.map((orderData, index) => (
          <OrderItem key={index} data={orderData} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
