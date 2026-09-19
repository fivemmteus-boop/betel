import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Phone, Clock, MapPin } from 'lucide-react';
import { ESTABLISHMENT_CONFIG } from '../config/establishment';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatters';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, subtotal, setIsCartOpen } = useCart();

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Onde Estamos', href: '#localizacao' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-zinc-800/80 transition-all">
      {/* Top mini-bar with status and address */}
      <div className="hidden md:block bg-zinc-950/80 border-b border-zinc-800/50 py-1.5 text-xs text-zinc-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {ESTABLISHMENT_CONFIG.operatingHours.displayOpening}
            </span>
            <span className="text-zinc-600">•</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-red-500" />
              {ESTABLISHMENT_CONFIG.operatingHours.displaySchedule}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              {ESTABLISHMENT_CONFIG.address.neighborhood}, {ESTABLISHMENT_CONFIG.address.city}
            </span>
            <span className="text-zinc-600">•</span>
            <a
              href={`tel:${ESTABLISHMENT_CONFIG.phoneDisplay.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-1 text-zinc-300 hover:text-red-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              {ESTABLISHMENT_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#inicio');
            }}
            className="flex items-center gap-3 group"
            id="brand-logo-link"
          >
            {/* Custom stylized Burger / Betel icon */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-800 border border-red-500/40 flex items-center justify-center shadow-lg shadow-red-600/25 group-hover:scale-105 transition-transform">
              <span className="font-display text-3xl font-bold text-white tracking-wider">
                B
              </span>
            </div>
            <div>
              <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-wide text-white block leading-none">
                SANDUICHERIA <span className="text-red-500">BETEL</span>
              </span>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-zinc-400 block mt-0.5">
                Lanches Artesanais na Chapa
              </span>
            </div>
          </a>

          {/* Desktop Nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-zinc-300 hover:text-red-400 transition-colors cursor-pointer py-1"
                id={`nav-link-${link.href.replace('#', '')}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action buttons (Cart & Fazer Pedido) */}
          <div className="flex items-center gap-3">
            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2.5 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-red-600/70 text-zinc-100 px-3.5 py-2.5 rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
              aria-label="Abrir carrinho de compras"
              id="header-cart-button"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-red-500" />
                {totalItems > 0 && (
                  <span className="absolute -top-2.5 -right-2.5 bg-red-600 text-white font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse shadow-md">
                    {totalItems}
                  </span>
                )}
              </div>
              <div className="hidden sm:flex flex-col text-left text-xs leading-tight">
                <span className="text-zinc-400">Carrinho</span>
                <span className="font-bold text-red-400">
                  {totalItems > 0 ? formatCurrency(subtotal) : 'Vazio'}
                </span>
              </div>
            </button>

            {/* Desktop CTA */}
            <button
              onClick={() => handleNavClick('#cardapio')}
              className="hidden sm:inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow-md shadow-red-600/30 active:scale-95 cursor-pointer"
              id="header-cta-pedido"
            >
              Fazer Pedido
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-xl cursor-pointer"
              aria-label="Abrir menu de navegação"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950/98 border-b border-zinc-800 px-4 pt-3 pb-6 space-y-3 transition-all animate-fadeIn">
          <div className="p-3 bg-zinc-900/70 rounded-xl border border-zinc-800 flex items-center justify-between text-xs mb-3">
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
              {ESTABLISHMENT_CONFIG.operatingHours.displayOpening}
            </span>
            <span className="text-zinc-400">
              {ESTABLISHMENT_CONFIG.address.neighborhood}
            </span>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-base font-medium text-zinc-200 hover:text-red-400 py-2.5 px-3 rounded-lg hover:bg-zinc-900 transition-colors"
                id={`mobile-nav-${link.href.replace('#', '')}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('#cardapio');
              }}
              className="w-full text-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-3 rounded-xl text-base shadow-md cursor-pointer"
              id="mobile-nav-cta-pedido"
            >
              Ver Cardápio Completo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
