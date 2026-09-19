import { ESTABLISHMENT_CONFIG } from '../config/establishment';
import { CartItem, CheckoutFormData } from '../types';
import { formatCurrency } from './formatters';

/**
 * Builds the official formatted WhatsApp message matching establishment requirements.
 */
export function buildWhatsAppOrderMessage(
  cartItems: CartItem[],
  formData: CheckoutFormData,
  totalAmount: number
): string {
  const lines: string[] = [];

  lines.push('🍔 *NOVO PEDIDO — SANDUICHERIA BETEL*');
  lines.push('');
  lines.push(`👤 *Cliente:* ${formData.customerName.trim()}`);
  lines.push(`📱 *Telefone:* ${formData.customerPhone.trim()}`);
  
  // Tipo de pedido
  let orderTypeLabel = 'Delivery';
  if (formData.orderType === 'takeaway') {
    orderTypeLabel = 'Retirada no Local';
  } else if (formData.orderType === 'dinein') {
    orderTypeLabel = formData.tableNumber 
      ? `Consumo no Local (Mesa ${formData.tableNumber})` 
      : 'Consumo no Local';
  }
  lines.push(`📦 *Tipo:* ${orderTypeLabel}`);

  // Endereço de entrega se for Delivery
  if (formData.orderType === 'delivery') {
    lines.push('');
    lines.push('📍 *Endereço:*');
    const { street, number, complement, neighborhood, city, reference, cep } = formData.address;
    
    let addressLine = `${street}, ${number}`;
    if (complement && complement.trim()) {
      addressLine += ` - Compl: ${complement.trim()}`;
    }
    lines.push(addressLine);
    lines.push(`Bairro: ${neighborhood}`);
    lines.push(`${city || 'Aparecida de Goiânia - GO'}${cep ? ` (CEP: ${cep})` : ''}`);
    if (reference && reference.trim()) {
      lines.push(`Ponto de ref.: ${reference.trim()}`);
    }
  }

  // Lista dos produtos
  lines.push('');
  lines.push('🛒 *PEDIDO:*');
  lines.push('');

  cartItems.forEach((item) => {
    let itemTitle = `${item.quantity}x ${item.name}`;
    if (item.selectedMeat) {
      itemTitle += ` (${item.selectedMeat})`;
    }
    itemTitle += ` — ${formatCurrency(item.totalPrice)}`;
    lines.push(itemTitle);

    // Extras
    if (item.selectedExtras && item.selectedExtras.length > 0) {
      const extrasStr = item.selectedExtras
        .map((e) => `+ ${e.name} (${formatCurrency(e.price)})`)
        .join(', ');
      lines.push(`   *Adicionais:* ${extrasStr}`);
    }

    // Observação do item
    if (item.notes && item.notes.trim()) {
      lines.push(`   *Obs item:* ${item.notes.trim()}`);
    }
  });

  // Total
  lines.push('');
  lines.push(`💰 *TOTAL: ${formatCurrency(totalAmount)}*`);

  // Pagamento
  let paymentLabel = '';
  switch (formData.paymentMethod) {
    case 'pix':
      paymentLabel = 'PIX';
      break;
    case 'dinheiro':
      paymentLabel = formData.changeFor && formData.changeFor.trim()
        ? `Dinheiro (Troco para ${formData.changeFor.trim()})`
        : 'Dinheiro (Não precisa de troco)';
      break;
    case 'credito':
      paymentLabel = 'Cartão de Crédito (Levar maquininha)';
      break;
    case 'debito':
      paymentLabel = 'Cartão de Débito (Levar maquininha)';
      break;
  }
  lines.push('');
  lines.push(`💳 *Pagamento:* ${paymentLabel}`);

  // Observações gerais do pedido
  if (formData.generalNotes && formData.generalNotes.trim()) {
    lines.push('');
    lines.push(`📝 *Observações:*`);
    lines.push(formData.generalNotes.trim());
  }

  lines.push('');
  lines.push('Agradecemos a preferência! Pedido enviado pelo site.');

  return lines.join('\n');
}

/**
 * Creates the direct WhatsApp link
 */
export function getWhatsAppOrderUrl(
  cartItems: CartItem[],
  formData: CheckoutFormData,
  totalAmount: number
): string {
  const message = buildWhatsAppOrderMessage(cartItems, formData, totalAmount);
  return `https://wa.me/${ESTABLISHMENT_CONFIG.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

/**
 * Creates the direct WhatsApp support/greeting link
 */
export function getWhatsAppContactUrl(): string {
  const msg = `Olá! Vim pelo site da ${ESTABLISHMENT_CONFIG.name} e gostaria de fazer um pedido.`;
  return `https://wa.me/${ESTABLISHMENT_CONFIG.whatsappRaw}?text=${encodeURIComponent(msg)}`;
}
