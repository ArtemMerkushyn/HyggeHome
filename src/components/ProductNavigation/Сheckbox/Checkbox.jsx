import { useState } from 'react';
import styles from './Checkbox.module.css'

export default function Checkbox({ label }) {
    const [isChecked, setIsChecked] = useState(true);

    return (
        <>
            <input 
                className={styles.checkbox}
                checked={isChecked} 
                id="myCheckbox"        
                type="checkbox"
                onChange={() => setIsChecked((prev) => !prev)}         
            />
            <label className={styles.answer} for="myCheckbox">{ label }              
            </label>
        </>
    );
}
