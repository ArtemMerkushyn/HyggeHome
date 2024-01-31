import React, { useState } from 'react';
import css from './ModalForm.module.css';
import Icons from '../../Icons/Icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ModalForm = ({ toggleModal }) => {
  const [firstCheckbox, setFirstCheckbox] = useState(false);
  const [secondCheckbox, setSecondCheckbox] = useState(false);
  const [checkboxes, setCheckboxes] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleCheckboxes = () => {
    if (firstCheckbox || secondCheckbox) {
      setCheckboxes(true);
    } else {
      setCheckboxes(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Перевірка, чи всі поля заповнені
    if (
      name.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      confirmPassword.trim() === ''
    ) {
      toast.error('Please fill all fields');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    toast.error('Invalid email address');
    return;
  }

    if (checkboxes === false) {
      toast.error('Accept all the policies');
      return;
    }

    if (password.trim() !== confirmPassword.trim()) {
      toast.error('Passwords do not match');
      return;
    }

    setUserData({
      name,
      email,
      password,
    });
    // Future code for sending data to backend
    toggleModal();
    
  };

  return (
    <div className={css.modal_container}>
      <button type="button" onClick={toggleModal} className={css.close_modal_button}>
        <Icons icon={'cross'} />
      </button>
      <form action="/submit" method="post" onSubmit={handleSubmit} className={css.modal_form}>
        <h2 className={css.modal_register_text}>Register Individual Account!</h2>

        <label htmlFor="name" className={css.modal_input_label}>
          Your name*
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          className={css.modal_input}
          value={name}
          onChange={(e) => setName(e.target.value)}
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
              setFirstCheckbox(!firstCheckbox);
              handleCheckboxes();
            }}
          >
            <div className={css.svg_div}>
              <Icons icon={'check'} />
            </div>
          </button>
          <label htmlFor="agreement">
            I accept the Purchase Rules, User Agreements, and Privacy Policy conditions
          </label>
        </div>

        <div className={css.modal_checkbox_container}>
          <button
            type="button"
            className={`${css.modal_checkbox} ${secondCheckbox ? css.checked : ''}`}
            onClick={() => {
              setSecondCheckbox(!secondCheckbox);
              handleCheckboxes();
            }}
          >
            <div className={css.svg_div}>
              <Icons icon={'check'} />
            </div>
          </button>
          <label htmlFor="agreement" className={css.text}>
            I agree to receive emails about the new offers from HyggeHome
          </label>
        </div>

        <input type="submit" value="Create account" className={css.modal_create_button} />
      </form>
    </div>
  );
};
