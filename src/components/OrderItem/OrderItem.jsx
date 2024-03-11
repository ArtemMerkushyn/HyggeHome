import React, { useState } from 'react';
import css from './OrderItem.module.css'
import Icons from '../Icons/Icons';
import { Modal } from '../MainPageContent/ModalWindow/Modal';
import FeedbackForm from '../FeedbackForm/FeedbackForm';

const OrderItem = ({ data }) => {
    const [showDetails, setShowDetails] = useState(false)
    const [modal, setModal] = useState(false)

const toggleModal = () => {
    const body = document.body;
    setModal(!modal);
    if (!modal) {
        body.style.overflow = 'hidden';

        // Додамо обробник подій для блокування кліків на елементи за межами модального вікна
        document.addEventListener('click', handleOutsideClick);
    } else {
        body.style.overflow = 'auto';

        // При закритті модального вікна видаляємо обробник подій
        document.removeEventListener('click', handleOutsideClick);
    }
}

const handleOutsideClick = (event) => {
    const modalContainer = document.querySelector('.modal-container');
    if (modalContainer && !modalContainer.contains(event.target)) {
        // Якщо клік відбувся поза модальним вікном, відміняємо подію
        event.stopPropagation();
        event.preventDefault();
    }
}

    return (
        <div className={css.orderContainer}>
            <div className={css.orderitems}>
                <div className={css.order_data}>
                    <h3 className={css.order_number_and_date}>№{data.order_number} {data.order_date}  </h3>
                    <p className={`${css[data.order_status.toLowerCase() === "done" ? "order_status_done" : "order_status_canceled"]}`}>
                        {data.order_status}
                    </p>

                </div> 
                <div className={css.order_data}>
                    <h3 className={css.total_amount_text}> ORDER AMOUNT</h3>
                    <p className={css.total_amount_number}>{data.total_amount}</p>
                </div>
                    <button className={css.show_more_button} onClick={() => setShowDetails(!showDetails)} style={{transform: showDetails? "rotate(270deg)" : ""}}>
                        <Icons icon="right_arrow" />
                </button>
                
            </div>
            {showDetails &&
                (
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
                                <div  className={css.product_details} key={index}>
                                    <img className={css.product_photo} src={product.image} alt={`Product ${index}`} />
                                    <div className={css.product_name_div}>
                                        <p className={css.product_text}>Product name</p>
                                        <p className={css.product_detail}>{product.product_name}</p>
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
                                        <img className={css.product_photo} src={data.product.image} alt={`Product`} />
                                        <div className={css.product_name_div}>
                                            <p className={css.product_text}>Product name</p>
                                            <p className={css.product_detail}>{data.product.product_name}</p>
                                        </div>
                                        <div className={css.product_div}>
                                            <p className={css.product_text}>Price</p>
                                            <p className={css.product_detail}>{data.product.price}</p>
                                        </div>
                                         <div className={css.product_div}>
                                            <p className={css.product_text}>QTY</p>
                                            <p className={css.product_quantity}>{data.product.quantity}</p>
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
                    <button className={css.feedback_button} onClick={toggleModal}>Leave a feedback</button>
                    {modal && (<Modal funcClick={toggleModal}><FeedbackForm toggle={toggleModal} /></Modal>)}
                    </>
            )
            }
        </div>
    );
};

export default OrderItem;
