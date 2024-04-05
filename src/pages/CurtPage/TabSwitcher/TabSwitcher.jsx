import React, { useState } from 'react';
import styles from './TabSwitcher.module.css';
import Icons from '../../../components/Icons/Icons';
import { selectCurtProducts } from '../../../redux/selectors';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import validator from 'validator';

export const TabSwitcher = ({ tabs, selectedId, setSelectedId }) => {
    const curtItems = useSelector(selectCurtProducts);
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

    const [ paymentMethod, setPaymentMethod ] = useState(PaymentMethod[0]);
    const [ rules, setRules ] = useState(false);

    const handleClick = (tabId) => {
        if (curtItems.length === 0) {
            toast('your cart is empty');
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
    
            if (formData.phoneNumber === '') {
                if (!/^\d{9}$/.test(formData['phoneNumber'])) {
                    toast('Please enter a valid phone number with 9 digits');
                    return;
                }
            }
    
            if (formData.email === '') {
                toast('Please fill in email field');
                return;
            }
    
            if (!validator.isEmail(formData.email)) {
                toast('Please enter a valid email address');
                return;
            }
        }
        setSelectedId(tabId);
    }
    
    
    const lineWidth = (tabs.findIndex(t => t.id === selectedId) + 1) * (100 / tabs.length);

    return (
        <div>
            <div className={styles.wrapper}>
                {tabs.map((tab, index) => (
                    <button
                        className={styles.title}
                        key={tab.id}
                        onClick={selectedId !== tab.id ? () => handleClick(tab.id) : undefined}
                        style={{ cursor: selectedId === tab.id ? 'default' : 'pointer' }}
                    >
                        <div 
                            className={styles.check}
                            style={{
                                backgroundColor: index < tabs.findIndex(t => t.id === selectedId) ? '#fcb654' : ''
                            }}
                        >
                            <Icons icon={'check'}/>
                        </div>
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className={styles.hr}>
                <div className={styles.progress} style={{ width: `${lineWidth}%`}}></div>
            </div>
            <div className={styles.wrapperContent}>
                {tabs.map(tab => (
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
                        />
                    )
                ))}
            </div>
        </div>
    );
}
