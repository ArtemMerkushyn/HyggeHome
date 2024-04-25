import React from 'react';
import css from './WishListModal.module.css'
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import WishListModalItem from '../WishListModalItem/WishListModalItem'
import Icons from '../Icons/Icons';

const WIshListModal = ({toggleAction}) => {
    const favoriteList = useSelector(selectFavorites)
    console.log(favoriteList)
    
    return (
        
        <div className={css.container}>
            <div className={css.infoContainer}>
                <h2 className={css.headedText}>
                    Your wish list
                </h2>
                <button className={css.closeModal} onClick={() => toggleAction(false)}>
                    <Icons icon={'cross'}/>
                </button>
                </div>
            <ul className={css.itemList}>
                {favoriteList.length !== 0 ? favoriteList.map((item, index) => (
            <WishListModalItem key={index} item={item} toggleAction={toggleAction}/>
                ))
                    :
                    <li>
                        <h3>There are no items yet...</h3>
                    </li>
            }
            </ul>
        </div>
    );
};

export default WIshListModal;