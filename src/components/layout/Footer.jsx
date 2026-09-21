import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white py-12 md:pb-12 pb-28 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
        
        {/* Main Grid: 1 col (Mobile), 2 cols (Tablet), 4 cols (Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Col 1: Brand */}
          <div className="flex flex-col">
            <div className="mb-6">
              <img 
                src="/images/logo/lexip-logo.jpeg" 
                alt="Lexip Logo" 
                className="w-[120px] md:w-[140px] object-contain mix-blend-multiply"
              />
            </div>
            <p className="text-slate-700 font-medium leading-relaxed max-w-sm">
              Smart automation solutions designed for modern living.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-700 font-medium hover:text-lexip-600 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-700 font-medium hover:text-lexip-600 transition-colors">About</Link></li>
              <li><Link to="/products" className="text-slate-700 font-medium hover:text-lexip-600 transition-colors">Products</Link></li>
              <li><Link to="/contact" className="text-slate-700 font-medium hover:text-lexip-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Policies */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-widest">Policies</h3>
            <ul className="space-y-4">
              <li><Link to="/terms-and-conditions" className="text-slate-700 font-medium hover:text-lexip-600 transition-colors">Terms and Conditions</Link></li>
              <li><Link to="/privacy-and-policy" className="text-slate-700 font-medium hover:text-lexip-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/return-policy" className="text-slate-700 font-medium hover:text-lexip-600 transition-colors">Return Policy</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-widest">Contact</h3>
            <div className="space-y-4">
              <div>
                <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">Phone</span>
                <span className="text-slate-900 font-bold">+91 979059 8203</span>
              </div>
              <div>
                <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">Email</span>
                <a href="mailto:Lexiptechnology@gmail.com" className="text-slate-900 font-bold hover:text-lexip-600 transition-colors">
                  Lexiptechnology@gmail.com
                </a>
              </div>
              <div>
                <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">Locations</span>
                <span className="text-slate-900 font-bold block">Theni</span>
                <span className="text-slate-900 font-bold block">Coimbatore</span>
                <span className="text-slate-900 font-bold block">Dindigul</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright Row */}
        <div className="border-t border-slate-200 mt-16 pt-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-slate-600">
            &copy; 2026 LEXIP Automation Store. All rights reserved. Developed by{" "}
            <a
              href="https://www.navipromotions.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lexip-600 transition-colors"
            >
              Navi Promotions
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
