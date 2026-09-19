import React, { useState } from 'react';
import { X, Send, Bike, Store, Utensils, CheckCircle2, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CheckoutFormData, OrderType, PaymentMethod } from '../types';
import { ESTABLISHMENT_CONFIG } from '../config/establishment';
import { formatCurrency, formatPhone, formatCep } from '../utils/formatters';
import { getWhatsAppOrderUrl } from '../utils/whatsapp';

export const CheckoutModal: React.FC = () => {
  const {
    items,
    isCheckoutOpen,
    setIsCheckoutOpen,
    subtotal,
    clearCart,
    showToast,
  } = useCart();

  const [formData, setFormData] = useState<CheckoutFormData>({
    customerName: '',
    customerPhone: '',
    orderType: 'delivery',
    tableNumber: '',
    address: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: 'Aparecida de Goiânia - GO',
      reference: '',
    },
    paymentMethod: 'pix',
    changeFor: '',
    generalNotes: '',
  });

  const [validationError, setValidationError] = useState<string | null>(null);
  const [isRedirecting, setIsRedirecting] = useState(false);

  if (!isCheckoutOpen) return null;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData((prev) => ({ ...prev, customerPhone: formatted }));
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCep(e.target.value);
    setFormData((prev) => ({
      ...prev,
      address: { ...prev.address, cep: formatted },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    // Validate customer name
    if (!formData.customerName.trim()) {
      setValidationError('Por favor, informe seu nome completo.');
      return;
    }

    // Validate customer phone
    const digitsOnly = formData.customerPhone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      setValidationError('Por favor, informe um telefone/WhatsApp válido com DDD.');
      return;
    }

    // If delivery, validate address
    if (formData.orderType === 'delivery') {
      if (!formData.address.street.trim()) {
        setValidationError('Por favor, informe o nome da sua rua / avenida.');
        return;
      }
      if (!formData.address.number.trim()) {
        setValidationError('Por favor, informe o número da sua residência.');
        return;
      }
      if (!formData.address.neighborhood.trim()) {
        setValidationError('Por favor, informe o seu bairro.');
        return;
      }
    }

    // If money and change is specified, validate format
    if (formData.paymentMethod === 'dinheiro' && formData.changeFor) {
      // Optional change validation
    }

    setIsRedirecting(true);
    showToast('Pedido pronto! Você será redirecionado para o WhatsApp.');

    const whatsappUrl = getWhatsAppOrderUrl(items, formData, subtotal);

    setTimeout(() => {
      // Open WhatsApp official URL
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setIsRedirecting(false);
      setIsCheckoutOpen(false);
      clearCart();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={() => !isRedirecting && setIsCheckoutOpen(false)}
      />

      <div className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl z-10 my-6 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-black border-b border-zinc-800 flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span>Finalizar Pedido</span>
              <span className="text-red-400 text-xs font-normal">
                ({items.length} {items.length === 1 ? 'item' : 'itens'})
              </span>
            </h2>
            <p className="text-xs text-zinc-400 mt-0.5">
              Revise seus dados e envie direto para nosso WhatsApp
            </p>
          </div>

          <button
            type="button"
            onClick={() => !isRedirecting && setIsCheckoutOpen(false)}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 transition-colors cursor-pointer"
            aria-label="Fechar checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-6 overflow-y-auto flex-1">
          {/* Validation Alert */}
          {validationError && (
            <div className="p-3 bg-red-950/80 border border-red-600/60 rounded-xl flex items-center gap-2.5 text-red-200 text-xs sm:text-sm animate-shake">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          {/* 1. DADOS DO CLIENTE */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-red-500 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-red-600/20 text-red-400 text-xs flex items-center justify-center font-extrabold border border-red-600/30">
                1
              </span>
              Dados do Cliente
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Nome completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: João Silva"
                  value={formData.customerName}
                  onChange={(e) =>
                    setFormData({ ...formData, customerName: e.target.value })
                  }
                  className="w-full bg-black border border-zinc-800 focus:border-red-600 rounded-xl p-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none"
                  id="checkout-name-input"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  WhatsApp / Telefone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(62) 99999-9999"
                  value={formData.customerPhone}
                  onChange={handlePhoneChange}
                  className="w-full bg-black border border-zinc-800 focus:border-red-600 rounded-xl p-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none"
                  id="checkout-phone-input"
                />
              </div>
            </div>
          </div>

          {/* 2. TIPO DE PEDIDO */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-red-500 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-red-600/20 text-red-400 text-xs flex items-center justify-center font-extrabold border border-red-600/30">
                2
              </span>
              Tipo de Pedido
            </h3>

            <div className="grid grid-cols-3 gap-2">
              {[
                { type: 'delivery' as OrderType, label: 'Delivery', icon: Bike },
                { type: 'takeaway' as OrderType, label: 'Retirada', icon: Store },
                { type: 'dinein' as OrderType, label: 'No Local', icon: Utensils },
              ].map(({ type, label, icon: Icon }) => {
                const isSelected = formData.orderType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, orderType: type })}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-red-600/20 border-red-600 text-white font-bold shadow-sm'
                        : 'bg-black/60 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 mb-1 ${
                        isSelected ? 'text-red-400' : 'text-zinc-500'
                      }`}
                    />
                    <span className="text-xs">{label}</span>
                  </button>
                );
              })}
            </div>

            {/* If Dine-in, optional table number */}
            {formData.orderType === 'dinein' && (
              <div className="pt-1">
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Número da Mesa (se já estiver sentado)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Mesa 04"
                  value={formData.tableNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, tableNumber: e.target.value })
                  }
                  className="w-full sm:w-48 bg-black border border-zinc-800 focus:border-red-600 rounded-xl p-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none"
                />
              </div>
            )}
          </div>

          {/* 3. ENDEREÇO DE ENTREGA (Se Delivery) */}
          {formData.orderType === 'delivery' && (
            <div className="space-y-3 bg-black/70 p-4 rounded-xl border border-zinc-800">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wider text-red-500 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-red-600/20 text-red-400 text-xs flex items-center justify-center font-extrabold border border-red-600/30">
                    3
                  </span>
                  Endereço de Entrega
                </h3>
                <span className="text-[11px] text-zinc-400">
                  {ESTABLISHMENT_CONFIG.address.city}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Rua / Avenida *
                  </label>
                  <input
                    type="text"
                    required={formData.orderType === 'delivery'}
                    placeholder="Ex: Rua das Flores"
                    value={formData.address.street}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        address: { ...formData.address, street: e.target.value },
                      })
                    }
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-600 rounded-xl p-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none"
                    id="checkout-street-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Número *
                  </label>
                  <input
                    type="text"
                    required={formData.orderType === 'delivery'}
                    placeholder="Ex: 123 ou S/N"
                    value={formData.address.number}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        address: { ...formData.address, number: e.target.value },
                      })
                    }
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-600 rounded-xl p-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none"
                    id="checkout-number-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Bairro *
                  </label>
                  <input
                    type="text"
                    required={formData.orderType === 'delivery'}
                    placeholder="Ex: Goiânia Park Sul"
                    value={formData.address.neighborhood}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        address: { ...formData.address, neighborhood: e.target.value },
                      })
                    }
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-600 rounded-xl p-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none"
                    id="checkout-neighborhood-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Complemento (Apto, Bloco, Casa 2)
                  </label>
                  <input
                    type="text"
                    placeholder="Opcional"
                    value={formData.address.complement}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        address: { ...formData.address, complement: e.target.value },
                      })
                    }
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-600 rounded-xl p-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Ponto de Referência
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Próximo à praça / mercado"
                    value={formData.address.reference}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        address: { ...formData.address, reference: e.target.value },
                      })
                    }
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-600 rounded-xl p-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    CEP (Opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="74945-450"
                    value={formData.address.cep}
                    onChange={handleCepChange}
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-600 rounded-xl p-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 4. FORMA DE PAGAMENTO */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-red-500 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-red-600/20 text-red-400 text-xs flex items-center justify-center font-extrabold border border-red-600/30">
                {formData.orderType === 'delivery' ? '4' : '3'}
              </span>
              Forma de Pagamento
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'pix' as PaymentMethod, label: 'PIX' },
                { id: 'dinheiro' as PaymentMethod, label: 'Dinheiro' },
                { id: 'credito' as PaymentMethod, label: 'Crédito' },
                { id: 'debito' as PaymentMethod, label: 'Débito' },
              ].map(({ id, label }) => {
                const isSelected = formData.paymentMethod === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: id })}
                    className={`py-2.5 px-3 rounded-xl border text-center text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-red-600/20 border-red-600 text-white shadow-sm'
                        : 'bg-zinc-950/60 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Troco para dinheiro */}
            {formData.paymentMethod === 'dinheiro' && (
              <div className="p-3 bg-black rounded-xl border border-zinc-800 space-y-2">
                <label className="block text-xs font-medium text-zinc-300">
                  Precisa de troco? Se sim, para quanto?
                </label>
                <input
                  type="text"
                  placeholder="Ex: R$ 50,00 ou R$ 100,00"
                  value={formData.changeFor}
                  onChange={(e) =>
                    setFormData({ ...formData, changeFor: e.target.value })
                  }
                  className="w-full sm:w-60 bg-zinc-950 border border-zinc-800 focus:border-red-600 rounded-xl p-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none"
                />
              </div>
            )}
          </div>

          {/* 5. OBSERVAÇÕES GERAIS */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
              Observações do Pedido
            </label>
            <textarea
              rows={2}
              placeholder="Ex.: Sem cebola, campainha estragada favor chamar no portão..."
              value={formData.generalNotes}
              onChange={(e) =>
                setFormData({ ...formData, generalNotes: e.target.value })
              }
              className="w-full bg-black border border-zinc-800 focus:border-red-600 rounded-xl p-2.5 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none"
              id="checkout-notes-textarea"
            />
          </div>

          {/* Resumo do Pedido */}
          <div className="p-4 bg-black rounded-xl border border-zinc-800 space-y-2">
            <div className="flex justify-between items-center text-xs text-zinc-400">
              <span>Itens no pedido:</span>
              <span className="text-zinc-200">{items.length} itens</span>
            </div>
            <div className="flex justify-between items-center text-sm font-bold text-white pt-2 border-t border-zinc-800">
              <span>Total do Pedido:</span>
              <span className="text-xl text-red-500 font-extrabold">
                {formatCurrency(subtotal)}
              </span>
            </div>
            <p className="text-[11px] text-zinc-400">
              * A taxa de entrega será confirmada no WhatsApp de acordo com o endereço.
            </p>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isRedirecting}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-black font-extrabold py-4 px-6 rounded-xl text-base transition-all shadow-lg shadow-emerald-600/20 active:scale-98 disabled:opacity-75 cursor-pointer"
              id="checkout-btn-enviar-whatsapp"
            >
              {isRedirecting ? (
                <>
                  <CheckCircle2 className="w-5 h-5 animate-spin" />
                  <span>Redirecionando para o WhatsApp...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Enviar Pedido pelo WhatsApp</span>
                </>
              )}
            </button>
            <p className="text-center text-[11px] text-zinc-400 mt-2">
              Seu pedido será enviado formatado diretamente para o número oficial da Sanduicheria Betel.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
