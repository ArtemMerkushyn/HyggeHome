import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsActive } from "../../redux/searchSlice";

export const BooksJournals = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIsActive(false));
    }, [dispatch]);

    return (
        <div>BooksJournals</div>
    );
}
