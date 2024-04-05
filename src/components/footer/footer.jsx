
import './footer.css'
import logo from '../../assets/pictures/logo.png'

function Footer() {
    return(
        <div className='footer-container'>
            <p className='header content'>
                <img src={logo} alt='logo'/>
                <span>2024 Lucy's blog</span> 
            </p>
        </div>
    )
}

export default Footer