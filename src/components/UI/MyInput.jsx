import React from 'react';
import css from './MyInput.module.css'

const MyInput = (props) => {
    const { touched, errorField, labelFor, ...inputProps} = props;
    return (
        <div className={css.input_container}>
            <label className={css.modal_input_label}>
                {labelFor}
            </label>
            <input 
                className={`${errorField && touched ? css.input_error : ""} ${css.modal_input} `} 
                {...inputProps}
            /> 
            {errorField && touched && <p className={css.error}>{errorField}</p>}
        </div>
    );
};

export default MyInput;
