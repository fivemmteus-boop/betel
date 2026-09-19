import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { CartItem, MeatType, ProductItem, SelectedExtra } from '../types';

interface CartContextType {
  items: CartItem[];
  addToCart: (
    product: ProductItem,
    quantity: number,
    selectedMeat?: MeatType,
    extras?: SelectedExtra[],
    notes?: string
  ) => void;
  updateQuantity: (cartItemId: string, newQuantity: number) => void;
  removeItem: (cartItemId: string) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  deliveryFee: number;
  total: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  selectedProductForModal: ProductItem | null;
  setSelectedProductForModal: (product: ProductItem | null) => void;
  toastMessage: string | null;
  showToast: (message: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'betel_cart_items_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<ProductItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore storage quota issues
    }
  }, [items]);

  const showToast = (message: string) => {
    setToastMessage(message);
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 3200);
    return () => clearTimeout(timer);
  };

  const addToCart = (
    product: ProductItem,
    quantity: number,
    selectedMeat?: MeatType,
    extras: SelectedExtra[] = [],
    notes: string = ''
  ) => {
    // Determine unit price based on meat option or base price
    let unitPrice = product.basePrice;
    if (selectedMeat && product.meatPrices && product.meatPrices[selectedMeat]) {
      unitPrice = product.meatPrices[selectedMeat];
    }

    // Add extra prices
    const extrasTotal = extras.reduce((sum, extra) => sum + extra.price, 0);
    const itemUnitPrice = unitPrice + extrasTotal;
    const totalPrice = itemUnitPrice * quantity;

    // Unique ID for item taking customizations into account
    const extrasKey = extras.map((e) => e.id).sort().join('-');
    const cartItemId = `${product.id}_${selectedMeat || 'default'}_${extrasKey}_${notes.trim().toLowerCase()}`;

    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        const newQty = updated[existingIndex].quantity + quantity;
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: newQty,
          totalPrice: newQty * itemUnitPrice,
        };
        return updated;
      }

      const newItem: CartItem = {
        cartItemId,
        productId: product.id,
        name: product.name,
        selectedMeat,
        selectedExtras: extras,
        notes: notes.trim(),
        quantity,
        unitPrice: itemUnitPrice,
        totalPrice,
        image: product.image,
      };
      return [...prevItems, newItem];
    });

    showToast(`"${product.name}" adicionado ao carrinho!`);
  };

  const updateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(cartItemId);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.cartItemId === cartItemId) {
          return {
            ...item,
            quantity: newQuantity,
            totalPrice: newQuantity * item.unitPrice,
          };
        }
        return item;
      })
    );
  };

  const removeItem = (cartItemId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.cartItemId !== cartItemId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = useMemo(() => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  }, [items]);

  const subtotal = useMemo(() => {
    return items.reduce((acc, item) => acc + item.totalPrice, 0);
  }, [items]);

  // Taxa de entrega fixa base para simulação (pode ser ajustada no checkout)
  const deliveryFee = 5.0;
  const total = subtotal;

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        totalItems,
        subtotal,
        deliveryFee,
        total,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        selectedProductForModal,
        setSelectedProductForModal,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
