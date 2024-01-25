import styles from './NewCollectionItem.module.css'

export const NewCollectionItem = ({image, index}) => {
    return(
        <div
                        key={index}
                        className={styles.slide}
                    >
                        <img src={image.image} alt={`Slide ${index + 1}`} className={styles.new_c_image}/>
                        <img src={image.picture} alt={`Slide ${index + 1}`} className={styles.new_c_picture}/>
                        
                    </div>
    )
}