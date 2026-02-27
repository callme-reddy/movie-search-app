import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Favourites from './pages/Favourites';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
