import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard, Package, ShoppingCart, Settings,
  LogOut, Plus, Eye, Pencil, Trash2, Menu, X
} from 'lucide-react';

const stats = [
  { label: 'Produits actifs', value: '34', icon: '📦', color: '#2A5944' },
  { label: 'Commandes reçues', value: '128', icon: '🛒', color: '#C8553D' },
  { label: 'Vues ce mois', value: '1 420', icon: '👁️', color: '#DF9A3D' },
  { label: 'En attente', value: '5', icon: '⏳', color: '#7A6A65' },
];

const products = [
  { id: 1, name: "Collier en perles d'Ouidah", category: 'Bijoux', price: '15 000', stock: 8, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=100&q=80' },
  { id: 2, name: 'Boucles en bronze', category: 'Bijoux', price: '8 500', stock: 15, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=100&q=80' },
  { id: 3, name: 'Bracelet en corail', category: 'Bijoux', price: '12 000', stock: 5, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=100&q=80' },
];

const orders = [
  { id: '#0041', product: "Collier en perles d'Ouidah", client: 'Fatou Diallo', date: '28 Apr 2026', status: 'En attente' },
  { id: '#0040', product: 'Boucles en bronze', client: 'Kofi Mensah', date: '27 Apr 2026', status: 'Livré' },
  { id: '#0039', product: 'Bracelet en corail', client: 'Amara Touré', date: '25 Apr 2026', status: 'Confirmé' },
];

const statusColor = {
  'En attente': 'bg-[#DF9A3D] text-white',
  'Confirmé': 'bg-[#2A5944] text-white',
  'Livré': 'bg-[#EAE3DB] text-[#3A2E2B]',
};

const navLinks = [
  { icon: LayoutDashboard, label: 'Vue générale', id: 'overview' },
  { icon: Package, label: 'Mes produits', id: 'products' },
  { icon: ShoppingCart, label: 'Commandes', id: 'orders' },
  { icon: Settings, label: 'Paramètres', id: 'settings' },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const Sidebar = () => (
    <aside className="flex flex-col h-full bg-white border-r border-[#EAE3DB] w-64 flex-shrink-0">
      <div className="p-6 border-b border-[#EAE3DB]">
        <Link to="/" className="font-serif text-xl font-bold text-[#3A2E2B]">
          Marché<span className="text-[#C8553D]">Artisanal</span>
        </Link>
        <p className="text-xs text-[#7A6A65] mt-1">Espace Vendeur</p>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navLinks.map(({ icon: Icon, label, id }) => (
          <button key={id} onClick={() => { setActiveTab(id); setSidebarOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-left ${activeTab === id ? 'bg-[#C8553D] text-white' : 'text-[#3A2E2B] hover:bg-[#F9F7F3]'}`}>
            <Icon size={18} />{label}
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-[#EAE3DB]">
        <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-[#7A6A65] hover:bg-[#F9F7F3] transition-colors">
          <LogOut size={18} />Se déconnecter
        </Link>
      </div>
    </aside>
  );

  return (
    <div className="flex h-screen bg-[#F3F0EB] overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col"><Sidebar /></div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="relative flex flex-col h-full"><Sidebar /></div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white border-b border-[#EAE3DB] px-6 py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-[#3A2E2B]" onClick={() => setSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            <h1 className="font-serif text-xl font-bold text-[#3A2E2B]">
              {navLinks.find(n => n.id === activeTab)?.label}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80" alt="Avatar" className="w-9 h-9 rounded-full object-cover" />
            <span className="hidden sm:block text-sm font-medium text-[#3A2E2B]">Aminata Créations</span>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">

          {/* ======= VUE GÉNÉRALE ======= */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-white rounded-xl border border-[#EAE3DB] p-5 shadow-[0_4px_20px_rgba(58,46,43,0.05)]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl">{stat.icon}</span>
                    </div>
                    <p className="font-serif text-3xl font-bold text-[#3A2E2B]">{stat.value}</p>
                    <p className="text-sm text-[#7A6A65] mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Dernières commandes */}
              <div className="bg-white rounded-xl border border-[#EAE3DB] overflow-hidden">
                <div className="px-6 py-4 border-b border-[#EAE3DB] flex justify-between items-center">
                  <h2 className="font-serif font-semibold text-[#3A2E2B] text-lg">Dernières commandes</h2>
                  <button onClick={() => setActiveTab('orders')} className="text-sm text-[#C8553D] font-medium">Voir tout</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#F9F7F3] border-b border-[#EAE3DB]">
                        <th className="text-left px-6 py-3 text-[#7A6A65] font-medium">Commande</th>
                        <th className="text-left px-6 py-3 text-[#7A6A65] font-medium hidden sm:table-cell">Client</th>
                        <th className="text-left px-6 py-3 text-[#7A6A65] font-medium hidden md:table-cell">Date</th>
                        <th className="text-left px-6 py-3 text-[#7A6A65] font-medium">Statut</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map(order => (
                        <tr key={order.id} className="border-b border-[#EAE3DB] last:border-0">
                          <td className="px-6 py-4 font-medium text-[#3A2E2B]">{order.id}</td>
                          <td className="px-6 py-4 text-[#7A6A65] hidden sm:table-cell">{order.client}</td>
                          <td className="px-6 py-4 text-[#7A6A65] hidden md:table-cell">{order.date}</td>
                          <td className="px-6 py-4">
                            <span className={`text-xs font-bold px-3 py-1 rounded-full ${statusColor[order.status]}`}>{order.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ======= PRODUITS ======= */}
          {activeTab === 'products' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <p className="text-[#7A6A65] text-sm">{products.length} produits</p>
                <button className="flex items-center gap-2 bg-[#C8553D] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#A84530] transition-colors">
                  <Plus size={16} />Ajouter un produit
                </button>
              </div>
              <div className="bg-white rounded-xl border border-[#EAE3DB] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#F9F7F3] border-b border-[#EAE3DB]">
                        <th className="text-left px-6 py-3 text-[#7A6A65] font-medium">Produit</th>
                        <th className="text-left px-6 py-3 text-[#7A6A65] font-medium hidden sm:table-cell">Catégorie</th>
                        <th className="text-left px-6 py-3 text-[#7A6A65] font-medium">Prix</th>
                        <th className="text-left px-6 py-3 text-[#7A6A65] font-medium hidden md:table-cell">Stock</th>
                        <th className="text-left px-6 py-3 text-[#7A6A65] font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map(p => (
                        <tr key={p.id} className="border-b border-[#EAE3DB] last:border-0">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <img src={p.image} alt={p.name} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                              <span className="font-medium text-[#3A2E2B] truncate max-w-[140px]">{p.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-[#7A6A65] hidden sm:table-cell">{p.category}</td>
                          <td className="px-6 py-4 text-[#C8553D] font-bold">{p.price} FCFA</td>
                          <td className="px-6 py-4 text-[#7A6A65] hidden md:table-cell">{p.stock}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button className="p-2 text-[#7A6A65] hover:text-[#2A5944] transition-colors"><Eye size={16} /></button>
                              <button className="p-2 text-[#7A6A65] hover:text-[#C8553D] transition-colors"><Pencil size={16} /></button>
                              <button className="p-2 text-[#7A6A65] hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ======= COMMANDES ======= */}
          {activeTab === 'orders' && (
            <div className="bg-white rounded-xl border border-[#EAE3DB] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#F9F7F3] border-b border-[#EAE3DB]">
                      <th className="text-left px-6 py-3 text-[#7A6A65] font-medium">ID</th>
                      <th className="text-left px-6 py-3 text-[#7A6A65] font-medium">Produit</th>
                      <th className="text-left px-6 py-3 text-[#7A6A65] font-medium hidden sm:table-cell">Client</th>
                      <th className="text-left px-6 py-3 text-[#7A6A65] font-medium hidden md:table-cell">Date</th>
                      <th className="text-left px-6 py-3 text-[#7A6A65] font-medium">Statut</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map(order => (
                      <tr key={order.id} className="border-b border-[#EAE3DB] last:border-0">
                        <td className="px-6 py-4 font-medium text-[#3A2E2B]">{order.id}</td>
                        <td className="px-6 py-4 text-[#3A2E2B] truncate max-w-[120px]">{order.product}</td>
                        <td className="px-6 py-4 text-[#7A6A65] hidden sm:table-cell">{order.client}</td>
                        <td className="px-6 py-4 text-[#7A6A65] hidden md:table-cell">{order.date}</td>
                        <td className="px-6 py-4">
                          <span className={`text-xs font-bold px-3 py-1 rounded-full ${statusColor[order.status]}`}>{order.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ======= PARAMÈTRES (placeholder) ======= */}
          {activeTab === 'settings' && (
            <div className="bg-white rounded-xl border border-[#EAE3DB] p-8 text-center">
              <p className="text-5xl mb-4">⚙️</p>
              <h3 className="font-serif text-2xl text-[#3A2E2B]">Paramètres</h3>
              <p className="text-[#7A6A65] mt-2">Fonctionnalité bientôt disponible.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
