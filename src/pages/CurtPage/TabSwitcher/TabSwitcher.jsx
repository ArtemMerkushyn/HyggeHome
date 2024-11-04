import React, { useEffect, useState } from 'react';
import styles from './TabSwitcher.module.css';
import Icons from '../../../components/Icons/Icons';
import { selectCurtProducts } from '../../../redux/selectors';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import validator from 'validator';
import { usePostOrderMutation } from '../../../redux/services.js';

export const TabSwitcher = ({ tabs, selectedId, setSelectedId }) => {
  const curtItems = useSelector(selectCurtProducts);
  console.log(curtItems);
  const [handleNext, setHandleNext] = useState(false);
  const [postOrder] = usePostOrderMutation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    phoneNumber: '',
    email: '',
    optionDeliveryMethod: '5',
  });
  const PaymentMethod = [
    { id: 1, method: 'Payment by card', commission: 'No commission' },
    { id: 2, method: 'Google pay', commission: 'No commission' },
  ];

  const [paymentMethod, setPaymentMethod] = useState(PaymentMethod[0]);
  const [rules, setRules] = useState(false);
  const [previousTab, setPreviousTab] = useState(null);

  useEffect(() => {
    const scrollContainer = document.querySelector(
      `.${styles.scrollContainer}`,
    );
    const { scrollLeft } = scrollContainer;

    if (previousTab === 'cart' && selectedId === 'delivery') {
      scrollContainer.scrollLeft += 350;
    } else if (previousTab === 'payment' && selectedId === 'delivery') {
      scrollContainer.scrollLeft -= 350;
    } else if (previousTab === 'delivery' && selectedId === 'payment') {
      scrollContainer.scrollLeft += 350;
    } else if (previousTab === 'delivery' && selectedId === 'cart') {
      scrollContainer.scrollLeft -= 350;
    }

    setPreviousTab(selectedId);
  }, [selectedId]);

  const handleClick = tabId => {
    if (curtItems.length === 0) {
      toast('Your cart is empty');
      return;
    }

    if (tabId === tabs[0].id) {
      setSelectedId(tabId);
      return;
    }

    if (selectedId === tabs[0].id) {
      setSelectedId(tabs[1].id);
      return;
    }

    if (selectedId === tabs[1].id) {
      // Check if all fields are filled
      if (
        formData.firstName === '' ||
        formData.lastName === '' ||
        formData.address === '' ||
        formData.city === '' ||
        formData.postalCode === '' ||
        formData.optionDeliveryMethod === ''
      ) {
        toast('Please fill in all fields');
        return;
      }

      // Check phone number format
      if (formData.phoneNumber === '') {
        if (!/^\d{9}$/.test(formData.phoneNumber)) {
          toast('Please enter a valid phone number with 9 digits');
          return;
        }
      }

      // Check if email field is filled
      if (formData.email === '') {
        toast('Please fill in email field');
        return;
      }

      // Check email format
      if (!validator.isEmail(formData.email)) {
        toast('Please enter a valid email address');
        return;
      }
    }

    setSelectedId(tabId);
  };

  const lineWidth =
    (tabs.findIndex(t => t.id === selectedId) + 1) * (100 / tabs.length);

  const handleOrderPost = async () => {
    const orderProducts = curtItems.map(item => ({
      article: item.dataProduct.article,
      price: item.dataProduct.price,
      quantity: item.amount ? item.amount : 1,
    }));

    const totalOrderPrice = curtItems.reduce(
      (total, item) => total + item.dataProduct.price * (item.amount || 1),
      0,
    );

    const orderDeliveryInfo = `${formData.firstName} ${formData.lastName}, ${formData.address}, ${formData.city}, ${formData.postalCode}, ${formData.phoneNumber}, ${formData.email}, ${formData.optionDeliveryMethod}`;

    try {
      const response = await postOrder({
        products: orderProducts,
        totalPrice: totalOrderPrice,
        deliveryInfo: orderDeliveryInfo,
      }).unwrap();
      if (response.statusCode !== 200) {
        throw new Error('An error occurred while processing your order.');
      }
      toast('Order placed successfully!');
    } catch (error) {
      console.error(
        error.message || 'Failed to place order. Please try again.',
      );
    }
  };

  return (
    <div>
      <div className={styles.scrollContainer}>
        <div className={styles.wrapper}>
          {tabs.map((tab, index) => (
            <button
              className={styles.title}
              key={tab.id}
              onClick={
                selectedId !== tab.id ? () => handleClick(tab.id) : undefined
              }
              style={{
                cursor: selectedId === tab.id ? 'default' : 'pointer',
                color:
                  index < tabs.findIndex(t => t.id === selectedId)
                    ? '#fcb654'
                    : '#252525',
              }}
            >
              <div
                className={styles.check}
                style={{
                  backgroundColor:
                    index < tabs.findIndex(t => t.id === selectedId)
                      ? '#fcb654'
                      : '',
                }}
              >
                <Icons icon={'check'} />
              </div>
              {tab.title}
            </button>
          ))}
        </div>
        <div className={styles.hr}>
          <div
            className={styles.progress}
            style={{ width: `${lineWidth}%` }}
          ></div>
        </div>
      </div>
      <div className={styles.wrapperContent}>
        {tabs.map(
          tab =>
            selectedId === tab.id && (
              <tab.component
                key={tab.id}
                setSelectedId={setSelectedId}
                tabs={tabs}
                formData={formData}
                setFormData={setFormData}
                PaymentMethod={PaymentMethod}
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
                rules={rules}
                setRules={setRules}
                handleNext={handleNext}
                setHandleNext={setHandleNext}
                postOrder={handleOrderPost}
              />
            ),
        )}
      </div>
    </div>
  );
};
