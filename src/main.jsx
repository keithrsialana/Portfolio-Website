import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Pages
import App from './App'
import Home from './pages/home'
import { StrictMode } from 'react'

// creates available paths
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // the component where the paths are rendered
    children: [
      { path: '/', element: <Home /> }
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
