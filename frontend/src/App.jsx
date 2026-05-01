import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CataloguePage from './pages/CataloguePage';
import ProductDetail from './pages/ProductDetail';
import SellerProfile from './pages/SellerProfile';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

// Layout avec Navbar + Footer (pages publiques)
const PublicLayout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

// Layout sans Navbar/Footer (auth pages & dashboard)
const BlankLayout = ({ children }) => <>{children}</>;

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Pages publiques */}
        <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/catalogue" element={<PublicLayout><CataloguePage /></PublicLayout>} />
        <Route path="/produit/:id" element={<PublicLayout><ProductDetail /></PublicLayout>} />
        <Route path="/vendeur/:id" element={<PublicLayout><SellerProfile /></PublicLayout>} />

        {/* Dashboard vendeur */}
        <Route path="/dashboard" element={<BlankLayout><Dashboard /></BlankLayout>} />

        {/* Auth */}
        <Route path="/login" element={<BlankLayout><Login /></BlankLayout>} />
        <Route path="/register" element={<BlankLayout><Register /></BlankLayout>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
