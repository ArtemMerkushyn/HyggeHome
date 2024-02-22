import { useState } from 'react';
import styles from './SliderNoArrow.module.css';

export const SliderNoArrow = ({data}) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleDotClick = (index) => {
        setSelectedImageIndex(index);
    }

    const productImgs = [
        data.image,
        'https://images.squarespace-cdn.com/content/v1/60411a8c24cd730f88e69740/1704923116876-P2JPUSIRZT48HFTPPZSC/Hygge_23_Jar+MockUp-Eucalyptus+Lavender.png',
        'https://images.squarespace-cdn.com/content/v1/60411a8c24cd730f88e69740/1704923862189-7IDAGHALJ8TK8RLM02B5/Hygge_23_Jar+MockUp-Sunday+Morning.png',
        'https://images.squarespace-cdn.com/content/v1/60411a8c24cd730f88e69740/1704922573056-ER7UDG642B5TVQJN28HP/Hygge_23_Jar+MockUp-Vanilla+Cashmere.png',
        'https://images.squarespace-cdn.com/content/v1/60411a8c24cd730f88e69740/1704924297087-7WHUEI23YDPC31KJ9FJV/Hygge_23_Jar+MockUp-Berries+N+Cream.png',
    ];

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
