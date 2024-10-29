import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <>
    <Header/>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </main>
    <Footer/>
    </>
  )
}

export default App
