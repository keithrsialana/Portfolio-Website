import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Pages
import App from './App'
import Home from './pages/home'
import Contact from './pages/contact'
import Portfolio from './pages/portfolio'
import Resume from './pages/resume'
import { StrictMode } from 'react'

// creates available paths
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // the component where the paths are rendered
    children: [
      { path: '/', element: <Home /> },
      { path: '/portfolio', element: <Portfolio /> },
      { path: '/contact', element: <Contact /> },
      { path: '/resume', element: <Resume /> }
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
