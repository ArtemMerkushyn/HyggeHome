import css from "./Hero.module.css"

export const Hero = () => {
    return (
        <>
        <div className={css.heroTexDiv}>
            <h2 className={css.heroSloganText}>
            Take in the <span className={css.heroSpanText}>ambiance</span> of the calm 
            </h2>

            <p className={css.heroParagraphText}>Create coziness in every home with our unique products that reflect the aesthetics of Hygge. Find the perfect things that bring joy and comfort to your everyday life</p>
         </div>
            <img src="images/hero/Hero-people.png" alt="group-of-people" className={css.heroImage}></img>
        
        </>
    )
}