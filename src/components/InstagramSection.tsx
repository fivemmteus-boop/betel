import React from 'react';
import { Instagram, ExternalLink, Heart, MessageCircle } from 'lucide-react';
import { ESTABLISHMENT_CONFIG } from '../config/establishment';

export const InstagramSection: React.FC = () => {
  const instagramPhotos = [
    {
      id: 'ig-1',
      url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop',
      alt: 'Hambúrguer artesanal especial Betel',
      likes: '142',
      comments: '18',
    },
    {
      id: 'ig-2',
      url: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=600&auto=format&fit=crop',
      alt: 'Batata com cheddar cremoso e bacon crocante',
      likes: '98',
      comments: '12',
    },
    {
      id: 'ig-3',
      url: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=600&auto=format&fit=crop',
      alt: 'X-Bacon montado com muito recheio',
      likes: '215',
      comments: '29',
    },
    {
      id: 'ig-4',
      url: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=600&auto=format&fit=crop',
      alt: 'Combo especial com batata e refrigerante',
      likes: '176',
      comments: '15',
    },
  ];

  return (
    <section className="py-16 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
          <div className="text-center sm:text-left">
            <span className="text-red-500 font-bold text-xs sm:text-sm uppercase tracking-wider block mb-1">
              Siga Nossas Redes Sociais
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center justify-center sm:justify-start gap-2">
              <Instagram className="w-7 h-7 text-pink-500" />
              <span>{ESTABLISHMENT_CONFIG.instagramHandle}</span>
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1">
              Fique por dentro das novidades, promoções e fotos de dar água na boca.
            </p>
          </div>

          <a
            href={ESTABLISHMENT_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-500 hover:to-red-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md active:scale-95 cursor-pointer"
            id="btn-seguir-instagram"
          >
            <span>Seguir no Instagram</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPhotos.map((photo) => (
            <a
              key={photo.id}
              href={ESTABLISHMENT_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 cursor-pointer block"
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white">
                <div className="flex items-center gap-1 text-xs font-bold">
                  <Heart className="w-4 h-4 fill-white text-white" />
                  <span>{photo.likes}</span>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold">
                  <MessageCircle className="w-4 h-4 fill-white text-white" />
                  <span>{photo.comments}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
