import Header from './components/header';
import Footer from './components/footer';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Includes Popper.js as well

function App() {
  return (
    <div>
      <Header />
      <main>
        {/* Renders the matched route component */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
