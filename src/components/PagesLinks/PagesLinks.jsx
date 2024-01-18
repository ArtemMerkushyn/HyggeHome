import { NavLink } from 'react-router-dom';
import './PageLinks.css';

export const PagesLinks = () => {
    return (
        <div className='links flex gap-7 text-lg'>
            <NavLink to='/candles'>Candles</NavLink>
            <NavLink to='/lighting-decor'>Lighting Decor</NavLink>
            <NavLink to='/gift-sets'>Gift sets</NavLink>
            <NavLink to='/get-warm'>Get warm</NavLink>
            <NavLink to='/table-games'>Table games</NavLink>
            <NavLink to='/books-journals'>Books & Journals</NavLink>
        </div>
    );
}
