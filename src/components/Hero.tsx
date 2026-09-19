import React from 'react';
import { Star, Utensils, Bike, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { ESTABLISHMENT_CONFIG } from '../config/establishment';
import { useCart } from '../context/CartContext';

export const Hero: React.FC = () => {
  const { setIsCartOpen } = useCart();

  const scrollToMenu = () => {
    const el = document.querySelector('#cardapio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24 bg-gradient-to-b from-black via-zinc-950 to-black"
    >
      {/* Red ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 sm:w-[650px] h-96 sm:h-[450px] bg-red-650/12 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-red-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 bg-zinc-900/90 border border-red-600/30 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-red-400 shadow-inner">
              <Sparkles className="w-4 h-4 text-red-500" />
              <span>Genuíno sabor artesanal em Aparecida de Goiânia</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              O sabor que faz{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-rose-400">
                você voltar!
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-zinc-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Sanduíches caprichados, ingredientes selecionados e aquele sabor que transforma qualquer fome em uma experiência inesquecível.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={scrollToMenu}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-lg shadow-red-600/30 hover:shadow-red-600/50 active:scale-98 cursor-pointer"
                id="hero-btn-cardapio"
              >
                <span>Ver Cardápio</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900/90 hover:bg-zinc-850 text-zinc-100 hover:text-red-400 border border-zinc-800 hover:border-red-600/50 font-semibold px-8 py-4 rounded-xl text-base transition-all cursor-pointer"
                id="hero-btn-fazer-pedido"
              >
                <span>Fazer Pedido</span>
              </button>
            </div>

            {/* Quick Informational Badges requested in briefing */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-zinc-950/80 border border-zinc-800/80 rounded-xl p-3 flex flex-col items-center lg:items-start text-center lg:text-left transition-colors hover:border-red-600/30">
                <div className="flex items-center gap-1 text-red-400 font-bold text-base">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{ESTABLISHMENT_CONFIG.rating}</span>
                </div>
                <span className="text-[12px] text-zinc-400 mt-0.5">
                  {ESTABLISHMENT_CONFIG.reviewCount} avaliações
                </span>
              </div>

              <div className="bg-zinc-950/80 border border-zinc-800/80 rounded-xl p-3 flex flex-col items-center lg:items-start text-center lg:text-left transition-colors hover:border-red-600/30">
                <div className="flex items-center gap-1.5 text-zinc-200 font-semibold text-sm">
                  <Utensils className="w-4 h-4 text-red-500" />
                  <span>Sanduíches</span>
                </div>
                <span className="text-[12px] text-zinc-400 mt-0.5">
                  & Hambúrgueres
                </span>
              </div>

              <div className="bg-zinc-950/80 border border-zinc-800/80 rounded-xl p-3 flex flex-col items-center lg:items-start text-center lg:text-left transition-colors hover:border-red-600/30">
                <div className="flex items-center gap-1.5 text-zinc-200 font-semibold text-sm">
                  <Bike className="w-4 h-4 text-emerald-400" />
                  <span>Delivery</span>
                </div>
                <span className="text-[12px] text-zinc-400 mt-0.5">
                  Sem contato
                </span>
              </div>

              <div className="bg-zinc-950/80 border border-zinc-800/80 rounded-xl p-3 flex flex-col items-center lg:items-start text-center lg:text-left transition-colors hover:border-red-600/30">
                <div className="flex items-center gap-1.5 text-zinc-200 font-semibold text-sm">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>Aparecida</span>
                </div>
                <span className="text-[12px] text-zinc-400 mt-0.5">
                  Goiânia Park Sul
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: High Quality Mouth-Watering Burger Hero Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative framing element */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/30 to-red-900/30 rounded-3xl blur-xl" />

              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
                {/* Hero burger photo */}
                <div className="aspect-[4/3] sm:aspect-[1/1] overflow-hidden relative group">
                  <img
                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop"
                    alt="Hambúrguer artesanal caprichado da Sanduicheria Betel"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* Featured Floating Badge */}
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                    O Supremo da Casa
                  </div>

                  {/* Bottom overlay inside image */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/90 backdrop-blur-md border border-zinc-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-red-400 font-bold uppercase tracking-wider block">
                          Destaque Especial
                        </span>
                        <h2 className="text-lg font-bold text-white leading-tight">
                          X-Betel Supremo
                        </h2>
                        <p className="text-xs text-zinc-300 line-clamp-1 mt-0.5">
                          Bovino, Frango, Filé, Mussarela, Bacon duplo & muito mais!
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-zinc-400 block">Apenas</span>
                        <span className="text-xl font-extrabold text-red-500">
                          R$ 36,00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
