import Button from "../Button/Button"
import { Modal } from "../ModalWindow/Modal"
import css from "./SpecialOffer.module.css"
import { useState } from "react"



export const SpecialOffer = () => {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
        console.log(modal)
    }

    return(
        <div className={css.special_offer_conatiner}>
            <ul className={css.special_offer_list}>
                <li>
                    <div className={css.special_offer_text_conatiner}>
                        <p className={css.special_offer_paragraph}>special offer</p>
                        <h2 className={css.special_offer_text}>Create your personal account now and get an incredible 30% discount</h2>
                    </div>
                    <Button text={'Create account'} funcClick={toggleModal}/>
                </li>
                {modal && (<Modal funcClick={toggleModal}/>)}
                <li>
                    <img src="images/hero/specialOffer/фотографія.png" className={css.special_offer_image}/>
                </li>
            </ul>
         </div>
    )
}