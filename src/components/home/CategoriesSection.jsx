import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Radio, Wifi, Layers, Zap, Network } from 'lucide-react';

const categories = [
  { id: 1, name: 'Industrial PLCs', count: '14 Models', icon: Cpu, color: 'text-blue-600', bg: 'bg-blue-100' },
  { id: 2, name: 'Sensors', count: '28 Models', icon: Radio, color: 'text-emerald-600', bg: 'bg-emerald-100' },
  { id: 3, name: 'Smart Home', count: '12 Models', icon: Wifi, color: 'text-orange-600', bg: 'bg-orange-100' },
  { id: 4, name: 'Controllers', count: '9 Models', icon: Layers, color: 'text-purple-600', bg: 'bg-purple-100' },
  { id: 5, name: 'Motors', count: '18 Models', icon: Zap, color: 'text-yellow-600', bg: 'bg-yellow-100' },
  { id: 6, name: 'Networking', count: '22 Models', icon: Network, color: 'text-cyan-600', bg: 'bg-cyan-100' },
];

export default function CategoriesSection() {
  return (
    <section>
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Explore Component Categories</h2>
          <p className="text-xs text-slate-500 mt-1">Industrial-grade certified hardware for factory integration &amp; smart homes</p>
        </div>
        <Link to="/shop" className="text-sm font-bold text-purple-600 hover:text-purple-800 transition-colors whitespace-nowrap hidden sm:block">
          View All Categories &gt;
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Link key={cat.id} to="/shop" className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center hover:border-purple-400 hover:shadow-md transition-all cursor-pointer group">
              <div className={`w-14 h-14 ${cat.bg} ${cat.color} rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">{cat.name}</h3>
              <span className="text-xs text-slate-500">{cat.count}</span>
            </Link>
          );
        })}
      </div>
      
      <Link to="/shop" className="mt-4 text-sm font-bold text-purple-600 hover:text-purple-800 transition-colors text-center block sm:hidden">
        View All Categories &gt;
      </Link>
    </section>
  );
}
