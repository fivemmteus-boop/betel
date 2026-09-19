import React from 'react';
import { Phone, Instagram, MapPin, Heart } from 'lucide-react';
import { ESTABLISHMENT_CONFIG } from '../config/establishment';
import { getWhatsAppContactUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const whatsappUrl = getWhatsAppContactUrl();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-zinc-900 pt-16 pb-12 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center font-display text-2xl font-bold text-white shadow-lg shadow-red-950">
                B
              </div>
              <span className="font-display text-2xl font-extrabold tracking-wide text-white">
                SANDUICHERIA <span className="text-red-500">BETEL</span>
              </span>
            </div>

            <p className="text-zinc-300 font-semibold italic text-base">
              "Seu lanche, seu momento."
            </p>

            <p className="text-xs text-zinc-400 leading-relaxed">
              O autêntico sabor dos melhores sanduíches e hambúrgueres artesanais de Aparecida de Goiânia.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNavClick('#inicio')}
                  className="hover:text-red-400 transition-colors cursor-pointer"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#cardapio')}
                  className="hover:text-red-400 transition-colors cursor-pointer"
                >
                  Cardápio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#sobre')}
                  className="hover:text-red-400 transition-colors cursor-pointer"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#avaliacoes')}
                  className="hover:text-red-400 transition-colors cursor-pointer"
                >
                  Avaliações
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#localizacao')}
                  className="hover:text-red-400 transition-colors cursor-pointer"
                >
                  Onde Estamos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#contato')}
                  className="hover:text-red-400 transition-colors cursor-pointer"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Atendimento & Redes
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-500" />
                  <span>{ESTABLISHMENT_CONFIG.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={ESTABLISHMENT_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-500" />
                  <span>{ESTABLISHMENT_CONFIG.instagramHandle}</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {ESTABLISHMENT_CONFIG.address.street} - {ESTABLISHMENT_CONFIG.address.neighborhood}
                </span>
              </li>
            </ul>
          </div>

          {/* Operating hours & services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Horários
            </h4>
            <div className="p-3.5 bg-zinc-950 rounded-xl border border-zinc-850 space-y-2 text-xs">
              <p className="text-emerald-400 font-semibold">
                {ESTABLISHMENT_CONFIG.operatingHours.displayOpening}
              </p>
              <p className="text-zinc-400 text-[11px]">
                {ESTABLISHMENT_CONFIG.operatingHours.displaySchedule}
              </p>
              <div className="pt-2 border-t border-zinc-800 flex flex-wrap gap-1 text-[10px] text-zinc-400">
                <span>Refeição no local</span> • <span>Para viagem</span> • <span>Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Sanduicheria Betel. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> para os amantes de lanche caprichado.
          </p>
        </div>
      </div>
    </footer>
  );
};
