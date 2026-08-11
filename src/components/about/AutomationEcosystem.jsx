
import React from 'react';
import { Box, Radio, ToggleLeft, ToggleRight, Lock, Wrench, Plug, Home } from 'lucide-react';

export default function AutomationEcosystem() {
  const categories = [
    { name: "In-Wall Retrofit Series", desc: "Smart modules for existing wiring.", icon: Box },
    { name: "Smart Sensors", desc: "Environment and motion detection.", icon: Radio },
    { name: "Metal Touch", desc: "Premium metal switching panels.", icon: ToggleRight },
    { name: "LEXIP Touch Switches", desc: "Glass-finish capacitive touch.", icon: ToggleLeft },
    { name: "Smart Door Locks", desc: "Secure digital access control.", icon: Lock },
    { name: "Gate Automation", desc: "Heavy-duty entry solutions.", icon: Wrench },
    { name: "Smart Plugs", desc: "Connected appliance control.", icon: Plug },
    { name: "Home Automation", desc: "Centralized smart ecosystems.", icon: Home }
  ];

  return (
    <section className="bg-slate-900 rounded-3xl p-10 lg:p-20 text-white">
      <div className="max-w-3xl mb-16">
        <h2 className="text-3xl lg:text-5xl font-black tracking-tight leading-tight mb-6">
          One Ecosystem.<br/>Multiple Possibilities.
        </h2>
        <p className="text-lg lg:text-xl text-slate-400 font-medium leading-relaxed">
          From everyday switching and sensing to access and gate automation, LEXIP brings multiple smart solutions into one broader automation ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:bg-slate-800 transition-colors">
              <Icon className="w-8 h-8 text-lexip-400 mb-4" strokeWidth={1.5} />
              <h3 className="font-bold text-white mb-2">{cat.name}</h3>
              <p className="text-sm text-slate-400 font-medium">{cat.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
