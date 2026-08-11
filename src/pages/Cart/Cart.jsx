
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col pt-20 pb-24">
        <main className="flex-grow container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
          <div className="w-24 h-24 bg-white rounded-full shadow-sm flex items-center justify-center text-slate-300 mb-6 border border-slate-200">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-3">Your cart is empty</h1>
          <p className="text-slate-500 font-medium mb-8 max-w-sm">Looks like you haven't added any products to your cart yet.</p>
          <Link to="/products" className="bg-lexip-600 hover:bg-lexip-700 text-white font-bold px-8 py-3.5 rounded-full text-sm tracking-wide transition-colors shadow-sm uppercase">
            START SHOPPING
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-10 md:pt-16 pb-24 font-sans">
      <main className="flex-grow container mx-auto px-4 max-w-[1280px]">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <div className="lg:col-span-8 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-4 md:p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-full md:w-32 h-32 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 p-2 overflow-hidden border border-slate-100">
                  <img src={item.image} alt={item.title} className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                
                <div className="flex-grow flex flex-col h-full w-full">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <div>
                      <span className="text-[10px] font-bold text-lexip-600 uppercase tracking-widest mb-1 block">{item.brand}</span>
                      <Link to={`/product/${item.id}`} className="text-base font-bold text-slate-900 leading-snug hover:text-lexip-700 line-clamp-2">
                        {item.title}
                      </Link>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-slate-400 hover:text-red-500 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 w-full">
                    <div className="flex items-center bg-slate-100 rounded-lg border border-slate-200/60 p-1">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-sm rounded-md transition-all disabled:opacity-50"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-10 text-center font-bold text-sm text-slate-900">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-sm rounded-md transition-all"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="text-right">
                      <span className="block text-lg font-black text-slate-900">
                        ₹{(Number(item.price) * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm sticky top-28">
              <h2 className="text-xl font-black text-slate-900 tracking-tight mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center text-slate-600 font-medium">
                  <span>Subtotal</span>
                  <span className="text-slate-900 font-bold">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center text-slate-600 font-medium">
                  <span>Shipping</span>
                  <span className="text-emerald-600 font-bold">Free</span>
                </div>
                <div className="flex justify-between items-center text-slate-600 font-medium">
                  <span>Estimated Taxes</span>
                  <span className="text-slate-900 font-bold">Included</span>
                </div>
              </div>
              
              <div className="border-t border-slate-200 pt-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-slate-900">Total</span>
                  <span className="text-2xl font-black text-slate-900">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
              </div>
              
              <button className="w-full bg-lexip-600 hover:bg-lexip-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm mb-4">
                PROCEED TO CHECKOUT
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <Link to="/products" className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold py-3.5 rounded-xl flex items-center justify-center transition-colors border border-slate-200">
                CONTINUE SHOPPING
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
