
import './footer.css'
import logo from '../../assets/pictures/logo.png'
import SpotifyIcon from './../../assets/pictures/icons/spotify.png'
import MastrodonIcon from '../../assets/pictures/icons/mastrodon.png'
import RedditIcon from '../../assets/pictures/icons/reddit.png'


function Footer() {
    return(
        <div className='footer-container'>
            <p>
                <img src={logo} alt='logo'/>
                <span>2024 Lucy's blog</span> 
                <a href='https://open.spotify.com/user/31hc5ssgze7rvkelwfz42phzyoeu'>
                    <img src={SpotifyIcon} alt='SpotifyIcon' />
                </a>
                <a href='https://elk.zone/chaos.social/@xenya52'>
                    <img src={MastrodonIcon} alt='MastrodonIcon' />
                </a>
                <a href='https://www.reddit.com/user/Xennox666/'>
                    <img src={RedditIcon} alt='RedditIcon' />
                </a>
            </p>
        </div>
    )
}

export default Footer