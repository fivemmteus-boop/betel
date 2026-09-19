import React from 'react';
import { Plus, Star, Sparkles, Layers } from 'lucide-react';
import { ProductItem } from '../types';
import { formatCurrency } from '../utils/formatters';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: ProductItem;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { setSelectedProductForModal } = useCart();

  const handleOpenModal = () => {
    setSelectedProductForModal(product);
  };

  return (
    <div className="group bg-zinc-950/90 hover:bg-zinc-900/95 border border-zinc-800/90 hover:border-red-600/60 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-red-600/10 hover:-translate-y-1">
      {/* Product Image Box */}
      <div
        className="relative aspect-[16/10] overflow-hidden bg-black cursor-pointer"
        onClick={handleOpenModal}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {product.popular && (
            <span className="inline-flex items-center gap-1 bg-red-600 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-md shadow-md">
              <Star className="w-3 h-3 fill-white" />
              Mais Pedido
            </span>
          )}
          {product.isSpecial && (
            <span className="inline-flex items-center gap-1 bg-zinc-900/90 border border-red-500/50 text-red-400 text-[11px] font-bold px-2.5 py-1 rounded-md shadow-md">
              <Sparkles className="w-3 h-3 text-red-400" />
              Especial Betel
            </span>
          )}
        </div>

        {/* Meat Choice Pill */}
        {product.allowsMeatChoice && (
          <div className="absolute bottom-2.5 left-3">
            <span className="inline-flex items-center gap-1 bg-black/85 backdrop-blur-md border border-zinc-700/60 text-zinc-200 text-[11px] font-medium px-2 py-0.5 rounded-md">
              <Layers className="w-3 h-3 text-red-400" />
              5 tipos de carne
            </span>
          </div>
        )}
      </div>

      {/* Product Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3
              onClick={handleOpenModal}
              className="text-lg font-bold text-white group-hover:text-red-400 transition-colors cursor-pointer line-clamp-1"
            >
              {product.name}
            </h3>
          </div>

          <p className="text-zinc-400 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
            {product.description}
          </p>
        </div>

        {/* Price & Action Row */}
        <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-3">
          <div>
            {product.allowsMeatChoice ? (
              <div>
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider block font-medium">
                  A partir de
                </span>
                <span className="text-lg font-extrabold text-red-500">
                  {formatCurrency(product.basePrice)}
                </span>
              </div>
            ) : (
              <div>
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider block font-medium">
                  Preço
                </span>
                <span className="text-lg font-extrabold text-red-500">
                  {formatCurrency(product.basePrice)}
                </span>
              </div>
            )}
          </div>

          <button
            onClick={handleOpenModal}
            className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-500 active:bg-red-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-red-600/20 active:scale-95 cursor-pointer"
            id={`btn-add-${product.id}`}
          >
            <Plus className="w-4 h-4" />
            <span>Adicionar</span>
          </button>
        </div>
      </div>
    </div>
  );
};
