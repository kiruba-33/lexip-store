import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layout
import MobileNavbar from './components/layout/MobileNavbar';
import DesktopNavbar from './components/layout/DesktopNavbar';
import BottomNavigation from './components/layout/BottomNavigation';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Shop from './pages/Shop/Shop';
import Contact from './pages/Contact/Contact';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Terms from './pages/Policies/Terms';
import Privacy from './pages/Policies/Privacy';
import ReturnPolicy from './pages/Policies/ReturnPolicy';
import Profile from './pages/Profile/Profile';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
        <MobileNavbar />
        <DesktopNavbar />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="/privacy-and-policy" element={<Privacy />} />
            <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />
            <Route path="/privacy" element={<Navigate to="/privacy-and-policy" replace />} />
            <Route path="/return-policy" element={<ReturnPolicy />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>

        <Footer />
        <BottomNavigation />
      </div>
    </BrowserRouter>
  );
}

export default App;