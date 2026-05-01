import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';

const categories = [
  { id: 1, name: 'Bijoux', icon: '💎', count: 48 },
  { id: 2, name: 'Tissu & Mode', icon: '👗', count: 73 },
  { id: 3, name: 'Poterie', icon: '🏺', count: 35 },
  { id: 4, name: 'Sculpture', icon: '🗿', count: 27 },
  { id: 5, name: 'Maroquinerie', icon: '👜', count: 52 },
  { id: 6, name: 'Peinture', icon: '🎨', count: 19 },
];

const featuredProducts = [
  { id: 1, name: 'Collier en perles d\'Ouidah', category: 'Bijoux', location: 'Cotonou', price: '15 000', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80', isNew: true },
  { id: 2, name: 'Boubou brodé Bazin riche', category: 'Tissu & Mode', location: 'Dakar', price: '45 000', image: 'https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=600&q=80', isNew: false },
  { id: 3, name: 'Jarre en terre cuite', category: 'Poterie', location: 'Bamako', price: '22 000', image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80', isNew: false },
  { id: 4, name: 'Sac en cuir tanné végétal', category: 'Maroquinerie', location: 'Abidjan', price: '38 000', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80', isNew: true },
];

const Home = () => {
  return (
    <div className="bg-[#F9F7F3]">

      {/* ========== HERO SECTION ========== */}
      <section className="bg-[#F9F7F3] pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Texte */}
            <div>
              <span className="inline-block bg-[#DF9A3D] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-md mb-5">
                Commerce Solidaire
              </span>
              <h1 className="font-serif text-5xl lg:text-6xl font-bold text-[#3A2E2B] leading-tight mb-6">
                L'artisanat africain à portée de main
              </h1>
              <p className="text-[#7A6A65] text-lg leading-relaxed mb-8 max-w-md">
                Découvrez et commandez directement auprès des artisans d'Afrique de l'Ouest. Des créations uniques, des savoir-faire authentiques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/catalogue">
                  <Button variant="primary" className="w-full sm:w-auto text-base px-8 py-4">
                    Découvrir le catalogue
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="ghost" className="w-full sm:w-auto text-base px-8 py-4">
                    Vendre mes créations
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-8 mt-10 pt-8 border-t border-[#EAE3DB]">
                <div><p className="font-serif text-3xl font-bold text-[#3A2E2B]">2 400+</p><p className="text-sm text-[#7A6A65]">Produits</p></div>
                <div className="w-px h-10 bg-[#EAE3DB]"></div>
                <div><p className="font-serif text-3xl font-bold text-[#3A2E2B]">380+</p><p className="text-sm text-[#7A6A65]">Artisans</p></div>
                <div className="w-px h-10 bg-[#EAE3DB]"></div>
                <div><p className="font-serif text-3xl font-bold text-[#3A2E2B]">8</p><p className="text-sm text-[#7A6A65]">Pays</p></div>
              </div>
            </div>
            {/* Image */}
            <div className="hidden lg:block relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-[#EAE3DB]">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80"
                  alt="Artisan au travail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-[0_8px_30px_rgba(58,46,43,0.1)] border border-[#EAE3DB]">
                <p className="text-sm text-[#7A6A65]">Commande récente</p>
                <p className="font-serif font-semibold text-[#3A2E2B]">Collier en perles</p>
                <p className="text-[#C8553D] font-bold">15 000 FCFA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CATEGORIES SECTION ========== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#7A6A65] text-sm uppercase tracking-widest font-medium mb-2">Explorer par</p>
            <h2 className="font-serif text-4xl font-bold text-[#3A2E2B]">Catégories</h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {categories.map(cat => (
              <Link
                key={cat.id}
                to={`/catalogue?category=${cat.name}`}
                className="flex flex-col items-center justify-center p-5 rounded-xl border border-[#EAE3DB] bg-[#F9F7F3] hover:border-[#C8553D] hover:bg-white transition-all duration-200 group text-center"
              >
                <span className="text-4xl mb-3">{cat.icon}</span>
                <span className="font-medium text-[#3A2E2B] text-sm group-hover:text-[#C8553D] transition-colors">{cat.name}</span>
                <span className="text-xs text-[#7A6A65] mt-1">{cat.count} articles</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURED PRODUCTS SECTION ========== */}
      <section className="py-16 bg-[#F9F7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-[#7A6A65] text-sm uppercase tracking-widest font-medium mb-2">Sélection du moment</p>
              <h2 className="font-serif text-4xl font-bold text-[#3A2E2B]">Produits en vedette</h2>
            </div>
            <Link to="/catalogue" className="hidden sm:block text-[#C8553D] font-medium hover:underline">
              Voir tout →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <Link key={product.id} to={`/produit/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
          <div className="sm:hidden text-center mt-8">
            <Link to="/catalogue">
              <Button variant="ghost">Voir tout le catalogue</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== CTA VENDEUR SECTION ========== */}
      <section className="py-24 bg-[#2A5944]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#DF9A3D] text-sm font-bold uppercase tracking-widest mb-4">Pour les Artisans</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6 max-w-2xl mx-auto">
            Exposez votre talent au monde entier
          </h2>
          <p className="text-[#EAE3DB] text-lg max-w-xl mx-auto mb-10">
            Créez votre boutique en ligne gratuitement, gérez votre catalogue et recevez des commandes directement via WhatsApp.
          </p>
          <Link to="/register">
            <Button variant="primary" className="text-base px-10 py-4">
              Créer ma boutique gratuite
            </Button>
          </Link>
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 mt-12">
            {[
              { icon: '📦', text: 'Catalogue produits illimité' },
              { icon: '💬', text: 'Commandes via WhatsApp' },
              { icon: '📊', text: 'Dashboard de gestion' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
