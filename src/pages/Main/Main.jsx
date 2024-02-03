import { useDispatch } from "react-redux";
import { Hero } from "../../components/MainPageContent/Hero/Hero";
import { SpecialOffer } from "../../components/MainPageContent/SpecialOffer/SpecialOffer";
import { NewCollection } from "../../components/MainPageContent/secondMainContent/NewCollection";
import { useEffect } from "react";
import { setIsActive } from "../../redux/searchSlice";

export const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIsActive(false));
    }, [dispatch]);
    
    return (
        <div>
            <Hero/>
            <NewCollection/>
            <SpecialOffer/>
        </div>
    );
}