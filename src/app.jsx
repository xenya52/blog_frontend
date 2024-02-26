
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Background from './assets/pictures/testBackground.png'
import './app.css'

function App() {
  return (
      <div className='App'>
      <Header />
      <div className='welcome-text-container'>
        <h1 className='topic-h1-headline'>Welcome to my blog</h1>
        <p className='welcome-text'>Its very chaotic</p>
      </div>  
      <Footer />
    </div>
  )
}

export default App
