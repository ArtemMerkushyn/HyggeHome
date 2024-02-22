import { useState } from 'react';
import styles from './SliderNoArrow.module.css';

export const SliderNoArrow = ({data}) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleDotClick = (index) => {
        setSelectedImageIndex(index);
    }

    return (
        <div className={styles.slider}>
            <div className={styles.dots}>
                {data.image.map((img, index) => {
                    return (
                        <div key={index} className={styles.dot} onClick={() => handleDotClick(index)}>
                            <img src={img} alt={index + 1} />
                        </div>
                    );
                })}
            </div>
            <div className={styles.img}>
                {data.image.map((img, index) => {
                    return (
                        <img 
                            key={index}
                            src={img}
                            alt={index + 1}
                            style={{ 
                                opacity: index === selectedImageIndex ? 1 : 0,
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}
