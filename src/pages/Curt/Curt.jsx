import { Link } from 'react-router-dom';
import styles from './Curt.module.css';
import Button from '../../components/MainPageContent/Button/Button';
import { CurtItem } from './CurtItem/CurtItem';
import { NewCollection } from '../../components/MainPageContent/secondMainContent/NewCollection';
import { useGetCandlesQuery } from '../../redux/services';
import { useEffect, useState } from 'react';

export const Curt = () => {
    const { data, isLoading } = useGetCandlesQuery();
    const [loadedData, setLoadedData] = useState([]);

    useEffect(() => {
        if (!isLoading && data) {
            setLoadedData(data);
        }
    }, [data, isLoading]);
    
    const handlerClick = () => {
        console.log('ok');
    }

    const curtArr = [
        {
            image: ['https://raw.githubusercontent.com/DanyloFrolov/HyggeHomeP/main/Honey%20Bourbon.png'],
            name: 'The Little Book of Hygge',
            price: '10',
            amount: 2,
        },
        {
            image: ['https://raw.githubusercontent.com/DanyloFrolov/HyggeHomeP/main/Honey%20Bourbon.png'],
            name: 'The Little Book of Hygge',
            price: '20',
            amount: 6,
        },
        {
            image: ['https://raw.githubusercontent.com/DanyloFrolov/HyggeHomeP/main/Honey%20Bourbon.png'],
            name: 'The Little Book of Hygge',
            price: '30',
            amount: 11,
        },
    ];

    return (
        <div style={{marginBottom: '120px'}}>
            <div className={styles.nav}>
                <div className={styles.nav__item}>
                    <Link to={'/wish'}>Your wish list</Link>
                </div>
                <div className={styles.nav__item}>
                    <span>Your cart</span>
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.sections}>
                <div className={styles.sections__item} style={{maxWidth: '191px', width: '100%'}}></div>
                <div className={styles.sections__item} style={{maxWidth: '412px', width: '100%'}}>Product</div>
                <div className={styles.sections__item} style={{maxWidth: '191px', width: '100%'}}>Price</div>
                <div className={styles.sections__item} style={{maxWidth: '191px', width: '100%'}}>QTY</div>
                <div className={styles.sections__item} style={{maxWidth: '191px', width: '100%'}}>Total</div>
            </div>
            <div className={styles.wrapper}>
                {curtArr.map((product, index) => (
                    <CurtItem key={index} productData={product}/>
                ))}
            </div>
            <div className={styles.btn}><Button text={'Next step'} funcClick={handlerClick}/></div>
            <NewCollection
                sliderNeeded={false}
                catalog={loadedData} 
                upperText='products for you' 
                lowerText='You might also like'
            />
        </div>
    );
}
