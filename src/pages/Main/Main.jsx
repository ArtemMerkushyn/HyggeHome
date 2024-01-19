import { Hero } from "../../components/MainPageContent/Hero/Hero";
import { SpecialOffer } from "../../components/MainPageContent/SpecialOffer/SpecialOffer";
import { NewCollection } from "../../components/MainPageContent/secondMainContent/NewCollection";

export const Main = () => {
    return (
        <div>
            <Hero/>
            <NewCollection/>
            <SpecialOffer/>
        </div>
    );
}