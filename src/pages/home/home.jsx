import AxiosCallRequest from '../../request'
import { SpotifyDisplay } from '../../components'
import './home.css'

function Home() {
    return(
        <div className='welcome-text-container'>
            <h1 className='topic-h1-headline'>Welcome to my blog</h1>
            <p className='welcome-text'>Its very chaotic</p>
            <SpotifyDisplay />
        </div>
    )
}

export default Home