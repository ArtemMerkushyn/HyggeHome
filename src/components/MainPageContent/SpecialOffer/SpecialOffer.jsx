import Button from "../../UI/Button/Button"
import { RegistrationForm } from "../RegistrationForm/RegistrationForm"
import { Modal } from "../ModalWindow/Modal"
import css from "./SpecialOffer.module.css"
import { useState } from "react"



export const SpecialOffer = () => {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal);
        if (!modal) {
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = '15px';
        } else {
            document.body.style.overflow = 'auto';
            document.body.style.marginRight = '';
        }
    }
    const windowWidth = window.innerWidth;
    const picture = windowWidth <= 1157 && windowWidth >= 768 ? "images/hero/specialOffer/фотографія (1).png" : "images/hero/specialOffer/фотографія.png";


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
                {modal && (<Modal funcClick={toggleModal}><RegistrationForm toggleModal={toggleModal}/></Modal>)}
                <li>
                    <img src={picture} alt="cup of coffee" className={css.special_offer_image}/>
                </li>
            </ul>
         </div>
    )
}