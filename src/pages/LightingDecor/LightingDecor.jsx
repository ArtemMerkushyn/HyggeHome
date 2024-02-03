import { useEffect } from "react";
import { setIsActive } from "../../redux/searchSlice";
import { useDispatch } from "react-redux";

export const LightingDecor = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIsActive(false));
    }, [dispatch]);
    return (
        <div>LightingDecor</div>
    );
}
