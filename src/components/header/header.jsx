
import './header.css'
import logo from '../../assets/pictures/logo.png'
import { Link } from 'react-router-dom'

function Header() {
    return(
        <div className='header-container'>
            <Link to='/'><img  className='header-img' src={logo} /></Link>
            <div className='header-container-right'>
                <p className='header-content'>
                    <Link to='/Home'><button className='header-button'>Home</button></Link>|
                    <Link to='/AboutMe'><button className='header-button'>About me</button></Link>|
                    <Link to='/Blogs'><button className='header-button'>Blogs</button></Link>|
                    <Link to='/Galery'><button className='header-button'>Galery</button></Link>
                    </p>
            </div>
        </div>
    )
}

export default Header