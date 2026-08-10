import React from 'react';
import { Truck, ShieldCheck, Headphones } from 'lucide-react';

export default function WhyLexip() {
  return (
    <section>
      <div className="bg-slate-900 text-white rounded-3xl p-8 lg:p-12 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-14 h-14 bg-purple-900/30 text-purple-400 rounded-2xl flex items-center justify-center mb-4">
              <Truck className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold mb-2 tracking-tight">Global Express Logistics</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Fast and reliable shipping to over 50 countries with real-time tracking.</p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-14 h-14 bg-purple-900/30 text-purple-400 rounded-2xl flex items-center justify-center mb-4">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold mb-2 tracking-tight">3-Year Factory Warranty</h3>
            <p className="text-sm text-slate-400 leading-relaxed">All industrial hardware comes with guaranteed quality and replacement policies.</p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-14 h-14 bg-purple-900/30 text-purple-400 rounded-2xl flex items-center justify-center mb-4">
              <Headphones className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold mb-2 tracking-tight">24/7 Field Engineering</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Expert technical support ready to assist you with installation and configuration.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
