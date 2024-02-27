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

    if (fieldName === 'firstName') {
      if (value.length < 3) {
        errorMessage = 'The name is too short';
      } else if (!/^[a-zA-Z0-9 ]*$/.test(value)) {
        errorMessage = 'The name must contain only letters and numbers';
      }
    }

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
            <span className={styles.error}>{errors.firstName}</span>
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
          {errors.lastName && (
            <span className={styles.error}>{errors.lastName}</span>
          )}
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
          {errors.adress && (
            <span className={styles.error}>{errors.adress}</span>
          )}
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
          {errors.city && <span className={styles.error}>{errors.city}</span>}
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
          {errors.code && <span className={styles.error}>{errors.code}</span>}
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
          {errors.phone && <span className={styles.error}>{errors.phone}</span>}
        </div>

        <div style={{ marginTop: '60px' }}>
          <h3 className={styles.delivery_method}>Delivery method</h3>

          <div className={styles.radio_wrapper}>
            <input
              type="radio"
              id="method 1"
              name="deliveryMethod"
              value="method1"
              checked={formData.deliveryMethod === 'method1'}
              onChange={handleChange}
            />
            <div className={styles.divform}></div>
            <label htmlFor="method 1" className={styles.radio_label}>
              <span className={styles.span_title}>Delivery method 1</span>
              <span className={styles.span_price}>$5</span>
            </label>
          </div>

          <div className={styles.radio_wrapper}>
            <input
              type="radio"
              id="method 2"
              name="deliveryMethod"
              value="method2"
              checked={formData.deliveryMethod === 'method2'}
              onChange={handleChange}
            />
            <div className={styles.divform}></div>
            <label htmlFor="method 2" className={styles.radio_label}>
              <span className={styles.span_title}>Delivery method 2</span>
              <span className={styles.span_price}>$10</span>
            </label>
          </div>

          <div className={styles.radio_wrapper}>
            <input
              type="radio"
              id="method 3"
              name="deliveryMethod"
              value="method3"
              checked={formData.deliveryMethod === 'method3'}
              onChange={handleChange}
            />
            <div className={styles.divform}></div>
            <label htmlFor="method 3" className={styles.radio_label}>
              <span className={styles.span_title}>Delivery method 3</span>
              <span className={styles.span_price}>$9</span>
            </label>
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
