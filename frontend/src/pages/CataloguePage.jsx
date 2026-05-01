import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { SlidersHorizontal, X } from 'lucide-react';

const allProducts = [
  { id: 1, name: "Collier en perles d'Ouidah", category: 'Bijoux', location: 'Cotonou', price: '15 000', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80', isNew: true },
  { id: 2, name: 'Boubou brodé Bazin riche', category: 'Tissu & Mode', location: 'Dakar', price: '45 000', image: 'https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=600&q=80', isNew: false },
  { id: 3, name: 'Jarre en terre cuite', category: 'Poterie', location: 'Bamako', price: '22 000', image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80', isNew: false },
  { id: 4, name: 'Sac en cuir tanné végétal', category: 'Maroquinerie', location: 'Abidjan', price: '38 000', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80', isNew: true },
  { id: 5, name: "Boucles d'oreilles en bronze", category: 'Bijoux', location: 'Lomé', price: '8 500', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80', isNew: false },
  { id: 6, name: 'Tableau peinture sur tissu', category: 'Peinture', location: 'Dakar', price: '55 000', image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80', isNew: true },
  { id: 7, name: "Sculpture en bois d'ébène", category: 'Sculpture', location: 'Abidjan', price: '75 000', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80', isNew: false },
  { id: 8, name: 'Sandales en cuir natron', category: 'Maroquinerie', location: 'Niamey', price: '18 000', image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&q=80', isNew: false },
  { id: 9, name: 'Tissage Kente traditionnel', category: 'Tissu & Mode', location: 'Accra', price: '62 000', image: 'https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=600&q=80', isNew: true },
];

const categories = ['Tous', 'Bijoux', 'Tissu & Mode', 'Poterie', 'Sculpture', 'Maroquinerie', 'Peinture'];
const locations = ['Dakar', 'Abidjan', 'Bamako', 'Cotonou', 'Lomé', 'Niamey', 'Accra'];
const priceRanges = [
  { label: 'Tous les prix', value: 'Tous' },
  { label: 'Moins de 10 000 FCFA', value: '0-10000' },
  { label: '10 000 – 30 000 FCFA', value: '10000-30000' },
  { label: '30 000 – 60 000 FCFA', value: '30000-60000' },
  { label: 'Plus de 60 000 FCFA', value: '60000+' },
];

const CataloguePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [priceRange, setPriceRange] = useState('Tous');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleLocation = (loc) =>
    setSelectedLocations(prev => prev.includes(loc) ? prev.filter(l => l !== loc) : [...prev, loc]);

  const filtered = allProducts.filter(p => {
    const catMatch = selectedCategory === 'Tous' || p.category === selectedCategory;
    const locMatch = selectedLocations.length === 0 || selectedLocations.includes(p.location);
    return catMatch && locMatch;
  });

  const FilterPanel = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-serif font-semibold text-[#3A2E2B] text-lg mb-4">Catégorie</h3>
        <div className="space-y-1">
          {categories.map(cat => (
            <button key={cat} onClick={() => setSelectedCategory(cat)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedCategory === cat ? 'bg-[#C8553D] text-white font-medium' : 'text-[#3A2E2B] hover:bg-[#F9F7F3]'}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-serif font-semibold text-[#3A2E2B] text-lg mb-4">Localisation</h3>
        <div className="space-y-2">
          {locations.map(loc => (
            <label key={loc} className="flex items-center gap-3 cursor-pointer text-sm text-[#3A2E2B]">
              <input type="checkbox" checked={selectedLocations.includes(loc)} onChange={() => toggleLocation(loc)} className="w-4 h-4 accent-[#C8553D] rounded" />
              {loc}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-serif font-semibold text-[#3A2E2B] text-lg mb-4">Prix</h3>
        <div className="space-y-2">
          {priceRanges.map(range => (
            <label key={range.value} className="flex items-center gap-3 cursor-pointer text-sm text-[#3A2E2B]">
              <input type="radio" name="price" value={range.value} checked={priceRange === range.value} onChange={() => setPriceRange(range.value)} className="w-4 h-4 accent-[#C8553D]" />
              {range.label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#F9F7F3] min-h-screen">
      <div className="bg-white border-b border-[#EAE3DB] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-[#3A2E2B]">Catalogue</h1>
          <p className="text-[#7A6A65] mt-2">{filtered.length} produits disponibles</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex md:hidden justify-between items-center mb-6">
          <p className="text-sm text-[#7A6A65]">{filtered.length} produits</p>
          <button onClick={() => setIsFilterOpen(true)} className="flex items-center gap-2 bg-white border border-[#EAE3DB] text-[#3A2E2B] px-4 py-2 rounded-lg">
            <SlidersHorizontal size={16} /><span className="text-sm font-medium">Filtres</span>
          </button>
        </div>

        <div className="flex gap-8">
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl border border-[#EAE3DB] p-6 sticky top-28">
              <FilterPanel />
            </div>
          </aside>

          <div className="flex-1">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map(product => (
                  <Link key={product.id} to={`/produit/${product.id}`}>
                    <ProductCard product={product} />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-6xl mb-4">🔍</p>
                <h3 className="font-serif text-2xl text-[#3A2E2B] mb-2">Aucun produit trouvé</h3>
                <p className="text-[#7A6A65]">Essayez de modifier vos filtres</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {isFilterOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsFilterOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-serif text-xl font-bold text-[#3A2E2B]">Filtres</h3>
              <button onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
            </div>
            <FilterPanel />
            <button onClick={() => setIsFilterOpen(false)} className="w-full mt-6 bg-[#C8553D] text-white py-3 rounded-lg font-medium">
              Appliquer les filtres
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CataloguePage;
