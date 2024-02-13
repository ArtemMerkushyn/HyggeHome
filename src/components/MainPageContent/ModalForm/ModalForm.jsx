import React, { useState } from 'react';
import css from './ModalForm.module.css';
import Icons from '../../Icons/Icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../Button/Button';
import MyInput from '../../UI/MyInput';
import { useRegisterUserMutation } from '../../../redux/services';

export const ModalForm = ({ toggleModal }) => {
  const [firstCheckbox, setFirstCheckbox] = useState(false);
  const [secondCheckbox, setSecondCheckbox] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registerUser] = useRegisterUserMutation();

  const handleButton = () => {
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

    if (!firstCheckbox) {
      toast.error('Accept the policy');
      return false;
    }

    if (password.trim() !== confirmPassword.trim()) {
      toast.error('Passwords do not match');
      return false;
    }

    return true;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (handleButton()) {
      const newUser = {
        firstName,
        lastName,
        email,
        password,
      };
      try {
        await registerUser({
          email: newUser.email,
          password: newUser.password,
          first: newUser.firstName,
          last: newUser.lastName,
        });
        toggleModal();
        toast.success('User registered successfully');
      } catch (error) {
        toast.error('Failed to register user. Please try again later.');
      }
    }
  };
  return (
    <div className={css.modal_container}>
      <button
        type="button"
        onClick={toggleModal}
        className={css.close_modal_button}
      >
        <Icons icon={'cross'} />
      </button>
      <form
        action="/submit"
        method="post"
        onSubmit={handleSubmit}
        className={css.modal_form}
      >
        <h2 className={css.modal_register_text}>
          Register Individual Account!
        </h2>

        <MyInput
          type="text"
          id="first-name"
          name="first-name"
          placeholder="Your first name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          labelFor="Your first name*"
        />

        <MyInput
          type="text"
          id="last-name"
          name="last-name"
          placeholder="Your last name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          labelFor="Your last name*"
        />

        <MyInput
          type="text"
          id="email"
          name="email"
          placeholder="Your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          labelFor="Your Email*"
        />

        <MyInput
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          labelFor="Create password*"
        />

        <MyInput
          type="password"
          id="confirm-password"
          name="confirm-password"
          placeholder="Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          labelFor="Confirm the password*"
        />

        <div className={css.modal_checkbox_container}>
          <button
            type="button"
            className={`${css.modal_checkbox} ${
              firstCheckbox ? css.checked : ''
            }`}
            onClick={() => {
              setFirstCheckbox(prev => !prev);
            }}
          >
            <div className={css.svg_div}>
              <Icons icon={'check'} />
            </div>
          </button>
          <label htmlFor="agreement" className={css.agreement_text}>
            I accept the Purchase Rules, User Agreements, and Privacy Policy
            conditions
          </label>
        </div>

        <div className={css.modal_checkbox_container}>
          <button
            type="button"
            className={`${css.modal_checkbox} ${
              secondCheckbox ? css.checked : ''
            }`}
            onClick={() => {
              setSecondCheckbox(prev => !prev);
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

        <Button
          text="Create account"
          style={{ width: '426px', heigth: '46px' }}
          type="submit"
        />
      </form>
    </div>
  );
};
