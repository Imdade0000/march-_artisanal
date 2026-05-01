import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#F9F7F3] border-b border-[#EAE3DB] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-serif text-2xl font-bold text-[#3A2E2B]">
              Marché<span className="text-[#C8553D]">Artisanal</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/catalogue" className="text-[#3A2E2B] hover:text-[#C8553D] font-medium transition-colors">
              Catalogue
            </Link>
            <Link to="/vendeurs" className="text-[#3A2E2B] hover:text-[#C8553D] font-medium transition-colors">
              Nos Artisans
            </Link>
            <Link to="/login" className="text-[#7A6A65] hover:text-[#3A2E2B] font-medium transition-colors">
              Connexion
            </Link>
            <Link to="/register" className="bg-[#2A5944] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#1D4030] transition-colors">
              Devenir Vendeur
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#3A2E2B] hover:text-[#C8553D] focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#EAE3DB]">
          <div className="px-4 pt-2 pb-6 space-y-4 shadow-lg">
            <Link to="/catalogue" className="block text-[#3A2E2B] font-medium py-2">Catalogue</Link>
            <Link to="/vendeurs" className="block text-[#3A2E2B] font-medium py-2">Nos Artisans</Link>
            <Link to="/login" className="block text-[#7A6A65] font-medium py-2">Connexion</Link>
            <Link to="/register" className="block bg-[#2A5944] text-white text-center px-5 py-3 rounded-lg font-medium mt-4">
              Devenir Vendeur
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
