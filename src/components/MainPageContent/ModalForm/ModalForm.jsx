import { useFormik } from 'formik';
import React, { useState } from 'react';
import MyInput from '../../UI/MyInput';
import Button from '../Button/Button';
import { formSchema } from '../../../schemas/formSchema';
import { useRegisterUserMutation } from '../../../redux/services';
import { toast } from 'react-toastify';
import css from './ModalForm.module.css'
import Icons from '../../Icons/Icons';


export const ModalForm = ({ toggleModal }) => {

  const [registerUser] = useRegisterUserMutation()

  const [firstCheckbox, setFirstCheckbox] = useState(false);
  const [secondCheckbox, setSecondCheckbox] = useState(false);
  const [passwordVisability, setPasswordVisability] = useState(false)

  const onSubmit = async (values) => {

    if (firstCheckbox === true){
    try {
      await registerUser({
          email: values.email,
          password: values.password,
          first: values.firstName,
          last: values.lastName,
          promo: secondCheckbox,
      });

    } catch (error) {
      toast.error('Failed to register user. Please try again later.');
    }
    toggleModal();
      toast.success('User registered successfully');
    } else {
      toast.error('Please accept the policy')
    }
  }

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",

    }, 
    validationSchema: formSchema,
    onSubmit
  })


  

  return (
    <div className={css.modal_container}>
      <button
        type="button"
        onClick={toggleModal}
        className={css.close_modal_button}
      >
        <Icons icon={'cross'} />
      </button>
      
      <form onSubmit={handleSubmit} autoComplete='off'>

      <h2 className={css.modal_register_text}>
          Register Individual Account!
        </h2>

     <MyInput 
        type="text"
        id="first-name"
        placeholder="Your first name"
        name="firstName"
        labelFor="Your first name*"
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        errorField={errors.firstName}
        touched={touched.firstName}
        />

     <MyInput 
        type="text"
        id="last-name"
        name="lastName"
        placeholder="Your last name"
        labelFor="Your last name*"
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
        errorField={errors.lastName}
        touched={touched.lastName}
        />

     <MyInput 
        type="text"
        id="email"
        name="email"
        placeholder="Your email" 
        labelFor="Your Email*"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        errorField={errors.email}
        touched={touched.email}
        />

      <div className={css.hide_password}>  
          <MyInput 
            type={passwordVisability ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Password"
            labelFor="Create password*"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            errorField={errors.password}
            touched={touched.password}
            />
          <button
            className={css.hide_password_button}
            type='button'
            onClick={() => setPasswordVisability(!passwordVisability)}
          >
            {passwordVisability ? <Icons icon={'eye'} /> : <Icons icon={'closed_eye'}/> }
          </button>
        </div>

        <div className={css.hide_password}>
          <MyInput 
            type={passwordVisability ? "text" : "password"}
            id="confirm-password"
            name="confirmPassword"
            placeholder="Password" 
            labelFor="Confirm the password*"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            errorField={errors.confirmPassword}
            touched={touched.confirmPassword}
          />
          <button
            className={css.hide_password_button}
            type='button'
            onClick={() => setPasswordVisability(!passwordVisability)}
          >
            {passwordVisability ? <Icons icon={'eye'} /> : <Icons icon={'closed_eye'}/> }
          </button>
        </div>

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
        disabled={!firstCheckbox}
        text="Create account"
        style={{ width: '340.8px', marginTop: '3px' }}
        type="submit" />
      </form>
    </div>
  );
};
