import { useFormik } from 'formik';
import React, { useState } from 'react';
import MyInput from '../../UI/MyInput';
import Button from '../Button/Button';
import { formSchema } from '../../../schemas/formSchema';
import { useRegisterUserMutation } from '../../../redux/services';
import { toast } from 'react-toastify';
import css from './RegistrationForm.module.css'
import Icons from '../../Icons/Icons';


export const RegistrationForm = ({ toggleModal }) => {

  const [registerUser] = useRegisterUserMutation()

  const [firstCheckbox, setFirstCheckbox] = useState(false);
  const [secondCheckbox, setSecondCheckbox] = useState(false);
  const [passwordVisability, setPasswordVisability] = useState(false)
  const [confirmPasswordVisability, setConfirmPasswordVisability] = useState(false)


  const onSubmit = async (values) => {

    if (firstCheckbox === true){
    try {
      await registerUser({
          email: values.email,
          password: values.password,
          fullName: values.fullName,
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
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",

    }, 
    validationSchema: formSchema,
    onSubmit
  })


  

  return (
    <>
      <button
        type="button"
        onClick={toggleModal}
        className={css.close_modal_button}
      >
        <Icons icon={'cross'} />
      </button>
      
      <form onSubmit={handleSubmit} autoComplete='off'>

      <h2 className={css.modal_register_text}>
          Register Account
        </h2>

     <MyInput 
        type="text"
        id="name"
        placeholder="Your full name"
        name="fullName"
        labelFor="Your full name*"
        value={values.fullName}
        onChange={handleChange}
        onBlur={handleBlur}
        errorField={errors.fullName}
        touched={touched.fullName}
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
            type={confirmPasswordVisability ? "text" : "password"}
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
            onClick={() => setConfirmPasswordVisability(!confirmPasswordVisability)}
          >
            {confirmPasswordVisability ? <Icons icon={'eye'} /> : <Icons icon={'closed_eye'}/> }
          </button>
        </div>
        <ul className={css.agreement_list}>
          <li className={css.agreement}>
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
          </li>
          <li className={css.agreement}>
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
            </li>
        </ul>
        <Button 
        disabled={!firstCheckbox}
        text="Create account"
        style={{ width: '250px' }}
        type="submit" />
      </form>
      </>
  );
};
