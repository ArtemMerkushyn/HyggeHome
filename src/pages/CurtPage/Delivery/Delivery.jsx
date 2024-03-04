import { useState } from 'react';
import styles from './Delivery.module.css';

const inputFields = [
    { label: 'Your first name*', placeholder: 'Your first name', id: 'firstName', name: 'firstName' },
    { label: 'Your last name*', placeholder: 'Your last name', id: 'lastName', name: 'lastName' },
    { label: 'Your address*', placeholder: 'Your address', id: 'address', name: 'address' },
    { label: 'Your city*', placeholder: 'Your city', id: 'city', name: 'city' },
    { label: 'Postal code*', placeholder: 'Postal code', id: 'postalCode', name: 'postalCode' },
    { label: 'Phone number*', placeholder: 'Phone number', id: 'phoneNumber', name: 'phoneNumber', type: 'tel' }
];

export const Delivery = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        postalCode: '',
        phoneNumber: '',
        option: '5',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    const handleOptionChange = (e) => {
        const { value } = e.target;
        setFormData(prevState => ({ ...prevState, option: value }));
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            {inputFields.map(field => (
                <div className={styles.field} key={field.id}>
                    <label htmlFor={field.id}>{field.label}</label>
                    <input 
                        type={'text'}
                        placeholder={field.placeholder}
                        id={field.id}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required 
                    />
                </div> 
            ))}
            <h3 className={styles.title}>Delivery method</h3>
            <div className={styles.wrapper}>
                {['5', '10', '9'].map(metod => (
                    <label className={styles.metod} key={metod}>
                        <input 
                            type="radio" 
                            name="option" 
                            value={metod} 
                            checked={formData.option === metod} 
                            onChange={handleOptionChange} 
                            style={{ display: 'none' }}
                            required 
                        />
                        <div className={styles.radio} htmlFor={metod}>
                            <span
                                style={{ backgroundColor: formData.option === metod ? '#FCB654' : 'transparent' }}
                            ></span>
                        </div>
                        <div className={styles.metod__img}></div>
                        <div className={styles.metod__info}>
                            <h5>Delivery method</h5>
                            <span>${metod}</span>
                        </div>
                    </label>
                ))}
            </div>
        </form>
    );
}
