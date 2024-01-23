import Button from "../Button/Button"
import css from "./SpecialOffer.module.css"
export const SpecialOffer = () => {

    return(
        <div className={css.special_offer_conatiner}>
            <ul className={css.special_offer_list}>
                <li>
                    <div className={css.special_offer_text_conatiner}>
                        <p className={css.special_offer_paragraph}>special offer</p>
                        <h2 className={css.special_offer_text}>Create your personal account now and get an incredible 30% discount</h2>
                    </div>
                    <Button text={'Create account'} />
                </li>
                <li>
                    <img src="images/hero/specialOffer/фотографія.png" className={css.special_offer_image}/>
                </li>
            </ul>
         </div>
    )
}