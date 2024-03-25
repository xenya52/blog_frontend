//Components
import { Footer, Header } from './components/index.jsx';
//Test
import BlogPost from './pages/blogs/blog-post.jsx';
//Pages
import {AboutMe,
        Blogs,
        Error,
        Events,
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
          <Route path='blogs/:slug' component={BlogPost} />
        </Route>
        <Route path='galery' nest>
          <Route path='/' component={Galery} />
        </Route>
        <Route path='events' component={Events} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
 