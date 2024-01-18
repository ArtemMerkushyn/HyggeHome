import { PagesLinks } from '../PagesLinks/PagesLinks';
import styles from './Header.module.css';
import  Icons  from '../Icons/Icons.jsx';
import { Link } from 'react-router-dom';

export const Header = () => {
    const logoStyles = {
        fontFamily: 'DM Mono',
    }

    return (
        <header className='flex justify-between items-center'>
            <Link className='flex gap-2.5' to='/'>
                <Icons icon={'logo'} style={{ width: '88px', height: '60px' }}/>
                <div className='text-2xl' style={logoStyles}>
                    <div className='text-my-red'>
                        <span className='text-color-my-yellow'>H</span><span>y</span><span className='text-color-my-yellow'>gg</span><span>e</span>
                    </div>
                    <div>
                        <span className='text-color-my-yellow'>H</span><span>o</span><span className='text-color-my-yellow'>m</span><span>e</span>
                    </div>
                </div>
            </Link>
            <div className={styles.wrapper}>
                <PagesLinks/>
                <div className='flex gap-7 items-center'>
                    <Icons style={{fill: '#FCB654'}} icon={'search'}/>
                    <Icons icon={'basket'}/>
                    <Icons icon={'user'}/>
                </div>
            </div>
        </header>
    );
}