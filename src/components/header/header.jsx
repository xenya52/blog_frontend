
import './header.css'
import logo from '../../assets/pictures/logo.png'
import { Link } from 'wouter'

function Header() {
    return(
        <div className='header-container'>
            <header>
                <img  className='header-img' src={logo} />
                <div className='header-container-right'>
                    <p className='header-content'>
                        <Link to='/'><button className='header-button'>Home</button></Link>|
                        <Link to='/AboutMe'><button className='header-button'>About me</button></Link>|
                        <Link to='/Blogs'><button className='header-button'>Blogs</button></Link>|
                        <Link to='/Galery'><button className='header-button'>Galery</button></Link>|
                        <Link to='/Events'><button className='header-button'>Events</button></Link>
                    </p>
                </div>
            </header>
        </div>
    )
}

export default Header