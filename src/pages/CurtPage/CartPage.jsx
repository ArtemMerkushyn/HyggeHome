import { Cart } from './Cart/Cart';
import { Delivery } from './Delivery/Delivery';
import { Payment } from './Payment/Payment';
import { TabSwitcher } from './TabSwitcher/TabSwitcher';
import { useState } from 'react';
import { NewCollection } from '../../components/MainPageContent/secondMainContent/NewCollection';

const tabs = [
  { id: 'cart', title: 'Your cart', component: Cart },
  { id: 'delivery', title: 'Delivery', component: Delivery },
  { id: 'payment', title: 'Payment', component: Payment },
];

export const CartPage = () => {
  const [selectedId, setSelectedId] = useState(tabs[0].id);

  return (
    <div style={{ paddingBottom: selectedId === tabs[0].id ? '120px': 0 }}>
      <TabSwitcher tabs={tabs} selectedId={selectedId} setSelectedId={setSelectedId}/>
      {selectedId === tabs[0].id ? (
        <NewCollection
          sliderNeeded={false}
          upperText="products for you"
          lowerText="You might also like"
        />
      ) : null}
    </div>
  );
};
