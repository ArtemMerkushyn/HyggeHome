import { Link } from 'react-router-dom';
import styles from './Wish.module.css';
import { useEffect, useState } from 'react';
import { useGetCandlesQuery } from '../../redux/services';
import { NewCollection } from '../../components/MainPageContent/secondMainContent/NewCollection';

export const Wish = () => {
    const { data, isLoading } = useGetCandlesQuery();
    const [loadedData, setLoadedData] = useState([]);

    useEffect(() => {
        if (!isLoading && data) {
            setLoadedData(data);
        }
    }, [data, isLoading]);

    return (
        <div className={styles.wish}>
            <div className={styles.nav}>
                <div className={styles.nav__item}>
                    <span>Your wish list</span>
                </div>
                <div className={styles.nav__item}>
                    <Link to={'/curt'}>Your cart</Link>
                </div>
            </div>
            <div className={styles.line}></div>
            <NewCollection
                sliderNeeded={false}
                catalog={loadedData} 
                upperText='products for you' 
                lowerText='You might also like'
            />
        </div>
    );
}
