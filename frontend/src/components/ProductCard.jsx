import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl border border-[#EAE3DB] overflow-hidden shadow-[0_4px_20px_rgba(58,46,43,0.05)] hover:shadow-[0_8px_30px_rgba(58,46,43,0.1)] transition-all duration-300 flex flex-col cursor-pointer group">
      {/* Image Container (Ratio 4:3 ou 1:1) */}
      <div className="relative aspect-[4/3] bg-[#F9F7F3] overflow-hidden">
        <img 
          src={product.image || "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.isNew && (
          <span className="absolute top-3 right-3 bg-white text-[#3A2E2B] text-xs font-bold px-2 py-1 rounded-md">
            Nouveau
          </span>
        )}
      </div>
      
      {/* Infos */}
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-[#7A6A65] text-sm mb-1 font-sans">{product.category} • {product.location}</span>
        <h3 className="font-serif text-[#3A2E2B] text-lg font-medium leading-tight mb-2">{product.name}</h3>
        <p className="text-[#C8553D] font-sans font-bold text-lg mt-auto">{product.price} FCFA</p>
      </div>
    </div>
  );
};

export default ProductCard;
