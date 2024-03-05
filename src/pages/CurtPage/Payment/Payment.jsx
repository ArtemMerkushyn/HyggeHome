import { useState } from 'react';
import Icons from '../../../components/Icons/Icons';
import styles from './Payment.module.css';

const PaymentMethod = [
    { id: 1, method: 'Payment by card', commission: 'No commission' },
    { id: 2, method: 'Google pay', commission: 'No commission' },
];

export const Payment = () => {
    const [ paymentMethod, setPaymentMethod ] = useState(PaymentMethod[0]);
    const [ rules, setRules ] = useState(false);

    const handleOptionChange = (e) => {
        const { value } = e.target;
        setPaymentMethod(PaymentMethod.find(method => method.method === value));
    }
    
    return (
        <>
            <h3 className={styles.title}>Payment method</h3>

            <div className={styles.wrapper}>
                {PaymentMethod.map(method => (
                    <label className={styles.method} key={method.id}>
                        <input 
                            type="radio" 
                            value={method.method}
                            checked={paymentMethod.method === method.method} 
                            onChange={handleOptionChange}
                            style={{ display: 'none' }}
                        />
                        <div className={styles.radio}>
                            <span
                                style={{background: paymentMethod.method === method.method ? '#FCB654' : 'transparent'}}
                            ></span>
                        </div>
                        <h5 className={styles.method__title}>{method.method}</h5>
                        <p className={styles.commission}>{method.commission}</p>
                    </label>
                ))}
            </div>
            <h3 className={styles.title}>Important</h3>
            <div className={styles.rules__wrapper}>
                <div className={styles.rules}>
                    <div 
                        onClick={() => setRules(true)}
                        style={{
                            opacity: rules ? 1 : 0,
                            transition: 'all .1s linear'
                        }}
                    >
                        <Icons 
                            style={{opacity : 0}}
                            icon={'check'}
                        />
                    </div>   
                </div>
                <p className={styles.rules__text}>
                    I accept the Purchase Rules, User Agreemens and Privacy Policy conditions
                </p>
            </div>
        </>
    );
}
