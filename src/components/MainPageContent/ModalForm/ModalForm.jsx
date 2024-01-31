import React, { useState } from 'react';
import css from './ModalForm.module.css';
import Icons from '../../Icons/Icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../Button/Button';

export const ModalForm = ({ toggleModal }) => {
  const [firstCheckbox, setFirstCheckbox] = useState(false);
  const [secondCheckbox, setSecondCheckbox] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleButton = () => {
    // Перевірка, чи всі поля заповнені
    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      confirmPassword.trim() === ''
    ) {
      toast.error('Please fill all fields');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Invalid email address');
      return false;
    }

    if (!firstCheckbox || !secondCheckbox) {
      toast.error('Accept all the policies');
      return false;
    }

    if (password.trim() !== confirmPassword.trim()) {
      toast.error('Passwords do not match');
      return false;
    }

    return true; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleButton()) {
      toggleModal();
    }
  };

  return (
    <div className={css.modal_container}>
      <button type="button" onClick={toggleModal} className={css.close_modal_button}>
        <Icons icon={'cross'} />
      </button>
      <form action="/submit" method="post" onSubmit={handleSubmit} className={css.modal_form}>
      <h2 className={css.modal_register_text}>Register Individual Account!</h2>

<label htmlFor="first-name" className={css.modal_input_label}>
  Your first name*
</label>
<input
  type="text"
  id="first-name"
  name="first-name"
  placeholder="Your first name"
  className={css.modal_input}
  value={firstName}
  onChange={(e) => setFirstName(e.target.value)}
/>

<label htmlFor="last-name" className={css.modal_input_label}>
  Your last name*
</label>
<input
  type="text"
  id="last-name"
  name="last-name"
  placeholder="Your last name"
  className={css.modal_input}
  value={lastName}
  onChange={(e) => setLastName(e.target.value)}
/>

<label htmlFor="email" className={css.modal_input_label}>
  Your Email*
</label>
<input
  type="text"
  id="email"
  name="email"
  placeholder="Your email"
  className={css.modal_input}
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

<label htmlFor="password" className={css.modal_input_label}>
  Create password*
</label>
<input
  type="password"
  id="password"
  name="password"
  placeholder="Password"
  className={css.modal_input}
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

<label htmlFor="confirm-password" className={css.modal_input_label}>
  Confirm the password*
</label>
<input
  type="password"
  id="confirm-password"
  name="confirm-password"
  placeholder="Password"
  className={css.modal_input}
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
/>

<div className={css.modal_checkbox_container}>
  <button
    type="button"
    className={`${css.modal_checkbox} ${firstCheckbox ? css.checked : ''}`}
    onClick={() => {
      setFirstCheckbox((prev) => !prev);
    }}
  >
    <div className={css.svg_div}>
      <Icons icon={'check'} />
    </div>
  </button>
  <label htmlFor="agreement" className={css.agreement_text}>
    I accept the Purchase Rules, User Agreements, and Privacy Policy conditions
  </label>
</div>

<div className={css.modal_checkbox_container}>
  <button
    type="button"
    className={`${css.modal_checkbox} ${secondCheckbox ? css.checked : ''}`}
    onClick={() => {
      setSecondCheckbox((prev) => !prev);
    }}
  >
    <div className={css.svg_div}>
      <Icons icon={'check'} />
    </div>
  </button>
  <label htmlFor="agreement" className={css.agreement_text}>
    I agree to receive emails about the new offers from HyggeHome
  </label>
</div>

<Button text="Create account" style={{ width: "426px",  heigth : "48px"}} type="submit" />

      </form>
    </div>
  );
};
