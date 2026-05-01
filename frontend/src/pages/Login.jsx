import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connecter à l'API backend
    console.log('Login:', form);
  };

  return (
    <div className="min-h-screen bg-[#F9F7F3] flex">

      {/* Panneau image — desktop uniquement */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80"
          alt="Artisanat africain"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#3A2E2B]/50 flex flex-col justify-end p-12">
          <Link to="/" className="font-serif text-3xl font-bold text-white mb-4 block">
            Marché<span className="text-[#C8553D]">Artisanal</span>
          </Link>
          <p className="text-[#EAE3DB] text-lg leading-relaxed max-w-sm">
            Rejoignez notre communauté d'artisans et de passionnés d'artisanat africain authentique.
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

          <h1 className="font-serif text-4xl font-bold text-[#3A2E2B] mb-2">Connexion</h1>
          <p className="text-[#7A6A65] mb-8">
            Pas encore de compte ?{' '}
            <Link to="/register" className="text-[#C8553D] font-medium hover:underline">S'inscrire</Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
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
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-[#3A2E2B]">Mot de passe</label>
                <a href="#" className="text-sm text-[#7A6A65] hover:text-[#C8553D] transition-colors">Mot de passe oublié ?</a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
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

            <button
              type="submit"
              className="w-full bg-[#C8553D] text-white py-4 rounded-lg font-medium text-base hover:bg-[#A84530] transition-colors mt-2"
            >
              Se connecter
            </button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 border-t border-[#EAE3DB]"></div>
            <span className="text-xs text-[#7A6A65]">ou</span>
            <div className="flex-1 border-t border-[#EAE3DB]"></div>
          </div>

          <Link
            to="/register"
            className="block w-full text-center border border-[#EAE3DB] bg-white text-[#3A2E2B] py-3 rounded-lg font-medium hover:border-[#C8553D] transition-colors"
          >
            Créer un compte vendeur
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
