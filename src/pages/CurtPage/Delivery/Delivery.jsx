import React, { useState } from 'react';
import styles from './Delivery.module.css';
import Button from '../../../components/UI/Button/Button';
import { toast } from 'react-toastify';
import validator from 'validator';

const inputFields = [
  {
    label: 'Your first name*',
    placeholder: 'Your first name',
    id: 'firstName',
    name: 'firstName',
  },
  {
    label: 'Your last name*',
    placeholder: 'Your last name',
    id: 'lastName',
    name: 'lastName',
  },
  {
    label: 'Your address*',
    placeholder: 'Your address',
    id: 'address',
    name: 'address',
  },
  { label: 'Your city*', placeholder: 'Your city', id: 'city', name: 'city' },
  {
    label: 'Postal code*',
    placeholder: 'Postal code',
    id: 'postalCode',
    name: 'postalCode',
  },
  {
    label: 'Phone number*',
    placeholder: 'Phone number',
    id: 'phoneNumber',
    name: 'phoneNumber',
    type: 'tel',
  },
  {
    label: 'Your Email*',
    placeholder: 'Your email',
    id: 'email',
    name: 'email',
  },
];

export const Delivery = ({
  tabs,
  setSelectedId,
  formData,
  setFormData,
  setHandleNext,
  handleNext,
}) => {
  const [validation, setValidation] = useState(
    Object.fromEntries(inputFields.map(field => [field.name, true])),
  );

  const handleChange = e => {
    const { name, value } = e.target;
    let filteredValue = value;
    if (name === 'phoneNumber') {
      filteredValue = value.replace(/\D/g, '');
    }
    setFormData(prevState => ({ ...prevState, [name]: filteredValue }));

    validateField(name, filteredValue);
  };

  const validateField = (fieldName, value) => {
    const isValid = fieldValidation(fieldName, value);
    setValidation(prevState => ({ ...prevState, [fieldName]: isValid }));
  };

  const fieldValidation = (fieldName, value) => {
    if (fieldName === 'phoneNumber') {
      return /^\d{9}$/.test(value);
    }
    return true;
  };

  const handleOptionChange = e => {
    const { value } = e.target;
    setFormData(prevState => ({ ...prevState, optionDeliveryMethod: value }));
  };

  const handlePrevStep = () => {
    setSelectedId(tabs[0].id);
  };

  const handleNextStep = () => {
    let isAnyFieldEmpty = false;
    for (const field of inputFields) {
      if (!formData[field.name]) {
        isAnyFieldEmpty = true;
        setValidation(prevState => ({ ...prevState, [field.name]: false }));
      }
      if (!validation[field.name]) {
        toast(`Please enter a valid ${field.label.toLowerCase()} field`);
        return;
      }
    }
    if (isAnyFieldEmpty) {
      toast('Please fill in all fields');
      return;
    }
    if (!validator.isEmail(formData.email)) {
      toast('Please enter a valid email address');
      setValidation(prevState => ({ ...prevState, email: false }));
      return;
    }
    setSelectedId(tabs[2].id);
    setHandleNext(!handleNext);
  };

  return (
    <form onSubmit={e => e.preventDefault()}>
      {inputFields.map(field => (
        <div className={styles.field} key={field.id}>
          <label htmlFor={field.id}>{field.label}</label>
          <input
            type={'text'}
            placeholder={field.placeholder}
            id={field.id}
            name={field.name}
            style={{
              border:
                validation[field.name] === false
                  ? '1px solid red'
                  : '1px solid #252525',
              background: validation[field.name] === false ? '#f1c2c2' : '#fff',
            }}
            value={formData[field.name]}
            onChange={handleChange}
            required
            pattern={field.name === 'phoneNumber' ? '\\d+' : undefined}
            minLength={field.name === 'phoneNumber' ? 9 : undefined}
            maxLength={field.name === 'phoneNumber' ? 9 : undefined}
          />
          {!validation[field.name] && (
            <p className={styles.error}>
              Please enter a valid {field.label.toLowerCase()} field
            </p>
          )}
        </div>
      ))}
      <h3 className={styles.title}>Delivery method</h3>
      <div className={styles.wrapper}>
        {['5', '10', '9'].map(method => (
          <label className={styles.method} key={method}>
            <input
              type="radio"
              name="option"
              value={method}
              checked={formData.optionDeliveryMethod === method}
              onChange={handleOptionChange}
              style={{ display: 'none' }}
              required
            />
            <div className={styles.radio} htmlFor={method}>
              <span
                style={{
                  backgroundColor:
                    formData.optionDeliveryMethod === method
                      ? '#FCB654'
                      : 'transparent',
                }}
              ></span>
            </div>
            <div className={styles.metod__img}></div>
            <div className={styles.metod__info}>
              <h5>Delivery method</h5>
              <span>${method}</span>
            </div>
          </label>
        ))}
      </div>
      <div className={styles.btns}>
        <Button text={'Previous step'} funcClick={handlePrevStep} />
        <Button text={'Next step'} funcClick={handleNextStep} />
      </div>
    </form>
  );
};
