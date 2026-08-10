
import React from 'react';
import { Settings, Wifi, ToggleLeft, Lock, Wrench } from 'lucide-react';

export default function ExpertiseSection() {
  const expertise = [
    { title: "In-Wall Retrofit Series", icon: Settings },
    { title: "Smart Sensors", icon: Wifi },
    { title: "Metal Touch Switches", icon: ToggleLeft },
    { title: "Smart Door Locks", icon: Lock },
    { title: "Gate Automation", icon: Wrench }
  ];

  return (
    <section>
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4">Our Expertise</h2>
        <p className="text-xl text-slate-500 font-medium">Premium automation solutions for modern spaces.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
        {expertise.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col items-center text-center justify-center min-h-[180px] hover:border-purple-300 transition-colors">
              <Icon className="w-8 h-8 text-slate-700 mb-4" strokeWidth={1.5} />
              <h3 className="text-sm font-bold text-slate-900 leading-snug">{item.title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
