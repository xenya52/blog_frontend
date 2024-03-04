//Components
import { Footer, Header } from './components/index.jsx';
//Pages
import {AboutMe,
        Blogs,
        Error,
        Galery,
        Home} from './pages/index.jsx';
//External Libaries
import { Route, Switch } from 'wouter';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' component={Home} />
        <Route path='aboutMe' component={AboutMe} />
        <Route path='blogs' nest> 
          <Route path='/' component={Blogs} />
        </Route>
        <Route path='galery' nest>
          <Route path='/' component={Galery} />
        </Route>
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
