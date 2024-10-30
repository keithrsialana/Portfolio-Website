import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Pages
import App from './App'
import Home from './pages/home'
import AboutMe from './pages/aboutMe'
import { StrictMode } from 'react'

// creates available paths
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // the component where the paths are rendered
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <AboutMe /> }
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
