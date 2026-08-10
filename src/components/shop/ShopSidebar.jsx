import React from 'react';

export default function ShopSidebar({ maxPrice = 100000, setMaxPrice }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm sticky top-24">
      <h3 className="font-bold text-slate-900 mb-4 tracking-tight">Filters</h3>
      
      {/* Categories */}
      <div className="mb-6">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Categories</h4>
        <div className="space-y-2.5">
          {['All Products', 'Smart Home', 'Sensors', 'Switches', 'Security', 'Motors'].map((cat, idx) => (
            <label key={idx} className="flex items-center space-x-2 cursor-pointer group">
              <input type="checkbox" className="rounded text-purple-600 focus:ring-purple-600/20 border-slate-300" defaultChecked={idx === 0} />
              <span className="text-sm font-medium text-slate-700 group-hover:text-purple-600 transition-colors">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Price Range</h4>
        <input 
          type="range" 
          min="0" 
          max="100000" 
          step="500"
          value={maxPrice}
          onChange={(e) => setMaxPrice && setMaxPrice(Number(e.target.value))}
          className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
        />
        <div className="flex justify-between items-center mt-2 text-xs font-bold text-slate-500">
          <span>₹0</span>
          <span>₹{maxPrice.toLocaleString('en-IN')}</span>
        </div>
      </div>
    </div>
  );
}
