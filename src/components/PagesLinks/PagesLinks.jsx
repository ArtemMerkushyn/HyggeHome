import { NavLink } from 'react-router-dom';

export const PagesLinks = () => {
    const activeStyles = {
        borderBottom: '2px solid #FCB654',
    }
    
    return (
        <div className='flex gap-7 text-lg'>
            <NavLink className='border-b-2 border-solid border-[transparent] transition-all duration-100 linear hover:border-b-2 hover:border-solid hover:border-[#FCB654]' style={({isActive}) => isActive ? activeStyles : undefined} to='/'>Home</NavLink>
            <NavLink className='border-b-2 border-solid border-[transparent] transition-all duration-100 linear hover:border-b-2 hover:border-solid hover:border-[#FCB654]' style={({isActive}) => isActive ? activeStyles : undefined} to='/candles'>Candles</NavLink>
            <NavLink className='border-b-2 border-solid border-[transparent] transition-all duration-100 linear hover:border-b-2 hover:border-solid hover:border-[#FCB654]' style={({isActive}) => isActive ? activeStyles : undefined} to='/lighting-decor'>Lighting Decor</NavLink>
            <NavLink className='border-b-2 border-solid border-[transparent] transition-all duration-100 linear hover:border-b-2 hover:border-solid hover:border-[#FCB654]' style={({isActive}) => isActive ? activeStyles : undefined} to='/gift-sets'>Gift sets</NavLink>
            <NavLink className='border-b-2 border-solid border-[transparent] transition-all duration-100 linear hover:border-b-2 hover:border-solid hover:border-[#FCB654]' style={({isActive}) => isActive ? activeStyles : undefined} to='/get-warm'>Get warm</NavLink>
            <NavLink className='border-b-2 border-solid border-[transparent] transition-all duration-100 linear hover:border-b-2 hover:border-solid hover:border-[#FCB654]' style={({isActive}) => isActive ? activeStyles : undefined} to='/table-games'>Table games</NavLink>
            <NavLink className='border-b-2 border-solid border-[transparent] transition-all duration-100 linear hover:border-b-2 hover:border-solid hover:border-[#FCB654]' style={({isActive}) => isActive ? activeStyles : undefined} to='/books-journals'>Books & Journals</NavLink>
        </div>
    );
}
