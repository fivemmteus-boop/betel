import React from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatters';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    totalItems,
    setIsCheckoutOpen,
  } = useCart();

  if (!isCartOpen) return null;

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-zinc-950 border-l border-zinc-800 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-zinc-800 flex items-center justify-between bg-black/80">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-red-500" />
              <h2 className="text-lg font-bold text-white">
                Seu Carrinho
              </h2>
              {totalItems > 0 && (
                <span className="bg-red-600/20 text-red-400 text-xs font-bold px-2.5 py-0.5 rounded-full border border-red-600/30">
                  {totalItems} {totalItems === 1 ? 'item' : 'itens'}
                </span>
              )}
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors cursor-pointer"
              aria-label="Fechar carrinho"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-600">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-zinc-200">
                    Seu carrinho está vazio
                  </h3>
                  <p className="text-xs text-zinc-400 max-w-xs leading-relaxed">
                    Escolha um sanduíche bem caprichado no cardápio para começar seu pedido!
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="bg-red-600 hover:bg-red-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors cursor-pointer shadow-md shadow-red-600/20"
                >
                  Explorar Cardápio
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.cartItemId}
                    className="p-3.5 bg-black/70 border border-zinc-800/90 rounded-xl space-y-2.5 transition-colors hover:border-zinc-700"
                  >
                    <div className="flex gap-3">
                      {/* Image Thumbnail */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-lg object-cover bg-black shrink-0 border border-zinc-800"
                      />

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1">
                          <h4 className="text-sm font-bold text-white truncate">
                            {item.name}
                          </h4>
                          <button
                            onClick={() => removeItem(item.cartItemId)}
                            className="text-zinc-500 hover:text-red-400 p-1 transition-colors cursor-pointer"
                            aria-label={`Remover ${item.name}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {item.selectedMeat && (
                          <span className="inline-block text-[11px] bg-red-600/15 text-red-400 font-semibold px-2 py-0.5 rounded mt-0.5 border border-red-600/20">
                            Carne: {item.selectedMeat}
                          </span>
                        )}

                        {item.selectedExtras.length > 0 && (
                          <div className="text-[11px] text-zinc-400 mt-1 space-y-0.5">
                            {item.selectedExtras.map((e) => (
                              <div key={e.id} className="truncate">
                                + {e.name} ({formatCurrency(e.price)})
                              </div>
                            ))}
                          </div>
                        )}

                        {item.notes && (
                          <p className="text-[11px] text-zinc-400 italic mt-1 truncate">
                            Obs: {item.notes}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Bottom row: Unit Price, Quantity, Subtotal */}
                    <div className="flex items-center justify-between pt-2 border-t border-zinc-800 text-xs">
                      <div className="text-zinc-400">
                        Unitário: <span className="text-zinc-200">{formatCurrency(item.unitPrice)}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        {/* Quantity Counter */}
                        <div className="flex items-center bg-zinc-900 border border-zinc-750 rounded-lg p-0.5">
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="p-1 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                            aria-label="Diminuir"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 font-bold text-zinc-100 text-xs">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="p-1 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                            aria-label="Aumentar"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Item Total */}
                        <span className="font-bold text-red-500 text-sm">
                          {formatCurrency(item.totalPrice)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {items.length > 1 && (
                  <div className="pt-2 text-right">
                    <button
                      onClick={clearCart}
                      className="text-xs text-zinc-500 hover:text-red-400 transition-colors underline cursor-pointer"
                    >
                      Esvaziar carrinho
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer & Checkout Button */}
          {items.length > 0 && (
            <div className="p-5 bg-black border-t border-zinc-800 space-y-4">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-zinc-400">
                  <span>Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-zinc-400 text-xs">
                  <span>Taxa de Entrega</span>
                  <span className="text-zinc-300">A calcular no checkout</span>
                </div>
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-zinc-800">
                  <span>Total estimado</span>
                  <span className="text-xl text-red-500 font-extrabold">
                    {formatCurrency(subtotal)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckoutClick}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-extrabold py-3.5 px-4 rounded-xl text-sm transition-all shadow-lg shadow-red-600/30 active:scale-98 cursor-pointer"
                id="cart-btn-finalizar-pedido"
              >
                <span>Finalizar Pedido</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-center text-xs text-zinc-400 hover:text-zinc-200 py-1 transition-colors cursor-pointer"
              >
                Continuar escolhendo
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
