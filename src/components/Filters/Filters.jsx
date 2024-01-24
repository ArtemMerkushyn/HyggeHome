import { useEffect, useState } from 'react';
import Button from '../MainPageContent/Button/Button';
import styles from './Filters.module.css';
import ReactSlider from 'react-slider';

const colors = ['blue', 'green', 'grey', 'red', 'black', 'purple', 'yellow', 'pink'];

export default function Filters() {
    const [ openFilter, setOpenFilter ] = useState(false);
    const [priceRange, setPriceRange] = useState([20, 50]);
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
    const [activeCheckBox, setActiveCheckBox] = useState(false);

    const handlePriceChange = (value) => {
        setPriceRange(value);
    };

    const handleInputChange = (e, index) => {
        const value = parseInt(e.target.value);
        const newRange = [...priceRange];
        newRange[index] = value;

        //if (index === 0 && value >= newRange[1]) {}
        
        //if (index === 1 && value <= newRange[0]) {}

        setPriceRange(newRange); 
    };

    const handleItemChange = (color) => {
        setSelectedColors((prevColors) => ({
            ...prevColors,
            [color]: !prevColors[color],
        }));
        setActiveCheckBox(!selectedColors[color]);
    };

    const renderThumb = (props, state) => {
        return (
            <div {...props}>
                <div className={styles.thumbValue}>{state.valueNow}</div>
            </div>
        );
    };

    return (
        <div className={styles.wrapper}>
            {openFilter ? (<Button text={'Close filters'} funcClick={() => setOpenFilter(false)}/>) : (<Button text={'Open filters'} funcClick={() => setOpenFilter(true)}/>)}
            <div 
                className={styles.filterWrapper} 
                style={{ 
                    transform: openFilter ? 'scale(1)' : 'scale(0)',
                    top:  openFilter ? '54px' : '-90px',
                    left: openFilter ? '0px' : '-70px',
                }}
                >
                <h5>Price range:</h5>
                <ReactSlider
                    className={styles['horizontal-slider']}
                    thumbClassName={styles['example-thumb']}
                    trackClassName={styles['example-track']}
                    value={priceRange}
                    ariaLabel={['Lower thumb', 'Upper thumb']}
                    ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                    renderThumb={renderThumb}
                    pearling
                    minDistance={7}
                    min={20}
                    max={100}
                    onChange={handlePriceChange}
                />
                <div className={styles.priceInputs}>
                    <input 
                        type="number" 
                        value={priceRange[0]} 
                        onChange={(e) => handleInputChange(e, 0)} 
                        className={priceRange[0] >= priceRange[1] ? styles.invalidInput : ''}
                    />
                    <input 
                        type="number" 
                        value={priceRange[1]} 
                        onChange={(e) => handleInputChange(e, 1)} 
                        className={priceRange[1] <= priceRange[0] ? styles.invalidInput : ''}
                    />
                </div>
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
            </div>
        </div>
    );
}
