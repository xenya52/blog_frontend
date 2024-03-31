
import './header.css'
import logo from '../../assets/pictures/logo.png'
import NavbarIcon from '../../assets/pictures/navbar.png'

import { Link } from 'wouter'
import { useState } from 'react'

function Header() {

    const [navContent, setNavContent] = useState('') //Want to use a string
    const [isNavVisible, setIsNavVisible] = useState(false);
    
    const handleNavBarClick = () => {
        setIsNavVisible(!isNavVisible)
        if(isNavVisible) {
            setNavContent(
                <>
                    <Link to='/'><button className='header-button'>Home</button></Link>|
                    <Link to='/AboutMe'><button className='header-button'>About me</button></Link>|
                    <Link to='/Blogs'><button className='header-button'>Blogs</button></Link>|
                    <Link to='/Galery'><button className='header-button'>Galery</button></Link>|
                    <Link to='/Todos'><button className='header-button'>Todos</button></Link>
                </>
            );
        } else {
            setNavContent('');
        }
    };

    return(
        <div className='header-container'>
                <img  className='header-img' src={logo} />
                    <div className='header-container-right'>
                        {navContent}
                        <img src={NavbarIcon} alt='navImg' onClick={handleNavBarClick} />
                    </div>
        </div>
    )
}

export default Header