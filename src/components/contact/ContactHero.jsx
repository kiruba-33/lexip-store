
import React from 'react';

export default function ContactHero() {
  return (
    <section className="bg-slate-950 rounded-3xl px-8 py-16 lg:px-16 lg:py-20 relative overflow-hidden shadow-sm mt-4 md:mt-8 flex items-center min-h-[360px]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/10 via-slate-900/50 to-slate-950" />
      
      {/* Subtle tech grid/pattern on the right */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 hidden lg:flex items-center justify-end">
        <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#grid)" className="text-white"/>
          <circle cx="200" cy="200" r="4" className="fill-purple-400" />
          <circle cx="280" cy="120" r="3" className="fill-purple-400" />
          <circle cx="120" cy="280" r="3" className="fill-purple-400" />
          <path d="M200,200 L280,120 M200,200 L120,280" stroke="currentColor" className="text-purple-400" strokeWidth="1" strokeDasharray="4 4"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-2xl">
        <span className="block text-xs font-bold text-purple-400 uppercase tracking-widest mb-4">CONTACT LEXIP</span>
        <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
          Let's build a smarter space together.
        </h1>
        <p className="text-slate-300 font-medium text-lg leading-relaxed">
          Have a product question, automation requirement, or need help choosing the right solution? Connect with the LEXIP team and we'll help you move in the right direction.
        </p>
      </div>
    </section>
  );
}
