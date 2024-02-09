import React from 'react';
import css from './MyInput.module.css'

const MyInput = (props) => {
    const { labelFor, ...inputProps } = props;
    return (
        <div>
            <label className={css.modal_input_label}>
                {labelFor}
            </label>
            <input className={css.modal_input} {...inputProps}/> 
        </div>
    );
};

export default MyInput;
