import { useState } from 'react';
import styles from './NewCollection.module.css'
import Icons from '../../Icons/Icons';
import card from './db.json'
import { NewCollectionItem } from '../NewCollectionItem.jsx/NewCollectionItem';

export const NewCollection = () => {

    const widthScroll = 634; //.scroll {width: 634px;}
    const widthScrollNav = 634 / (card.length - 2); //.scroll {width: 634px;}
    const widthSlide = 412 + 30; //.slide {width: 412px; gap: 30px;}
    //const widthList = (images.length * (widthSlide) -30);
    const listPositionEndPointNext = -(widthSlide * (card.length - 4));
    const listPositionEndPointPrev = -(widthSlide * (card.length - 2));

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
                {card.map((image, index) => (
                    <NewCollectionItem image={image} key={index} index={index}/>
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

