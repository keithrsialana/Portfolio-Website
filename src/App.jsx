import Header from './components/header';
import Footer from './components/footer';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Includes Popper.js as well
import './styles/main.css';
import './styles/myStyles.css';

function App() {
  return (
    <div>
      <Header />
      <main className='bg-yale'>
        {/* Renders the matched route component */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
