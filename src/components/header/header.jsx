
import './header.css'
import logo from '../../assets/pictures/logo.png'

function Header() {
    return(
        <div className='header-container'>
            <img  className='header-img' src={logo} />
            <div className='header-container-right'>
                <p className='header-content'>
                    <span>Home</span> |
                    <span> About me</span> |
                    <span> Blogs</span> |
                    <span> Galery</span>
                    </p>
            </div>
        </div>
    )
}

export default Header