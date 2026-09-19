import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppContactUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = getWhatsAppContactUrl();

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on hover */}
      {isHovered && (
        <div className="hidden sm:block bg-zinc-900 text-zinc-100 text-xs font-semibold px-3.5 py-2 rounded-xl shadow-xl border border-zinc-700 animate-fadeIn">
          <span>Falar no WhatsApp</span>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-black rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Falar no WhatsApp da Sanduicheria Betel"
        id="floating-whatsapp-btn"
      >
        {/* Pulse effect rings */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping -z-10" />

        <MessageCircle className="w-7 h-7 fill-black text-emerald-500" />
      </a>
    </div>
  );
};
