
import { Header, Footer } from './components/index'
import './app.css'
import { Button } from 'react-bootstrap'

function App() {
  return (
      <div className='App'>
      <Header />
      <Button>Click me</Button>
      <Footer />
    </div>
  )
}

export default App
