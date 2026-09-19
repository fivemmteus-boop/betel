import React, { useState, useMemo } from 'react';
import { CategoryId, ProductItem } from '../types';
import { MENU_PRODUCTS } from '../config/establishment';
import { CategoryNav } from './CategoryNav';
import { ProductCard } from './ProductCard';
import { UtensilsCrossed } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Map product counts for category buttons
  const productCountMap = useMemo(() => {
    const map: Record<CategoryId, number> = {
      all: MENU_PRODUCTS.length,
      sanduiches: 0,
      hamburgueres: 0,
      combos: 0,
      porcoes: 0,
      batatas: 0,
      bebidas: 0,
      adicionais: 0,
    };

    MENU_PRODUCTS.forEach((product) => {
      if (map[product.category] !== undefined) {
        map[product.category]++;
      }
    });

    return map;
  }, []);

  // Filter products by selected category and search query
  const filteredProducts = useMemo(() => {
    return MENU_PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const matchName = product.name.toLowerCase().includes(q);
      const matchDesc = product.description.toLowerCase().includes(q);

      return matchName || matchDesc;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="cardapio" className="scroll-mt-24 pb-20">
      {/* Category Navigation Bar with Search */}
      <CategoryNav
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        productCountMap={productCountMap}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center space-y-4 bg-stone-900/40 rounded-3xl border border-stone-800 p-8">
            <div className="w-16 h-16 rounded-full bg-stone-800 flex items-center justify-center mx-auto text-stone-500">
              <UtensilsCrossed className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-stone-200">
              Nenhum item encontrado
            </h3>
            <p className="text-sm text-stone-400 max-w-sm mx-auto">
              Não encontramos nenhum lanche correspondente a "{searchQuery}". Tente pesquisar por outro termo ou escolha uma categoria acima.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-amber-500 text-stone-950 font-bold px-4 py-2 rounded-xl text-xs hover:bg-amber-400 transition-colors cursor-pointer"
            >
              Ver Cardápio Completo
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
