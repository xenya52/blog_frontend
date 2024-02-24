
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import React from 'react'

import './index.css'
import { AboutMe,
        Blogs,
        Galery,
        Home} from './pages/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/AboutMe',
    element: <AboutMe />
  },
  {
    path: '/Blogs',
    element: <Blogs />
  },
  {
    path: '/Galery',
    element: <Galery />
  },
  {
    path: '/Home',
    element: <Home />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
