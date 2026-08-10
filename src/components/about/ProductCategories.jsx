
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Radio, ToggleLeft, ToggleRight, Lock, Wrench, Plug, Home } from 'lucide-react';

export default function ProductCategories() {
  const categories = [
    { name: "In-Wall Retrofit", desc: "Turn existing wiring smart.", icon: Box },
    { name: "Smart Sensors", desc: "Real-time environment monitoring.", icon: Radio },
    { name: "Metal Touch", desc: "Premium touch control panels.", icon: ToggleRight },
    { name: "Touch Switches", desc: "Modern glass interfaces.", icon: ToggleLeft },
    { name: "Smart Door Locks", desc: "Secure biometric access.", icon: Lock },
    { name: "Gate Automation", desc: "Heavy-duty swing and sliding motors.", icon: Wrench },
    { name: "Smart Plugs", desc: "Instant appliance control.", icon: Plug },
    { name: "Home Automation", desc: "Comprehensive ecosystem hubs.", icon: Home },
  ];

  return (
    <section className="space-y-12 px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Our Ecosystem</h2>
          <p className="text-slate-500 mt-2 font-medium text-lg">Premium hardware designed for comprehensive smart living.</p>
        </div>
        <Link to="/shop" className="shrink-0 text-sm font-bold text-purple-600 hover:text-purple-800 transition-colors bg-purple-50 hover:bg-purple-100 px-6 py-3 rounded-full flex items-center gap-2">
          Explore Products &rarr;
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <Link key={idx} to="/shop" className="bg-white rounded-[1.5rem] shadow-sm p-6 border border-slate-200 hover:border-purple-400 hover:shadow-md transition-all group flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-slate-50 text-slate-700 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:text-purple-600 group-hover:bg-purple-50 transition-all shadow-[0_2px_10px_rgb(0,0,0,0.03)] border border-slate-100">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">{cat.name}</h3>
              <p className="text-xs text-slate-500 font-medium">{cat.desc}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
