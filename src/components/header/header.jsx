
import './header.css'
import logo from '../../assets/pictures/logo.png'
import SpotifyIcon from './../../assets/pictures/icons/spotify.png'
import MastrodonIcon from '../../assets/pictures/icons/mastrodon.png'
import NavRightIcon from '../../assets/pictures/navbar.png'

import { Link } from 'wouter'
import { useState } from 'react'

function Header() {

    const [rightNavContent, setRightNavContent] = useState('') //Want to use a string
    const [isRightNavVisible, setIsRightNavVisible] = useState(false)
    
    const [leftNavContent, setLeftNavContent] = useState('')
    const [isLeftNavVisible, setIsLeftNavVisible] = useState(false)

    const handleRightNavIconClick = () => {
        setIsRightNavVisible(!isRightNavVisible)
            if(isRightNavVisible) {
                setRightNavContent(<>
                        <Link to='/'><button className='header-button'>Home</button></Link>|
                        <Link to='/AboutMe'><button className='header-button'>About me</button></Link>|
                        <Link to='/Blogs'><button className='header-button'>Blogs</button></Link>|
                        <Link to='/Todos'><button className='header-button'>Todos</button></Link>
                    </>);
            }    
            else {
                setRightNavContent('')
            }
        };
    const handleLeftNavIconClick = () => {
        setIsLeftNavVisible(!isLeftNavVisible)
        if(isLeftNavVisible) {
            setLeftNavContent(<>
                <a href='https://open.spotify.com/user/31hc5ssgze7rvkelwfz42phzyoeu'>
                    <img src={SpotifyIcon} alt='SpotifyIcon' />
                </a>
                <a href='https://elk.zone/chaos.social/@xenya52'>
                    <img src={MastrodonIcon} alt='MastrodonIcon' />
                </a>
            </>)
        }
        else {
            setLeftNavContent('')
        }
    }
    return(
        <div className='header-container'>
                <img src={logo} alt='logo' onClick={handleLeftNavIconClick}/>
                {leftNavContent}
                <div className='header-container-right'>
                    {rightNavContent}
                    <img src={NavRightIcon} alt='navImg' onClick={handleRightNavIconClick}/>
                </div>
        </div>
    )
}

export default Header