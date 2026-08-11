
import React from 'react';

export default function ServiceCoverage() {
  return (
    <section className="bg-slate-100 rounded-3xl p-10 lg:p-16 border border-slate-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-8">Serving Our Customers</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-4 text-xl font-bold text-slate-700">
              <div className="w-2 h-2 rounded-full bg-lexip-600"></div> Theni
            </li>
            <li className="flex items-center gap-4 text-xl font-bold text-slate-700">
              <div className="w-2 h-2 rounded-full bg-lexip-600"></div> Coimbatore
            </li>
            <li className="flex items-center gap-4 text-xl font-bold text-slate-700">
              <div className="w-2 h-2 rounded-full bg-lexip-600"></div> Dindigul
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
          <div>
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">DIRECT CONTACT</span>
            <span className="text-xl font-black text-slate-900">+91 979059 8203</span>
          </div>
        </div>
      </div>
    </section>
  );
}
