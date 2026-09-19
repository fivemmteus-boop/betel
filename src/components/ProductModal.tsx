import React, { useState, useEffect, useMemo } from 'react';
import { X, Plus, Minus, Check, Sparkles } from 'lucide-react';
import { ExtraOption, MeatType, ProductItem } from '../types';
import { ESTABLISHMENT_CONFIG, EXTRA_OPTIONS } from '../config/establishment';
import { formatCurrency } from '../utils/formatters';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();

  const [selectedMeat, setSelectedMeat] = useState<MeatType>('Bovino');
  const [selectedExtras, setSelectedExtras] = useState<ExtraOption[]>([]);
  const [notes, setNotes] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  // Reset local state when product changes
  useEffect(() => {
    if (product) {
      setSelectedMeat('Bovino');
      setSelectedExtras([]);
      setNotes('');
      setQuantity(1);
    }
  }, [product]);

  // Calculate current unit price
  const currentUnitPrice = useMemo(() => {
    if (!product) return 0;

    let base = product.basePrice;
    if (product.allowsMeatChoice && product.meatPrices && product.meatPrices[selectedMeat]) {
      base = product.meatPrices[selectedMeat];
    }

    const extrasTotal = selectedExtras.reduce((sum, item) => sum + item.price, 0);
    return base + extrasTotal;
  }, [product, selectedMeat, selectedExtras]);

  const currentTotalPrice = currentUnitPrice * quantity;

  if (!product) return null;

  const handleToggleExtra = (extra: ExtraOption) => {
    setSelectedExtras((prev) => {
      const exists = prev.some((e) => e.id === extra.id);
      if (exists) {
        return prev.filter((e) => e.id !== extra.id);
      } else {
        return [...prev, extra];
      }
    });
  };

  const handleAddToCart = () => {
    addToCart(
      product,
      quantity,
      product.allowsMeatChoice ? selectedMeat : undefined,
      selectedExtras,
      notes
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl z-10 my-8 flex flex-col max-h-[90vh]">
        {/* Header with image */}
        <div className="relative aspect-[16/9] w-full bg-black">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-black/50" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 bg-black/70 hover:bg-zinc-900 text-zinc-200 hover:text-white rounded-full transition-colors cursor-pointer border border-zinc-800"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
              {product.name}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 line-clamp-2 mt-1">
              {product.description}
            </p>
          </div>
        </div>

        {/* Scrollable customization options */}
        <div className="p-5 space-y-6 overflow-y-auto flex-1">
          {/* Meat choice selection if sandwich */}
          {product.allowsMeatChoice && product.meatPrices && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-red-500" />
                  Escolha o tipo de carne
                </span>
                <span className="text-xs bg-red-650/20 text-red-400 font-semibold px-2 py-0.5 rounded border border-red-600/30">
                  Obrigatório
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ESTABLISHMENT_CONFIG.meatOptions.map((meat) => {
                  const price = product.meatPrices?.[meat] ?? product.basePrice;
                  const isSelected = selectedMeat === meat;

                  return (
                    <button
                      key={meat}
                      type="button"
                      onClick={() => setSelectedMeat(meat)}
                      className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-red-600/15 border-red-600 text-white shadow-sm'
                          : 'bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected
                              ? 'border-red-500 bg-red-600'
                              : 'border-zinc-600'
                          }`}
                        >
                          {isSelected && (
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                          )}
                        </div>
                        <span className="font-semibold text-sm">{meat}</span>
                      </div>
                      <span
                        className={`text-xs font-bold ${
                          isSelected ? 'text-red-400' : 'text-zinc-400'
                        }`}
                      >
                        {formatCurrency(price)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Extra options */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-white">
                Deseja adicionar algo a mais?
              </span>
              <span className="text-xs text-zinc-400">Opcional</span>
            </div>

            <div className="space-y-2">
              {EXTRA_OPTIONS.map((extra) => {
                const isSelected = selectedExtras.some((e) => e.id === extra.id);

                return (
                  <button
                    key={extra.id}
                    type="button"
                    onClick={() => handleToggleExtra(extra)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-zinc-900 border-red-600/80 text-white'
                        : 'bg-zinc-900/40 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center ${
                          isSelected
                            ? 'border-red-600 bg-red-600 text-white'
                            : 'border-zinc-600 bg-black'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="text-xs sm:text-sm font-medium">
                        {extra.name}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-red-400">
                      +{formatCurrency(extra.price)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Observations note */}
          <div className="space-y-2">
            <label
              htmlFor="item-notes"
              className="block text-sm font-bold text-white"
            >
              Observações do lanche
            </label>
            <textarea
              id="item-notes"
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex.: Sem cebola, milho separado, maionese à parte, carne bem passada..."
              className="w-full bg-black border border-zinc-800 focus:border-red-600 rounded-xl p-3 text-xs sm:text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Modal Footer with quantity & add button */}
        <div className="p-4 bg-black border-t border-zinc-800 flex flex-col sm:flex-row items-center gap-4">
          {/* Quantity selector */}
          <div className="flex items-center justify-between w-full sm:w-auto bg-zinc-900 border border-zinc-800 rounded-xl p-1">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
              className="p-2 text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
              aria-label="Diminuir quantidade"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-4 font-bold text-white text-sm">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Aumentar quantidade"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add to order button */}
          <button
            type="button"
            onClick={handleAddToCart}
            className="w-full flex-1 flex items-center justify-between bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold px-5 py-3 rounded-xl transition-all shadow-lg shadow-red-600/30 active:scale-98 cursor-pointer"
            id="modal-btn-confirm-add"
          >
            <span>Adicionar ao Pedido</span>
            <span className="text-base font-extrabold">
              {formatCurrency(currentTotalPrice)}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
