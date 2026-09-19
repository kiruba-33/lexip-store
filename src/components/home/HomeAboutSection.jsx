import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HomeAboutSection() {
  const highlights = [
    "Smart Home Automation",
    "Smart Switching & Sensing",
    "Gate & Access Automation"
  ];

  return (
    <section className="w-full bg-white rounded-3xl p-6 sm:p-8 lg:p-12 border border-slate-200 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Left Side: Premium Image Area */}
        <div className="relative w-full order-1 lg:order-1 group">
          <div className="absolute inset-0 bg-slate-100 rounded-2xl translate-x-3 translate-y-3 hidden md:block transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"></div>
          <img
            src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200"
            alt="Lexip Automation Interface"
            className="relative w-full rounded-2xl aspect-[4/3] object-cover border border-slate-200 shadow-sm z-10"
          />
        </div>

        {/* Right Side: Content Area */}
        <div className="space-y-6 order-2 lg:order-2">
          <div className="space-y-2">
            <span className="inline-block text-[11px] font-bold text-[#e62a27] uppercase tracking-[0.2em]">
              ABOUT LEXIP
            </span>
            <h2 className="text-[28px] md:text-[36px] font-black text-slate-900 tracking-tight leading-tight">
              Technology designed around everyday life.
            </h2>
          </div>
          
          <div className="text-slate-500 font-medium text-[15px] leading-relaxed space-y-4">
            <p>
              LEXIP focuses on smart automation solutions that bring modern technology into everyday spaces through practical, user-friendly products.
            </p>
            <p>
              From smart switching and sensing to connected home solutions, our ecosystem is designed to make interactions simpler and more connected.
            </p>
          </div>
          
          <ul className="space-y-3 pt-2">
            {highlights.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="w-[18px] h-[18px] text-[#e62a27] flex-shrink-0" />
                <span className="text-[14px] font-bold text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-bold text-white bg-slate-900 px-7 py-3.5 rounded-xl hover:bg-[#e62a27] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
            >
              Explore About Us
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
}
