import styles from './CartPage.module.css';
import { Cart } from './Cart/Cart';
import { Delivery } from './Delivery/Delivery';
import { Payment } from './Payment/Payment';
import Button from '../../components/UI/Button/Button';
import { TabSwitcher } from './TabSwitcher/TabSwitcher';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const tabs = [
  { id: 'cart', title: 'Your cart', component: Cart },
  { id: 'delivery', title: 'Delivery', component: Delivery },
  { id: 'payment', title: 'Payment', component: Payment },
];

export const CartPage = () => {
  const [selectedId, setSelectedId] = useState(tabs[0].id);

  const navigate = useNavigate();

  const handlerNext = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === selectedId);
    if(currentIndex === 2) {
      navigate('/');
    }
    // Переключаемся на следующий элемент, оборачиваясь к началу, если мы достигли конца массива
    const nextIndex = (currentIndex + 1) % tabs.length;
    setSelectedId(tabs[nextIndex].id);
  }

  const handlerPrev = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === selectedId);
    const nextIndex = (currentIndex - 1) % tabs.length;
    setSelectedId(tabs[nextIndex].id);
  }

  return (
    <div>
      <TabSwitcher tabs={tabs} selectedId={selectedId} setSelectedId={setSelectedId}/>
      <div className={styles.btn}>
        {selectedId !== tabs[0].id ? (
          <button className={styles.btnPrev} onClick={handlerPrev}>Previous step</button>
        ) : null}
        <Button text={'Next step'} funcClick={handlerNext} />
      </div>
    </div>
  );
};
