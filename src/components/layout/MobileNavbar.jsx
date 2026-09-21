import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, Lock, RotateCcw } from 'lucide-react';

export default function MobileNavbar() {
  return (
    <header className="block lg:hidden sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="flex flex-col">
        {/* Row 1: Header */}
        <div className="flex items-center p-3 gap-4 w-full">
          {/* Left Side: Brand */}
          <div className="shrink-0">
            <img 
              src="/images/logo/lexip-logo.jpeg" 
              alt="Lexip Logo" 
              className="h-8 object-contain"
            />
          </div>
          
          {/* Right Side: Quick Links */}
          <div className="flex-1 flex items-center justify-start gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <Link to="/terms-and-conditions" className="bg-slate-100 rounded-full px-3 py-1.5 text-[11px] font-bold text-slate-700 whitespace-nowrap flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-slate-500" />
              <span>Terms &amp; Conditions</span>
            </Link>
            <Link to="/privacy-and-policy" className="bg-slate-100 rounded-full px-3 py-1.5 text-[11px] font-bold text-slate-700 whitespace-nowrap flex items-center gap-1">
              <Lock className="w-4 h-4 text-slate-500" />
              <span>Privacy Policy</span>
            </Link>
            <Link to="/return-policy" className="bg-slate-100 rounded-full px-3 py-1.5 text-[11px] font-bold text-slate-700 whitespace-nowrap flex items-center gap-1">
              <RotateCcw className="w-4 h-4 text-slate-500" />
              <span>Return Policy</span>
            </Link>
          </div>
        </div>
        
        {/* Row 2: Search */}
        <div className="px-3 pb-3">
          <div className="relative flex items-center w-full">
            <Search className="absolute left-3 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search PLCs, sensors, gateways..." 
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 font-medium text-sm rounded-xl py-2.5 pl-9 pr-4 focus:outline-none focus:ring-2 focus:ring-lexip-600/20 focus:border-lexip-600 transition-all"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
