import styles from './CartPage.module.css';
import { Cart } from './Cart/Cart';
import { Delivery } from './Delivery/Delivery';
import { Payment } from './Payment/Payment';
import Button from '../../components/MainPageContent/Button/Button';
import { TabSwitcher } from './TabSwitcher/TabSwitcher';

const tabs = [
  { id: 'cart', title: 'Your cart', component: Cart },
  { id: 'delivery', title: 'Delivery', component: Delivery },
  { id: 'payment', title: 'Payment', component: Payment },
];

export const CartPage = () => {
  const handlerNext = () => {
    console.log('ok');
  }

  return (
    <div>
      <TabSwitcher tabs={tabs}/>
      <div className={styles.btn}>
        <Button text={'Next step'} funcClick={handlerNext} />
      </div>
    </div>
  );
};
