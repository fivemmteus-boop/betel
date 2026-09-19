import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { InstagramSection } from './components/InstagramSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ToastNotification } from './components/ToastNotification';

const AppContent: React.FC = () => {
  const { selectedProductForModal, setSelectedProductForModal } = useCart();

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col selection:bg-red-600 selection:text-white">
      {/* Toast Alert */}
      <ToastNotification />

      {/* Main Header with dynamic cart button */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero with call to actions and badges */}
        <Hero />

        {/* Dynamic & Filterable Menu */}
        <MenuSection />

        {/* About the establishment */}
        <AboutSection />

        {/* Google Reviews & Social Proof */}
        <ReviewsSection />

        {/* Instagram Feed Section */}
        <InstagramSection />

        {/* Location & Map */}
        <LocationSection />

        {/* Official Direct Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button for WhatsApp */}
      <FloatingWhatsApp />

      {/* Modals & Drawers */}
      <ProductModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
      />
      <CartDrawer />
      <CheckoutModal />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
