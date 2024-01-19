import { MainCarousel } from "../MainCarousel/MainCarousel"
import css from "./NewCollection.module.css"
export const NewCollection = () => {
    return(
        <div className={css.new_collection_div}>
            <div className={css.new_collection_text_div}>
        <p className={css.newCollection}>New collection</p>
        <h2 className={css.newCollectionParagraph}>New Hygge goods for comfort</h2>
        </div>
        <MainCarousel/>
        </div>
    )
}