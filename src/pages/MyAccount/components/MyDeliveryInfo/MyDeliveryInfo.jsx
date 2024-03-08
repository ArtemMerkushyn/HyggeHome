import React, { useState } from 'react';
import MyAccountNav from '../../../../components/MyAccontNav/MyAccountNav';
import Button from '../../../../components/UI/Button/Button';
import styles from './MyDeliveryInfo.module.css';
import { toast } from 'react-toastify';

const inputFields = [
    { label: 'Your first name', placeholder: 'Your first name', id: 'firstName', name: 'firstName' },
    { label: 'Your last name', placeholder: 'Your last name', id: 'lastName', name: 'lastName' },
    { label: 'Your address', placeholder: 'Your address', id: 'address', name: 'address' },
    { label: 'Your city', placeholder: 'Your city', id: 'city', name: 'city' },
    { label: 'Postal code', placeholder: 'Postal code', id: 'postalCode', name: 'postalCode' },
    { label: 'Phone number', placeholder: 'Phone number', id: 'phoneNumber', name: 'phoneNumber', type: 'tel' }
];

const MyDeliveryInfo = () => {
    const [formData, setFormData] = useState({
        firstName: 'Vika',
        lastName: 'Vika',
        address: 'street',
        city: 'Cuty',
        postalCode: '123',
        phoneNumber: '12345467868',
    });
    const [edit, setEdit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = () => {
        toast('You have changed your delivery information');
    }

    const handleCancel = () => {
        setFormData({
            firstName: 'Vika',
            lastName: 'Vika',
            address: 'street',
            city: 'Cuty',
            postalCode: '123',
            phoneNumber: '12345467868',
        });
        setEdit(false);
    }

    return (
        <div className={styles.MyDeliveryInfo}>
            <MyAccountNav/>
            <div className={styles.wrapper}>
                <h3 className={styles.title}>My delivery information</h3>
                <div className={styles.form}>
                    {inputFields.map(field => (
                        <div className={styles.field} key={field.id}>
                            <label htmlFor={field.id}>{field.label}</label>
                            <input 
                                type={'text'}
                                placeholder={field.placeholder}
                                id={field.id}
                                name={field.name}
                                value={formData[field.name]}
                                readOnly={edit ? false : true}
                                onChange={handleChange}
                                required
                            />
                        </div> 
                    ))}
                </div>
                <div className={styles.btns}>
                    {edit ? (
                        <div className={styles.btns__wrapper}>
                            <Button text={'Cancel changes'} funcClick={handleCancel} />
                            <Button text={'Save my delivery information'} funcClick={handleSubmit} />
                        </div>
                    ) : (
                        <Button text={'Edit my delivery information'} funcClick={() => setEdit(true)} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyDeliveryInfo;