
import './header.css'
import logo from '../../assets/pictures/logo.png'
import SpotifyIcon from './../../assets/pictures/icons/spotify.png'
import MastrodonIcon from '../../assets/pictures/icons/mastrodon.png'
import RedditIcon from '../../assets/pictures/icons/reddit.png'
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
                    </>);
            }    
            else {
                setRightNavContent('')
            }
        };
    return(
        <div className='header-container'>
                <Link to='/'><button className='header-button'>Home</button></Link>|
                <Link to='/AboutMe'><button className='header-button'>About me</button></Link>|
                <Link to='/Blogs'><button className='header-button'>Blogs</button></Link>|
        </div>
    )
}

export default Header