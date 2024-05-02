//Components
import { Footer, Header } from './components/index.jsx';
//Pages
import {AboutMe,
        Blogs,
        BlogArticel,
        Error,
        Todos,
        TodoPostEdit,
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
          <Route path='/:slug' component={BlogArticel} />
        </Route>
        <Route path='todos' nest> 
          <Route path='/' component={Todos} />
          <Route path='/:slug' component={TodoPostEdit} />
        </Route>
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
 