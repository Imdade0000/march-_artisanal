import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', role: 'buyer' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connecter à l'API backend
    console.log('Register:', form);
  };

  return (
    <div className="min-h-screen bg-[#F9F7F3] flex">

      {/* Panneau image — desktop uniquement */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=1200&q=80"
          alt="Tissu artisanal africain"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2A5944]/60 flex flex-col justify-end p-12">
          <Link to="/" className="font-serif text-3xl font-bold text-white mb-4 block">
            Marché<span className="text-[#DF9A3D]">Artisanal</span>
          </Link>
          <p className="text-[#EAE3DB] text-lg leading-relaxed max-w-sm">
            Créez votre boutique, exposez vos créations et développez votre activité artisanale.
          </p>
        </div>
      </div>

      {/* Formulaire */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">

          {/* Logo mobile */}
          <Link to="/" className="lg:hidden font-serif text-2xl font-bold text-[#3A2E2B] mb-8 block text-center">
            Marché<span className="text-[#C8553D]">Artisanal</span>
          </Link>

          <h1 className="font-serif text-4xl font-bold text-[#3A2E2B] mb-2">Créer un compte</h1>
          <p className="text-[#7A6A65] mb-8">
            Déjà inscrit ?{' '}
            <Link to="/login" className="text-[#C8553D] font-medium hover:underline">Se connecter</Link>
          </p>

          {/* Sélecteur de rôle */}
          <div className="flex rounded-lg border border-[#EAE3DB] overflow-hidden mb-6">
            <button
              type="button"
              onClick={() => setForm({ ...form, role: 'buyer' })}
              className={`flex-1 py-3 text-sm font-medium transition-colors ${form.role === 'buyer' ? 'bg-[#C8553D] text-white' : 'bg-white text-[#7A6A65] hover:text-[#3A2E2B]'}`}
            >
              Je suis acheteur
            </button>
            <button
              type="button"
              onClick={() => setForm({ ...form, role: 'seller' })}
              className={`flex-1 py-3 text-sm font-medium transition-colors ${form.role === 'seller' ? 'bg-[#2A5944] text-white' : 'bg-white text-[#7A6A65] hover:text-[#3A2E2B]'}`}
            >
              Je suis artisan
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#3A2E2B] mb-2">
                {form.role === 'seller' ? 'Nom de la boutique' : 'Nom complet'}
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={form.role === 'seller' ? 'Ex : Aminata Créations' : 'Votre nom complet'}
                required
                className="w-full border border-[#EAE3DB] bg-white rounded-lg px-4 py-3 text-[#3A2E2B] placeholder-[#7A6A65] focus:outline-none focus:border-[#C8553D] focus:ring-1 focus:ring-[#C8553D] transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#3A2E2B] mb-2">Adresse email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                required
                className="w-full border border-[#EAE3DB] bg-white rounded-lg px-4 py-3 text-[#3A2E2B] placeholder-[#7A6A65] focus:outline-none focus:border-[#C8553D] focus:ring-1 focus:ring-[#C8553D] transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#3A2E2B] mb-2">Numéro WhatsApp</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+221 77 123 45 67"
                required
                className="w-full border border-[#EAE3DB] bg-white rounded-lg px-4 py-3 text-[#3A2E2B] placeholder-[#7A6A65] focus:outline-none focus:border-[#C8553D] focus:ring-1 focus:ring-[#C8553D] transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#3A2E2B] mb-2">Mot de passe</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Minimum 8 caractères"
                  required
                  className="w-full border border-[#EAE3DB] bg-white rounded-lg px-4 py-3 pr-12 text-[#3A2E2B] placeholder-[#7A6A65] focus:outline-none focus:border-[#C8553D] focus:ring-1 focus:ring-[#C8553D] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7A6A65] hover:text-[#3A2E2B] transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <p className="text-xs text-[#7A6A65] pt-1">
              En créant un compte, vous acceptez nos{' '}
              <a href="#" className="text-[#C8553D] hover:underline">conditions d'utilisation</a>.
            </p>

            <button
              type="submit"
              className="w-full bg-[#C8553D] text-white py-4 rounded-lg font-medium text-base hover:bg-[#A84530] transition-colors mt-2"
            >
              Créer mon compte
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
