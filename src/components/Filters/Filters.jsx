import { useState } from 'react';
import Button from '../MainPageContent/Button/Button';
import styles from './Filters.module.css';
import { InputRange }from '../InputRange/InputRange.jsx';

const colors = ['blue', 'green', 'grey', 'red', 'black', 'purple', 'yellow', 'pink'];

export default function Filters() {
    const [ openFilter, setOpenFilter ] = useState(false);
    const [selectedColors, setSelectedColors] = useState({
        'blue': true,
        'green': false,
        'grey': false,
        'red': false,
        'black': false,
        'purple': false,
        'yellow': false,
        'pink': true,
    });

    const handleItemChange = (color) => {
        setSelectedColors((prevColors) => ({
            ...prevColors,
            [color]: !prevColors[color],
        }));
    };

    return (
        <div className={styles.wrapper}>
            {openFilter ? (<Button text={'Close filters'} funcClick={() => setOpenFilter(false)}/>) : (<Button text={'Open filters'} funcClick={() => setOpenFilter(true)}/>)}
            <div 
                className={styles.filterWrapper} 
                style={{
                    opacity: openFilter ? 1 : 0,
                    visibility: openFilter ? 'visible' : 'hidden',
                    transition: 'opacity 0.2s linear, visibility 0.2s linear',
                }}
                >
                <h5>Price range:</h5>
                <InputRange maxValue={200}/>
                <div className={styles.colorFilters}>
                    <h5>Color:</h5>
                    <div className={styles.wrapperLabels}>
                        <div>
                            {colors.slice(0, 4).map((color) => (
                                <label key={color}>
                                    <span className={selectedColors[color] ? `${styles.check} ${styles.active}` : styles.check}></span>
                                    <input
                                        className={styles.checkBox}
                                        type="checkbox"
                                        onChange={() => handleItemChange(color)}
                                        checked={selectedColors[color]}
                                    />
                                    {color.charAt(0).toUpperCase() + color.slice(1)}
                                </label>
                            ))}
                        </div>
                        <div>
                            {colors.slice(4, 8).map((color) => (
                                <label key={color}>
                                    <span className={selectedColors[color] ? `${styles.check} ${styles.active}` : styles.check}></span>
                                    <input
                                        className={styles.checkBox}
                                        type="checkbox"
                                        onChange={() => handleItemChange(color)}
                                        checked={selectedColors[color]}
                                    />
                                    {color.charAt(0).toUpperCase() + color.slice(1)}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <Button text={'Apply'} funcClick={() => setOpenFilter(false)}/>
            </div>
        </div>
    );
}