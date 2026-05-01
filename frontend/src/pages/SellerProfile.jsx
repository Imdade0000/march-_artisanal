import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { MapPin, MessageCircle } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const seller = {
  id: 1,
  name: 'Aminata Créations',
  location: 'Cotonou, Bénin',
  avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&q=80',
  cover: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80',
  bio: "Artisane passionnée depuis plus de 15 ans, je crée des bijoux et ornements traditionnels qui racontent l'histoire de notre culture béninoise. Chaque pièce est faite à la main avec des matériaux locaux soigneusement sélectionnés.",
  productsCount: 34,
  whatsapp: '22997123456',
};

const sellerProducts = [
  { id: 1, name: "Collier en perles d'Ouidah", category: 'Bijoux', location: 'Cotonou', price: '15 000', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80', isNew: true },
  { id: 5, name: "Boucles d'oreilles en bronze", category: 'Bijoux', location: 'Cotonou', price: '8 500', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80', isNew: false },
  { id: 10, name: 'Bracelet en corail', category: 'Bijoux', location: 'Cotonou', price: '12 000', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80', isNew: false },
  { id: 11, name: 'Pendentif bronze Yoruba', category: 'Bijoux', location: 'Cotonou', price: '6 500', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80', isNew: true },
];

const SellerProfile = () => {
  const { id } = useParams();

  return (
    <div className="bg-[#F9F7F3] min-h-screen">

      {/* Cover + Avatar */}
      <div className="relative">
        <div className="h-56 lg:h-72 w-full overflow-hidden bg-[#EAE3DB]">
          <img src={seller.cover} alt="Couverture" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col sm:flex-row sm:items-end sm:gap-6 -mt-12 mb-8">
            <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl overflow-hidden border-4 border-white shadow-[0_8px_30px_rgba(58,46,43,0.1)] flex-shrink-0 bg-[#EAE3DB]">
              <img src={seller.avatar} alt={seller.name} className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 sm:mt-0 sm:mb-2 flex-1">
              <h1 className="font-serif text-3xl font-bold text-[#3A2E2B]">{seller.name}</h1>
              <div className="flex items-center gap-2 text-[#7A6A65] text-sm mt-1">
                <MapPin size={14} /><span>{seller.location}</span>
                <span className="mx-2">•</span>
                <span>{seller.productsCount} produits</span>
              </div>
            </div>
            <a
              href={`https://wa.me/${seller.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 sm:mt-0 sm:mb-2 flex items-center gap-2 bg-[#C8553D] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#A84530] transition-colors self-start sm:self-auto"
            >
              <MessageCircle size={18} />Contacter
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Bio */}
        <div className="bg-white rounded-xl border border-[#EAE3DB] p-6 mb-10 max-w-3xl">
          <h2 className="font-serif text-xl font-semibold text-[#3A2E2B] mb-3">À propos</h2>
          <p className="text-[#7A6A65] leading-relaxed">{seller.bio}</p>
        </div>

        {/* Produits du vendeur */}
        <div>
          <h2 className="font-serif text-3xl font-bold text-[#3A2E2B] mb-6">
            Catalogue de {seller.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sellerProducts.map(product => (
              <Link key={product.id} to={`/produit/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
