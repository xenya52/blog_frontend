import { Header,Footer } from './components/index.jsx';
import { AboutMe,
        Blogs,
        Error,
        Galery,
        Home} from './pages/index.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/'Component={Home} />
          <Route path='/AboutMe'Component={AboutMe} />
          <Route path='/Blogs'Component={Blogs} />
          <Route path='Blogs:id' />
          <Route path='/Galery'Component={Galery} />
          <Route path='*' Component={Error} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
