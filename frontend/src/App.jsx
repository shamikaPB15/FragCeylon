import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Products from './pages/Products/Products.jsx';
import Contact from './pages/Contact/Contact.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
