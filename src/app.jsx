//Components
import { Footer, Header } from './components/index.jsx';
//Test
import BlogPost from './pages/blogs/blog-index.jsx';
//Pages
import {AboutMe,
        Blogs,
        Error,
        Todos,
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
          {/* <Route path='blogs/:slug' component={BlogPost} /> */}
        </Route>
        <Route path='todos' component={Todos} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
 