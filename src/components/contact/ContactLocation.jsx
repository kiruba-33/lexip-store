
import React from 'react';
import { MapPin } from 'lucide-react';

export default function ContactLocation() {
  return (
    <section className="bg-slate-950 rounded-[2rem] p-10 lg:p-16 shadow-sm border border-slate-800">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
        
        <div>
          <h2 className="text-2xl font-black text-white tracking-tight mb-2">Serving Our Customers</h2>
          <p className="text-slate-400 font-medium mb-8">Proudly serving customers across:</p>
          
          <div className="flex items-center gap-4 text-white font-bold text-lg">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-lexip-400" /> THENI</span>
            <span className="text-slate-700">&middot;</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-lexip-400" /> COIMBATORE</span>
            <span className="text-slate-700">&middot;</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-lexip-400" /> DINDIGUL</span>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:border-l md:border-slate-800 md:pl-12 w-full md:w-auto">
          <div>
            <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">DIRECT CONTACT</span>
            <span className="text-lg font-bold text-white">+91 979059 8203</span>
          </div>
        </div>

      </div>
    </section>
  );
}
