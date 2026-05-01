import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#3A2E2B] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="font-serif text-2xl font-bold text-white mb-4 block">
              Marché<span className="text-[#C8553D]">Artisanal</span>
            </Link>
            <p className="text-[#EAE3DB] mt-4 max-w-sm">
              La plateforme de commerce solidaire qui met en lumière le savoir-faire unique des artisans d'Afrique de l'Ouest.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#DF9A3D]">Liens utiles</h4>
            <ul className="space-y-2">
              <li><Link to="/catalogue" className="text-[#EAE3DB] hover:text-white transition-colors">Catalogue</Link></li>
              <li><Link to="/vendeurs" className="text-[#EAE3DB] hover:text-white transition-colors">Nos Artisans</Link></li>
              <li><Link to="/login" className="text-[#EAE3DB] hover:text-white transition-colors">Espace Vendeur</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#DF9A3D]">Contact</h4>
            <ul className="space-y-2">
              <li className="text-[#EAE3DB]">Email : contact@marche-artisanal.com</li>
              <li className="text-[#EAE3DB]">WhatsApp : +221 77 123 45 67</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#7A6A65] mt-12 pt-8 text-center text-sm text-[#EAE3DB]">
          &copy; {new Date().getFullYear()} Marché Artisanal. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
