import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { products } from '../../data/products';
import ProductCard from '../../components/product/ProductCard';
import ShopSidebar from '../../components/shop/ShopSidebar';

export default function Shop() {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const filteredProducts = products;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-4 md:pt-8">
      <main className="flex-grow container mx-auto px-4 pb-12">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Product Catalog</h1>
            <p className="text-slate-500 text-sm">Browse our full range of Lexip smart home and industrial automation hardware.</p>
          </div>
          
          {/* Mobile Filter Toggle */}
          <button 
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="lg:hidden bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-sm"
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className={`lg:w-1/4 shrink-0 ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
            <ShopSidebar />
          </aside>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
