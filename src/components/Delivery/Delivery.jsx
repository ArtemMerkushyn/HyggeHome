import { useState } from 'react';

import styles from './Delivery.module.css';

export default function Delivery() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    adress: '',
    city: '',
    code: '',
    phone: '',
    deliveryMethod: 'method1',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    adress: '',
    city: '',
    code: '',
    phone: '',
    deliveryMethod: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    const trimmedValue = name === 'name' ? value.trim() : value;
    setFormData({
      ...formData,
      [name]: trimmedValue,
    });

    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let errorMessage = '';

    if (fieldName === 'firstName' && fieldName === 'lastName') {
      if (value.length < 3) {
        errorMessage = 'The name is too short';
      } else if (!/^[a-zA-Z0-9 ]*$/.test(value)) {
        errorMessage = 'The name must contain only letters and numbers';
      }
    }

    // if (fieldName === 'email') {
    //   if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    //     errorMessage = 'Please enter a valid email address';
    //   }
    // }

    setErrors({
      ...errors,
      [fieldName]: errorMessage,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log('Form sent:', formData);
  };
  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label className={styles.form_label}>Your first name*</label>
          <input
            type="text"
            name="firstName"
            className={styles.form_input}
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Your first name"
            required
          />
          {errors.firstName && (
            <span className="error">{errors.firstName}</span>
          )}
        </div>
        <div className={styles.form_group}>
          <label className={styles.form_label}>Your last name*</label>
          <input
            type="text"
            name="lastName"
            className={styles.form_input}
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Your last name"
            required
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div className={styles.form_group}>
          <label className={styles.form_label}>Your adress*</label>
          <input
            type="text"
            name="adress"
            className={styles.form_input}
            value={formData.adress}
            onChange={handleChange}
            placeholder="Your adress"
            required
          />
          {errors.adress && <span className="error">{errors.adress}</span>}
        </div>
        <div className={styles.form_group}>
          <label className={styles.form_label}>Your city*</label>
          <input
            type="text"
            name="city"
            className={styles.form_input}
            value={formData.city}
            onChange={handleChange}
            placeholder="Your city"
            required
          />
          {errors.city && <span className="error">{errors.city}</span>}
        </div>
        <div className={styles.form_group}>
          <label className={styles.form_label}>Postal code*</label>
          <input
            type="text"
            name="code"
            className={styles.form_input}
            value={formData.code}
            onChange={handleChange}
            placeholder="Postal code"
            required
          />
          {errors.code && <span className="error">{errors.code}</span>}
        </div>
        <div className={styles.form_group}>
          <label className={styles.form_label}>Phone number*</label>
          <input
            type="tel"
            name="phone"
            className={styles.form_input}
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone number"
            required
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div style={{ marginTop: '60px' }}>
          <legend className={styles.delivery_method}>Delivery method</legend>

          <div>
            <input
              type="radio"
              id="method 1"
              name="deliveryMethod"
              value="method1"
              onChange={handleChange}
              defaultChecked
            />
            <label htmlFor="method 1">Delivery method 1</label>
          </div>

          <div>
            <input
              type="radio"
              id="method 2"
              name="deliveryMethod"
              value="method2"
              onChange={handleChange}
            />
            <label htmlFor="method 2">Delivery method 2</label>
          </div>

          <div>
            <input
              type="radio"
              id="method 3"
              name="deliveryMethod"
              value="method3"
              onChange={handleChange}
            />
            <label htmlFor="method 3">Delivery method 3</label>
          </div>
        </div>
        <div className={styles.button_wrapper}>
          <button type="button" className={styles.button_previous}>
            Previous step
          </button>
          <button type="submit" className={styles.button_next}>
            Next step
          </button>
        </div>
      </form>
    </div>
  );
}
