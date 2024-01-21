import { useState } from 'react';
import styles from './MySlider.module.css'

export const MySlider = () => {
    const images = [
        'https://content.rozetka.com.ua/goods/images/big/371973845.jpg',
        'https://content2.rozetka.com.ua/goods/images/big/371973810.jpg',
        'https://content.rozetka.com.ua/goods/images/big/313435771.jpg',
        'https://content.rozetka.com.ua/goods/images/big/371973845.jpg',
        'https://content2.rozetka.com.ua/goods/images/big/371973810.jpg',
        'https://content.rozetka.com.ua/goods/images/big/313435771.jpg',
        'https://content2.rozetka.com.ua/goods/images/big/371973810.jpg',
    ];

    const [listPosition, setListPosition] = useState(0);
    const [scrollBarPosition, setScrollBarPosition] = useState(0);

    const handleNext = () => {
        if(listPosition < -1326) {
            setListPosition(442);
            setScrollBarPosition(-126.8);
        };
        setListPosition((prevPosition) => prevPosition - (412 + 30));
        setScrollBarPosition((prevPosition) => prevPosition + (126.8));
    }
    const handlePrev = () => {
        if(listPosition > -442) {
            setListPosition(-2210);
            setScrollBarPosition(634);
        }
        setListPosition((prevPosition) => prevPosition + (412 + 30));
        setScrollBarPosition((prevPosition) => prevPosition - (126.8));
    }

    return (
        <div className={styles.wrapper}>
            <h5>New collection</h5>
            <h3>New Hygge goods for comfort</h3>
            <div 
                className={styles.list}
                style={{ left: `${listPosition}px` }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={styles.slide}
                    >
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>


            <div className={styles.arrows}>
                <button className={styles.prev} onClick={handlePrev}>
                    &lt;
                </button>
                <button className={styles.next} onClick={handleNext}>
                    &gt;
                </button>
            </div>


            <div className={styles.scroll}>
                <div className={styles.scrollnav} style={{ transform: `translateX(${scrollBarPosition}px)` }}></div>
            </div>
        </div>
    );
}

