import React from 'react';
import { Search, X, Flame } from 'lucide-react';
import { CategoryId } from '../types';
import { ESTABLISHMENT_CONFIG } from '../config/establishment';

interface CategoryNavProps {
  selectedCategory: CategoryId;
  onSelectCategory: (categoryId: CategoryId) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  productCountMap: Record<CategoryId, number>;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  productCountMap,
}) => {
  return (
    <div className="sticky top-20 z-30 bg-black/95 backdrop-blur-md border-b border-zinc-800/80 py-4 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Search bar & info row */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-red-500 shrink-0" />
            <span className="text-sm sm:text-base font-bold text-white tracking-wide">
              CARDÁPIO COMPLETO
            </span>
            <span className="text-xs text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded-full border border-zinc-800">
              {productCountMap['all']} itens disponíveis
            </span>
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar lanche, batata, refri..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-750 focus:border-red-600 rounded-xl pl-9 pr-8 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none transition-colors"
              id="menu-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white p-1 cursor-pointer"
                aria-label="Limpar busca"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Scrollable Category pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 pt-0.5 no-scrollbar">
          {ESTABLISHMENT_CONFIG.categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = productCountMap[cat.id] || 0;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-red-600 border-red-600 text-white shadow-md shadow-red-600/30'
                    : 'bg-zinc-900/90 border-zinc-800 text-zinc-300 hover:bg-zinc-850 hover:text-white hover:border-red-600/40'
                }`}
                id={`cat-btn-${cat.id}`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full font-bold ${
                    isSelected
                      ? 'bg-black/30 text-white'
                      : 'bg-zinc-800 text-zinc-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
