import React from 'react';
import { MapPin, Navigation, Clock, CheckCircle2 } from 'lucide-react';
import { ESTABLISHMENT_CONFIG } from '../config/establishment';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-16 lg:py-24 bg-zinc-950/40 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-red-500 font-bold text-xs sm:text-sm uppercase tracking-wider block mb-1">
            Venha Nos Visitar
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Onde Estamos
          </h2>
          <p className="text-zinc-400 text-sm mt-1">
            Localização privilegiada e de fácil acesso no setor Goiânia Park Sul.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Address Details Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-zinc-950 p-6 sm:p-8 rounded-2xl border border-zinc-800 space-y-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-600/15 text-red-500 rounded-xl shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Endereço Oficial
                  </h3>
                  <p className="text-zinc-300 text-sm sm:text-base mt-1 font-medium leading-relaxed">
                    {ESTABLISHMENT_CONFIG.address.full}
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">
                    Bairro: {ESTABLISHMENT_CONFIG.address.neighborhood} • CEP: {ESTABLISHMENT_CONFIG.address.cep}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-zinc-850">
                <div className="p-3 bg-emerald-500/15 text-emerald-400 rounded-xl shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Horário de Funcionamento
                  </h3>
                  <p className="text-zinc-300 text-sm mt-1 font-medium">
                    {ESTABLISHMENT_CONFIG.operatingHours.displaySchedule}
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-md">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Lanches preparados na hora a partir das 18h</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={ESTABLISHMENT_CONFIG.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-md shadow-red-600/20 active:scale-98 cursor-pointer"
                  id="btn-como-chegar"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Como Chegar (Google Maps)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Map Preview Box */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-black shadow-2xl relative">
              {/* Responsive Google Maps Embed with pointer */}
              <div className="aspect-[4/3] w-full relative">
                <iframe
                  title="Localização da Sanduicheria Betel no Google Maps"
                  src="https://maps.google.com/maps?q=Av.+Sete+de+Outubro,+326+-+Goi%C3%A2nia+Park+Sul,+Aparecida+de+Goi%C3%A2nia+-+GO&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                  loading="lazy"
                  allowFullScreen
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-3 left-3 bg-black/90 backdrop-blur-md border border-zinc-700 text-xs font-bold text-white px-3 py-1.5 rounded-lg shadow-md flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                  <span>Sanduicheria Betel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
