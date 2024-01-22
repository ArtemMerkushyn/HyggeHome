import { useState } from 'react';
import styles from './NewCollection.module.css'
import Icons from '../../Icons/Icons';

export const NewCollection = () => {
    const images = [
        'https://content.rozetka.com.ua/goods/images/big/371973845.jpg',
        'https://content2.rozetka.com.ua/goods/images/big/371973810.jpg',
        'https://content.rozetka.com.ua/goods/images/big/313435771.jpg',
        'https://content.rozetka.com.ua/goods/images/big/371973845.jpg',
        'https://content2.rozetka.com.ua/goods/images/big/371973810.jpg',
        'https://content.rozetka.com.ua/goods/images/big/313435771.jpg',
        'https://content2.rozetka.com.ua/goods/images/big/371973810.jpg',
    ];

    const widthScroll = 634; //.scroll {width: 634px;}
    const widthScrollNav = 634 / (images.length - 2); //.scroll {width: 634px;}
    const widthSlide = 412 + 30; //.slide {width: 412px; gap: 30px;}
    //const widthList = (images.length * (widthSlide) -30);
    const listPositionEndPointNext = -(widthSlide * (images.length - 4));
    const listPositionEndPointPrev = -(widthSlide * (images.length - 2));

    const [listPosition, setListPosition] = useState(0);
    const [scrollBarPosition, setScrollBarPosition] = useState(0);

    const handleNext = () => {
        if(listPosition < listPositionEndPointNext) {
            setListPosition(widthSlide);
            setScrollBarPosition(-`${widthScrollNav}`);
        };
        setListPosition((prevPosition) => prevPosition - (widthSlide));
        setScrollBarPosition((prevPosition) => prevPosition + (widthScrollNav));
        console.log(listPositionEndPointNext)
    }
    const handlePrev = () => {
        if(listPosition > (-`${widthSlide}`)) {
            setListPosition(listPositionEndPointPrev);
            setScrollBarPosition(widthScroll);
        }
        setListPosition((prevPosition) => prevPosition + (widthSlide));
        setScrollBarPosition((prevPosition) => prevPosition - (widthScrollNav));
        console.log(listPosition)
    }

    return (
        <div className={styles.wrapper}>
            <h5 className={styles.new_collection_text}>New collection</h5>
            <h3 className={styles.new_collection_goods_text}>New Hygge goods for comfort</h3>
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
                <div className={styles.left_arrow}>
                <Icons icon={'right_arrow'} />
                </div>

                </button>
                <button className={styles.next} onClick={handleNext}>
                    <div className={styles.right_arrow}> <Icons icon={'right_arrow'}/> </div>
                </button>
            </div>


            <div className={styles.scroll}>
                <div className={styles.scrollnav} style={{ transform: `translateX(${scrollBarPosition}px)`, width: `${widthScrollNav}px` }}></div>
            </div>
        </div>
    );
}

