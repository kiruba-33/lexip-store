
import React from 'react';

export default function WhoWeAre() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div className="relative">
        <div className="absolute inset-0 bg-slate-200 rounded-3xl translate-x-4 translate-y-4 hidden md:block"></div>
        <img 
          src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200" 
          alt="Lexip Automation Interface" 
          className="relative w-full rounded-3xl aspect-[4/3] object-cover border border-slate-200 shadow-sm"
        />
      </div>
      <div className="space-y-6">
        <span className="block text-xs font-bold text-lexip-600 uppercase tracking-widest mb-2">WHO WE ARE</span>
        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
          Technology designed around everyday life.
        </h2>
        <div className="space-y-4 text-slate-600 font-medium text-lg leading-relaxed">
          <p>
            LEXIP focuses on smart automation solutions that bring modern technology into everyday spaces through practical, user-friendly products.
          </p>
          <p>
            From smart switching and sensing to connected home solutions, access control and gate automation, the LEXIP ecosystem is designed around making everyday interactions simpler and more connected.
          </p>
        </div>
      </div>
    </section>
  );
}
