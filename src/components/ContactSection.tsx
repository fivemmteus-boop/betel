import React from 'react';
import { Phone, Instagram, MapPin, Clock, MessageSquare } from 'lucide-react';
import { ESTABLISHMENT_CONFIG } from '../config/establishment';
import { getWhatsAppContactUrl } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const whatsappUrl = getWhatsAppContactUrl();

  return (
    <section id="contato" className="py-16 lg:py-24 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-red-500 font-bold text-xs sm:text-sm uppercase tracking-wider block mb-1">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Canais de Atendimento
          </h2>
          <p className="text-zinc-400 text-sm mt-1">
            Tire dúvidas, faça seu pedido ou combine retiradas diretamente com a gente.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* WhatsApp */}
          <div className="bg-zinc-950 border border-zinc-800 hover:border-emerald-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  WhatsApp Oficial
                </h3>
                <p className="text-sm font-semibold text-emerald-400 mt-0.5">
                  {ESTABLISHMENT_CONFIG.phoneDisplay}
                </p>
                <p className="text-xs text-zinc-400 mt-1">
                  Atendimento rápido para pedidos e dúvidas.
                </p>
              </div>
            </div>

            <div className="pt-5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold py-2.5 px-4 rounded-xl text-xs transition-colors cursor-pointer"
                id="contact-btn-whatsapp"
              >
                <span>Chamar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Instagram */}
          <div className="bg-zinc-950 border border-zinc-800 hover:border-pink-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  Instagram
                </h3>
                <p className="text-sm font-semibold text-pink-400 mt-0.5">
                  {ESTABLISHMENT_CONFIG.instagramHandle}
                </p>
                <p className="text-xs text-zinc-400 mt-1">
                  Fotos, stories do dia a dia e novidades.
                </p>
              </div>
            </div>

            <div className="pt-5">
              <a
                href={ESTABLISHMENT_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors cursor-pointer"
                id="contact-btn-instagram"
              >
                <span>Abrir Instagram</span>
              </a>
            </div>
          </div>

          {/* Endereço */}
          <div className="bg-zinc-950 border border-zinc-800 hover:border-red-600/50 rounded-2xl p-6 flex flex-col justify-between transition-all">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-600/10 text-red-500 flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  Endereço
                </h3>
                <p className="text-xs font-semibold text-zinc-300 mt-0.5 leading-relaxed">
                  {ESTABLISHMENT_CONFIG.address.street} - {ESTABLISHMENT_CONFIG.address.neighborhood}
                </p>
                <p className="text-xs text-zinc-400 mt-1">
                  {ESTABLISHMENT_CONFIG.address.city} - CEP {ESTABLISHMENT_CONFIG.address.cep}
                </p>
              </div>
            </div>

            <div className="pt-5">
              <a
                href={ESTABLISHMENT_CONFIG.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-850 text-zinc-200 hover:text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors cursor-pointer border border-zinc-800"
                id="contact-btn-mapa"
              >
                <span>Ver no Mapa</span>
              </a>
            </div>
          </div>

          {/* Horário */}
          <div className="bg-zinc-950 border border-zinc-800 hover:border-red-600/50 rounded-2xl p-6 flex flex-col justify-between transition-all">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-600/10 text-red-500 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  Horário
                </h3>
                <p className="text-sm font-semibold text-red-500 mt-0.5">
                  {ESTABLISHMENT_CONFIG.operatingHours.displayOpening}
                </p>
                <p className="text-xs text-zinc-400 mt-1">
                  {ESTABLISHMENT_CONFIG.operatingHours.displaySchedule}
                </p>
              </div>
            </div>

            <div className="pt-5">
              <a
                href={`tel:${ESTABLISHMENT_CONFIG.phoneDisplay.replace(/\D/g, '')}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-850 text-zinc-200 hover:text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors cursor-pointer border border-zinc-800"
                id="contact-btn-telefone"
              >
                <Phone className="w-3.5 h-3.5 text-red-500" />
                <span>Ligar Agora</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
