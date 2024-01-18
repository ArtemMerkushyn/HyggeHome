import { PagesLinks } from '../PagesLinks/PagesLinks';
import './Header.css';
import  Icons  from '../Icons/Icons.jsx';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className='flex justify-between items-center'>
            <Link className='logo flex gap-2.5' to='/'>
                <Icons icon={'logo'}/>
                <div>
                    <div>
                        <span className='orange'>H</span><span>y</span><span className='orange'>gg</span><span>e</span>
                    </div>
                    <div>
                        <span className='orange'>H</span><span>o</span><span className='orange'>m</span><span>e</span>
                    </div>
                </div>
            </Link>
            <div className='wrapper flex gap-7 items-center'>
                <PagesLinks/>
                <div className='flex gap-7 items-center'>
                    <Icons icon={'search'}/>
                    <Icons icon={'basket'}/>
                    <Icons icon={'user'}/>
                </div>
            </div>
        </header>
    );
}