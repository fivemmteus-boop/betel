import React from 'react';
import { Star, ExternalLink, MessageSquareQuote } from 'lucide-react';
import { ESTABLISHMENT_CONFIG } from '../config/establishment';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-16 lg:py-24 bg-zinc-950/60 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Big 4.5 Rating */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-red-500 font-bold text-xs sm:text-sm uppercase tracking-wider block mb-1">
              Opinião dos Nossos Clientes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Avaliações no Google
            </h2>
            <p className="text-zinc-400 text-sm mt-1 max-w-xl">
              Depoimentos reais de quem já experimentou e recomenda os lanches da Sanduicheria Betel.
            </p>
          </div>

          {/* Aggregate Rating Score Box */}
          <div className="bg-black border border-zinc-800 rounded-2xl p-4 sm:p-5 flex items-center gap-4 shrink-0 shadow-lg">
            <div className="text-center">
              <span className="text-4xl font-black text-red-500 block leading-none">
                {ESTABLISHMENT_CONFIG.rating}
              </span>
              <span className="text-[11px] text-zinc-400 font-semibold">de 5.0</span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={`w-4 h-4 ${
                      s <= 4
                        ? 'fill-red-500 text-red-500'
                        : 'fill-red-500/40 text-red-500/40'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-zinc-300 font-medium">
                Mais de {ESTABLISHMENT_CONFIG.reviewCount} avaliações registradas
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ESTABLISHMENT_CONFIG.reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-black/80 border border-zinc-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-red-600/40 transition-colors shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="w-4 h-4 fill-red-500 text-red-500"
                      />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-zinc-700" />
                </div>

                <p className="text-zinc-200 text-sm leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-5 border-t border-zinc-850 mt-5 flex items-center justify-between text-xs text-zinc-400">
                <span className="font-semibold text-zinc-300">{rev.author}</span>
                <span>{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Button to view more on Google Maps */}
        <div className="mt-10 text-center">
          <a
            href={ESTABLISHMENT_CONFIG.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-850 text-zinc-200 hover:text-red-400 border border-zinc-800 hover:border-red-600/50 font-semibold px-6 py-3 rounded-xl text-sm transition-all cursor-pointer shadow-md"
            id="reviews-btn-google-maps"
          >
            <span>Ver mais avaliações no Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <p className="text-[11px] text-zinc-400 mt-2">
            * Avaliações públicas de clientes no perfil da empresa.
          </p>
        </div>
      </div>
    </section>
  );
};
