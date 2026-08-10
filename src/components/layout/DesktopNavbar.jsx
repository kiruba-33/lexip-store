import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, Package, ShieldCheck, Headset, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function DesktopNavbar() {
  const location = useLocation();
  const { totalItems } = useCart();
  const isProductsActive = location.pathname === '/shop' || location.pathname === '/products' || location.pathname.startsWith('/product/');

  return (
    <header className="hidden lg:block sticky top-0 z-50 flex flex-col font-sans shadow-sm">
      {/* TIER 2: Unified Main Navigation Row */}
      <div className="bg-white/95 backdrop-blur-md px-4 border-b border-slate-200 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="container mx-auto h-20 flex items-center justify-between">
          
          {/* LEFT SECTION: Brand + Menu */}
          <div className="flex items-center gap-6 xl:gap-8 shrink-0">
            {/* Brand */}
            <div className="shrink-0">
              <img 
                src="/images/logo/lexip-logo.jpeg" 
                alt="Lexip Logo" 
                className="h-8 md:h-10 object-contain"
              />
            </div>

            {/* Menu */}
            <nav className="flex items-center bg-slate-100 p-1 rounded-full shadow-inner border border-slate-200/60">
              <Link 
                to="/" 
                className={`px-4 xl:px-5 py-2 rounded-full font-bold text-sm transition-all ${location.pathname === '/' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'}`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`px-4 xl:px-5 py-2 rounded-full font-bold text-sm transition-all ${location.pathname === '/about' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'}`}
              >
                About
              </Link>
              <Link 
                to="/shop" 
                className={`px-4 xl:px-5 py-2 rounded-full font-bold text-sm transition-all ${isProductsActive ? 'bg-purple-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'}`}
              >
                Products
              </Link>
              <Link 
                to="/contact" 
                className={`px-4 xl:px-5 py-2 rounded-full font-bold text-sm transition-all ${location.pathname === '/contact' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'}`}
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* CENTER SECTION: Search Bar */}
          <div className="flex-1 max-w-2xl mx-4 xl:mx-8">
            <div className="relative flex items-center w-full group">
              <Search className="absolute left-4 w-5 h-5 text-slate-400 group-focus-within:text-purple-600 transition-colors" />
              <input 
                type="text" 
                placeholder="Search PLCs, sensors, gateways..." 
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 font-medium rounded-full py-2.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-all hover:bg-white hover:shadow-sm"
              />
            </div>
          </div>

          {/* RIGHT SECTION: Actions + Profile */}
          <div className="flex items-center gap-4 xl:gap-6 shrink-0">
            <Link to="/orders" className="flex flex-col items-center text-slate-500 hover:text-purple-600 transition-colors group">
              <Package className="w-5 h-5 mb-1 group-hover:-translate-y-0.5 transition-transform" />
              <span className="text-[10px] font-bold">Orders</span>
            </Link>
            
            

            <Link to="/cart" className="hidden lg:flex flex-col items-center text-slate-500 hover:text-purple-600 transition-colors relative group">
              <div className="relative">
                <ShoppingCart className="w-5 h-5 mb-1 group-hover:-translate-y-0.5 transition-transform" />
                {totalItems > 0 && <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center border-2 border-white shadow-sm">{totalItems}</span>}
              </div>
              <span className="text-[10px] font-bold">Cart</span>
            </Link>

            <Link to="/profile" className={`w-10 h-10 rounded-full border-2 overflow-hidden cursor-pointer hover:border-purple-400 transition-colors shadow-sm ml-2 ${location.pathname === '/profile' ? 'border-purple-600 ring-2 ring-purple-600/20' : 'border-slate-200'}`}>
              <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User Avatar" className="w-full h-full object-cover" />
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
