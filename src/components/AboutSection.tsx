import React from 'react';
import { Sandwich, Bike, ShoppingBag, HeartHandshake, MapPin } from 'lucide-react';
import { ESTABLISHMENT_CONFIG } from '../config/establishment';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-16 lg:py-24 bg-black border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Atmospheric Culinary Collage / Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=900&auto=format&fit=crop"
                alt="Lanche artesanal Sanduicheria Betel"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-zinc-950/90 backdrop-blur-md rounded-xl border border-zinc-800">
                <p className="text-red-500 font-bold text-sm">
                  Tradição & Capricho
                </p>
                <p className="text-xs text-zinc-300 mt-0.5">
                  Cada lanche é montado na chapa com ingredientes frescos e molho especial da casa.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Text & Differentiators */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-red-500 font-bold text-xs sm:text-sm uppercase tracking-wider block mb-1">
                Conheça a nossa história
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Sobre a <span className="text-red-500">{ESTABLISHMENT_CONFIG.name}</span>
              </h2>
            </div>

            {/* Main description matching the briefing verbatim */}
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              {ESTABLISHMENT_CONFIG.description}
            </p>

            {/* Differentiators Grid */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-zinc-950/70 border border-zinc-800/80 rounded-xl flex items-start gap-3 hover:border-red-600/40 transition-colors">
                <div className="p-2.5 rounded-lg bg-red-600/10 text-red-500 shrink-0">
                  <Sandwich className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    Sanduíches Caprichados
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Lanches fartos, pão selado e muito recheio saboroso.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-zinc-950/70 border border-zinc-800/80 rounded-xl flex items-start gap-3 hover:border-red-600/40 transition-colors">
                <div className="p-2.5 rounded-lg bg-red-600/10 text-red-500 shrink-0">
                  <Bike className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    Opção de Delivery
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Entrega ágil e sem contato na sua residência.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-zinc-950/70 border border-zinc-800/80 rounded-xl flex items-start gap-3 hover:border-red-600/40 transition-colors">
                <div className="p-2.5 rounded-lg bg-red-600/10 text-red-500 shrink-0">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    Para Viagem
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Peça com antecedência e retire quentinho no balcão.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-zinc-950/70 border border-zinc-800/80 rounded-xl flex items-start gap-3 hover:border-red-600/40 transition-colors">
                <div className="p-2.5 rounded-lg bg-red-600/10 text-red-500 shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    Atendimento Acolhedor
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Simpatia e dedicação para melhor atender você e sua família.
                  </p>
                </div>
              </div>

              <div className="sm:col-span-2 p-4 bg-zinc-950/70 border border-zinc-800/80 rounded-xl flex items-start gap-3 hover:border-red-600/40 transition-colors">
                <div className="p-2.5 rounded-lg bg-red-600/10 text-red-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    Localização em Goiânia Park Sul
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Av. Sete de Outubro, 326 - Ponto de fácil acesso em Aparecida de Goiânia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
