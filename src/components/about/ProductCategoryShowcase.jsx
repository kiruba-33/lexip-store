
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ProductCategoryShowcase() {
  const categories = [
    "In-Wall Retrofit",
    "Smart Sensors",
    "Metal Touch",
    "Touch Switches",
    "Smart Door Locks",
    "Gate Automation"
  ];

  return (
    <section className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Built for Different Spaces.<br/>Designed to Work Together.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-slate-100 rounded-2xl p-6 lg:p-8 flex flex-col items-center justify-center text-center aspect-[4/3] group hover:bg-purple-50 transition-colors border border-slate-200/60">
            <h3 className="font-black text-lg lg:text-xl text-slate-900 mb-4 group-hover:text-purple-900 transition-colors">{cat}</h3>
            <Link to="/products" className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 uppercase tracking-widest hover:text-purple-800 transition-colors">
              EXPLORE PRODUCTS <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
