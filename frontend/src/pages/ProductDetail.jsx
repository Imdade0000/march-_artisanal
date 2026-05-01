import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MapPin, MessageCircle, Mail, ChevronRight } from 'lucide-react';
import Button from '../components/Button';

const product = {
  id: 1,
  name: "Collier en perles d'Ouidah",
  category: 'Bijoux',
  location: 'Cotonou, Bénin',
  price: '15 000',
  description: "Collier artisanal fabriqué à la main avec des perles traditionnelles de Ouidah. Chaque pièce est unique et porte l'héritage culturel du Bénin. Les perles sont soigneusement sélectionnées et enfilées selon les techniques ancestrales transmises de génération en génération.",
  images: [
    'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
  ],
  seller: {
    id: 1,
    name: 'Aminata Créations',
    location: 'Cotonou, Bénin',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80',
    productsCount: 34,
  },
  isNew: true,
  whatsapp: '22957003506',
};

const relatedProducts = [
  { id: 5, name: "Boucles d'oreilles en bronze", category: 'Bijoux', location: 'Lomé', price: '8 500', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80', isNew: false },
  { id: 2, name: 'Boubou brodé Bazin riche', category: 'Tissu & Mode', location: 'Dakar', price: '45 000', image: 'https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=600&q=80', isNew: false },
  { id: 4, name: 'Sac en cuir tanné végétal', category: 'Maroquinerie', location: 'Abidjan', price: '38 000', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80', isNew: true },
];

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  const handleWhatsApp = () => {
    const message = `Bonjour, je suis intéressé(e) par votre produit : "${product.name}" à ${product.price} FCFA. Pouvez-vous me donner plus d'informations ?`;
    window.open(`https://wa.me/${product.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-[#F9F7F3] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#7A6A65] mb-8">
          <Link to="/" className="hover:text-[#C8553D] transition-colors">Accueil</Link>
          <ChevronRight size={14} />
          <Link to="/catalogue" className="hover:text-[#C8553D] transition-colors">Catalogue</Link>
          <ChevronRight size={14} />
          <span className="text-[#3A2E2B] font-medium truncate">{product.name}</span>
        </nav>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

          {/* Photos */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden aspect-square bg-white border border-[#EAE3DB]">
              <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button key={i} onClick={() => setSelectedImage(i)}
                  className={`rounded-xl overflow-hidden w-24 h-24 flex-shrink-0 border-2 transition-all ${selectedImage === i ? 'border-[#C8553D]' : 'border-[#EAE3DB]'}`}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Infos */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#7A6A65]">{product.category}</span>
              {product.isNew && <span className="bg-[#DF9A3D] text-white text-xs font-bold px-2 py-1 rounded-md">Nouveau</span>}
            </div>

            <h1 className="font-serif text-3xl lg:text-4xl font-bold text-[#3A2E2B] leading-tight mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 text-[#7A6A65] text-sm mb-6">
              <MapPin size={14} />
              <span>{product.location}</span>
            </div>

            <p className="text-[#C8553D] font-bold text-3xl mb-6">{product.price} FCFA</p>

            {/* Bloc Vendeur */}
            <Link to={`/vendeur/${product.seller.id}`}
              className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#EAE3DB] mb-8 hover:border-[#C8553D] transition-colors">
              <img src={product.seller.avatar} alt={product.seller.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="font-medium text-[#3A2E2B]">{product.seller.name}</p>
                <p className="text-sm text-[#7A6A65]">{product.seller.productsCount} produits • {product.seller.location}</p>
              </div>
              <ChevronRight size={18} className="ml-auto text-[#7A6A65]" />
            </Link>

            {/* Description */}
            <div className="mb-8">
              <h3 className="font-serif font-semibold text-[#3A2E2B] text-lg mb-3">Description</h3>
              <p className="text-[#7A6A65] leading-relaxed">{product.description}</p>
            </div>

            {/* CTAs — desktop */}
            <div className="hidden lg:flex flex-col gap-3 mt-auto">
              <button onClick={handleWhatsApp}
                className="flex items-center justify-center gap-3 bg-[#C8553D] text-white py-4 rounded-xl font-medium text-lg hover:bg-[#A84530] transition-colors">
                <MessageCircle size={22} />
                Commander via WhatsApp
              </button>
              <button className="flex items-center justify-center gap-3 bg-[#2A5944] text-white py-3 rounded-xl font-medium hover:bg-[#1D4030] transition-colors">
                <Mail size={18} />
                Contacter par email
              </button>
            </div>
          </div>
        </div>

        {/* Produits similaires */}
        <div>
          <h2 className="font-serif text-3xl font-bold text-[#3A2E2B] mb-6">Vous aimerez aussi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/produit/${p.id}`}>
                <div className="bg-white rounded-xl border border-[#EAE3DB] overflow-hidden shadow-[0_4px_20px_rgba(58,46,43,0.05)] hover:shadow-[0_8px_30px_rgba(58,46,43,0.1)] transition-all duration-300 group">
                  <div className="aspect-[4/3] overflow-hidden bg-[#F9F7F3]">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-[#7A6A65] mb-1">{p.category} • {p.location}</p>
                    <p className="font-serif font-medium text-[#3A2E2B]">{p.name}</p>
                    <p className="text-[#C8553D] font-bold mt-2">{p.price} FCFA</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky CTA Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#EAE3DB] p-4 z-40">
        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 bg-[#2A5944] text-white py-3 rounded-xl font-medium hover:bg-[#1D4030] transition-colors">
            <Mail size={18} />Email
          </button>
          <button onClick={handleWhatsApp}
            className="flex-1 flex items-center justify-center gap-2 bg-[#C8553D] text-white py-3 rounded-xl font-medium hover:bg-[#A84530] transition-colors">
            <MessageCircle size={18} />WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
