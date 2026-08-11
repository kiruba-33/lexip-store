
import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutCTA() {
  return (
    <section className="bg-white rounded-3xl p-12 lg:p-20 text-center border border-slate-200 shadow-sm">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
          Ready to Make Your Space Smarter?
        </h2>
        <p className="text-lg font-medium text-slate-600">
          Explore the LEXIP product ecosystem and discover smart solutions designed for modern living.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/products" className="w-full sm:w-auto inline-flex items-center justify-center bg-lexip-600 text-white font-bold px-8 py-3.5 rounded-full text-sm tracking-wide hover:bg-lexip-700 transition-colors shadow-sm uppercase">
            EXPLORE PRODUCTS
          </Link>
          <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-slate-700 font-bold px-8 py-3.5 rounded-full text-sm tracking-wide hover:bg-slate-50 border border-slate-200 transition-colors shadow-sm uppercase">
            CONTACT LEXIP
          </Link>
        </div>
      </div>
    </section>
  );
}
