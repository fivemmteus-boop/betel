export type MeatType = 'Bovino' | 'Frango' | 'Lombo' | 'Filé' | 'Calabresa';

export type CategoryId = 
  | 'all'
  | 'sanduiches'
  | 'hamburgueres'
  | 'combos'
  | 'porcoes'
  | 'batatas'
  | 'bebidas'
  | 'adicionais';

export interface ExtraOption {
  id: string;
  name: string;
  price: number;
}

export interface ProductItem {
  id: string;
  name: string;
  category: CategoryId;
  description: string;
  basePrice: number;
  meatPrices?: Record<MeatType, number>;
  image: string;
  isSpecial?: boolean;
  popular?: boolean;
  allowsMeatChoice?: boolean;
}

export interface SelectedExtra {
  id: string;
  name: string;
  price: number;
}

export interface CartItem {
  cartItemId: string;
  productId: string;
  name: string;
  selectedMeat?: MeatType;
  selectedExtras: SelectedExtra[];
  notes?: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  image: string;
}

export type OrderType = 'delivery' | 'takeaway' | 'dinein';

export type PaymentMethod = 'pix' | 'dinheiro' | 'credito' | 'debito';

export interface DeliveryAddress {
  cep?: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  reference?: string;
}

export interface CheckoutFormData {
  customerName: string;
  customerPhone: string;
  orderType: OrderType;
  tableNumber?: string;
  address: DeliveryAddress;
  paymentMethod: PaymentMethod;
  changeFor?: string;
  generalNotes?: string;
}
