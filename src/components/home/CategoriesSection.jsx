import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Radio, ToggleRight, Fingerprint, Lock, Wrench, Plug, Home } from 'lucide-react';

const categories = [
  { id: 1, name: 'In-Wall Retrofit', sub: 'Smart Modules', icon: Package, color: 'bg-blue-50 text-blue-600' },
  { id: 2, name: 'Smart Sensors', sub: 'Motion & Radar', icon: Radio, color: 'bg-emerald-50 text-emerald-600' },
  { id: 3, name: 'Metal Touch', sub: 'Premium Panels', icon: ToggleRight, color: 'bg-slate-100 text-slate-700' },
  { id: 4, name: 'Touch Switches', sub: 'Glass Finish', icon: Fingerprint, color: 'bg-purple-50 text-purple-600' },
  { id: 5, name: 'Smart Door Locks', sub: 'Access Control', icon: Lock, color: 'bg-rose-50 text-rose-600' },
  { id: 6, name: 'Gate Automation', sub: 'Heavy Duty', icon: Wrench, color: 'bg-amber-50 text-amber-600' },
  { id: 7, name: 'Smart Plugs', sub: 'Appliance Control', icon: Plug, color: 'bg-cyan-50 text-cyan-600' },
  { id: 8, name: 'Home Automation', sub: 'Ecosystems', icon: Home, color: 'bg-indigo-50 text-indigo-600' }
];

export default function CategoriesSection() {
  return (
    <section>
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Explore Component Categories</h2>
          <p className="text-xs text-slate-500 mt-1">Industrial-grade certified hardware for factory integration &amp; smart homes</p>
        </div>
        <Link to="/shop" className="text-sm font-bold text-lexip-600 hover:text-lexip-800 transition-colors whitespace-nowrap hidden sm:block">
          View All Categories &gt;
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Link key={cat.id} to="/shop" className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center hover:border-lexip-400 hover:shadow-md transition-all cursor-pointer group">
              <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">{cat.name}</h3>
              <span className="text-xs text-slate-500">{cat.sub}</span>
            </Link>
          );
        })}
      </div>
      
      <Link to="/shop" className="mt-4 text-sm font-bold text-lexip-600 hover:text-lexip-800 transition-colors text-center block sm:hidden">
        View All Categories &gt;
      </Link>
    </section>
  );
}
