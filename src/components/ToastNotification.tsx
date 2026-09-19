import React from 'react';
import { CheckCircle, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ToastNotification: React.FC = () => {
  const { toastMessage, showToast } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed top-24 right-4 sm:right-8 z-50 animate-bounce">
      <div className="flex items-center gap-3 bg-zinc-950 border border-emerald-500/70 text-white px-4 py-3 rounded-xl shadow-2xl shadow-emerald-500/10 max-w-sm">
        <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
        <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
        <button
          onClick={() => showToast('')}
          className="text-zinc-400 hover:text-white ml-2 p-0.5"
          aria-label="Fechar aviso"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
