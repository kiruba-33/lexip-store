import React from 'react';

export default function AboutHero() {
  return (
    <section className="bg-slate-950 rounded-3xl p-8 md:p-10 lg:p-20 relative overflow-hidden flex flex-col justify-center min-h-[300px] md:min-h-[400px]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/50 to-slate-950" />
      
      <div className="relative z-10 max-w-3xl">
        <span className="block text-xs font-bold text-purple-400 uppercase tracking-widest mb-4">ABOUT LEXIP</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
          Smart Technology.<br/>Simpler Living.
        </h1>
        <p className="text-lg lg:text-xl font-medium text-slate-300 leading-relaxed max-w-2xl">
          LEXIP brings smart automation solutions together to make everyday spaces more connected, convenient, and intuitive.
        </p>
      </div>
    </section>
  );
}
