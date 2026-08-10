import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useState } from 'react';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col relative">
      {/* Image Wrapper */}
      <div className="bg-slate-50 rounded-xl p-3 mb-3 relative overflow-hidden flex items-center justify-center h-48">
        <div className="w-full h-full flex items-center justify-center">
          <img src={product.image} alt={product.title} className="w-full h-full object-contain mix-blend-multiply" />
        </div>
        
        {/* Badges */}
        
        <div className="absolute bottom-2 left-2 bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded z-10 uppercase tracking-wider">
          {product.brand}
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col flex-grow">

        
        <h3 className="text-sm font-extrabold text-slate-900 line-clamp-2 leading-snug mb-4">
          {product.title}
        </h3>
        
        <div className="mt-auto flex items-center justify-end">
          
          <button 
            onClick={handleAdd}
            className={`${added ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/30' : 'bg-purple-600 hover:bg-purple-700 shadow-purple-600/30'} text-white px-4 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1 transition-all shadow-sm w-[72px] justify-center`}
          >
            {added ? (
              <><Check className="w-3.5 h-3.5" /> Added</>
            ) : (
              <><ShoppingCart className="w-3.5 h-3.5" /> Add</>
            )}
          </button>

        </div>
      </div>
    </div>
  );
}
