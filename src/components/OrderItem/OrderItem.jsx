import React, { useState } from 'react';
import css from './OrderItem.module.css';
import Icons from '../Icons/Icons';
import { Modal } from '../MainPageContent/ModalWindow/Modal';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/selectors';
import { colors } from '@mui/material';
import { useOrderStatusMutation } from '../../redux/services';
import { toast } from 'react-toastify';

const statuses = [
  'Pending',
  'Processing',
  'On Hold',
  'Done',
  'Cancelled',
  'Refunded',
  'Failed',
  'Shipped',
  'Delivered',
  'Awaiting Pickup',
];

const OrderItem = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [orderStatus, setOrderStatus] = useState(data.order_status);
  const [modal, setModal] = useState(false);
  const [optionsModal, setOptionsModal] = useState(false);
  const user = useSelector(selectUser);
  const isAdmin = user?.isAdmin;
  const [changeStatus] = useOrderStatusMutation();

  const toggleModal = () => {
    const body = document.body;
    setModal(!modal);
    if (!modal) {
      body.style.overflow = 'hidden';
      body.style.marginRight = '15px';
    } else {
      body.style.overflow = 'auto';
      body.style.marginRight = '';
    }
  };

  const handleChangeStatus = status => {
    changeStatus({ id: data.order_number, status: status }).then(res => {
      console.log(res);
      if (res.data.statusCode === 204) {
        toast.error(`Status of the order is already ${status}`);
      } else if (res.data.statusCode === 200) {
        toast.success(`Status have been changed sucessfully`);
        setOrderStatus(status);
        setOptionsModal(prev => !prev);
      } else if (res.error.statusCode === 404) {
        toast.error(
          `Error during changing status of order №${data.order_number}`,
        );
      }
    });
  };

  return (
    <div className={css.orderContainer}>
      <div className={css.orderitems}>
        <div className={css.order_data}>
          <h3 className={css.order_number_and_date}>
            №{data.order_number} {data.order_date}{' '}
          </h3>
          <div
            style={{
              display: 'flex',
              gap: '4px',
              alignItems: 'center',
              cursor: isAdmin ? 'pointer' : '',
            }}
            onClick={() => setOptionsModal(prev => !prev)}
          >
            <p
              className={`${
                css[
                  orderStatus.toLowerCase() === 'done'
                    ? 'order_status_done'
                    : 'order_status_canceled'
                ]
              } ${isAdmin ? css.optionsbutton : ''}`}
            >
              {orderStatus}
            </p>
            {isAdmin && (
              <button
                className={css.show_more_button}
                style={{ transform: optionsModal ? 'rotate(270deg)' : '' }}
              >
                <Icons icon="right_arrow" />
              </button>
            )}
          </div>

          {isAdmin && optionsModal && (
            <div className={css.optionsContainer}>
              {statuses.map((stat, index) => (
                <p
                  key={index}
                  className={css.statOption}
                  style={{
                    color: orderStatus === stat && '#fcb654',
                  }}
                  onClick={() => handleChangeStatus(stat)}
                >
                  {stat}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className={css.order_data}>
          <h3 className={css.total_amount_text}>ORDER AMOUNT</h3>
          <p className={css.total_amount_number}>{data.total_amount}</p>
        </div>
        <button
          className={css.show_more_button}
          onClick={() => setShowDetails(!showDetails)}
          style={{ transform: showDetails ? 'rotate(270deg)' : '' }}
        >
          <Icons icon="right_arrow" />
        </button>
      </div>
      {showDetails && (
        <>
          <div className={css.line}></div>
          <div className={css.more_details_content}>
            <div className={css.more_order_details}>
              <p className={css.details_text}>{data.order_adress}</p>
              <p className={css.details_text}>{data.orderer}</p>
              <p className={css.details_text}>{data.phone_number}</p>
              <p className={css.details_text}>{data.email}</p>
            </div>
            <div className={css.product_wrapper}>
              {Array.isArray(data.product) ? (
                data.product.map((product, index) => (
                  <div className={css.product_details} key={index}>
                    <img
                      className={css.product_photo}
                      src={product.image}
                      alt={`Product ${index}`}
                    />
                    <div className={css.product_name_div}>
                      <p className={css.product_text}>Product name</p>
                      <p className={css.product_detail}>
                        {product.product_name}
                      </p>
                    </div>
                    <div className={css.product_div}>
                      <p className={css.product_text}>Price</p>
                      <p className={css.product_detail}>{product.price}</p>
                    </div>
                    <div className={css.product_div}>
                      <p className={css.product_text}>QTY</p>
                      <p className={css.product_quantity}>{product.quantity}</p>
                    </div>
                    <div className={css.product_div}>
                      <p className={css.product_text}>Total</p>
                      <p className={css.product_detail}>{product.total}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className={css.product_details}>
                  <img
                    className={css.product_photo}
                    src={data.product.image}
                    alt={`Product`}
                  />
                  <div className={css.product_name_div}>
                    <p className={css.product_text}>Product name</p>
                    <p className={css.product_detail}>
                      {data.product.product_name}
                    </p>
                  </div>
                  <div className={css.product_div}>
                    <p className={css.product_text}>Price</p>
                    <p className={css.product_detail}>{data.product.price}</p>
                  </div>
                  <div className={css.product_div}>
                    <p className={css.product_text}>QTY</p>
                    <p className={css.product_quantity}>
                      {data.product.quantity}
                    </p>
                  </div>
                  <div className={css.product_div}>
                    <p className={css.product_text}>Total</p>
                    <p className={css.product_detail}>{data.product.total}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={css.line}></div>
          <div className={css.payment_container}>
            <div className={css.payment_details_container}>
              <p className={css.payment_details}>Payment</p>
              <p className={css.payment_details_data}>{data.payment_method}</p>
            </div>
            <div className={css.payment_details_container}>
              <p className={css.payment_details}>Delivery</p>
              <p className={css.payment_details_data}>{data.delivery_type}</p>
            </div>
            <div className={css.payment_details_container}>
              <p className={css.payment_details}>Total</p>
              <p className={css.payment_details_data}>{data.total_amount}</p>
            </div>
          </div>
          <button className={css.feedback_button} onClick={toggleModal}>
            Leave a feedback
          </button>
          {modal && (
            <Modal funcClick={toggleModal}>
              <FeedbackForm toggle={toggleModal} />
            </Modal>
          )}
        </>
      )}
    </div>
  );
};

export default OrderItem;
