
import React from 'react';

export default function WhatWeDo() {
  const capabilities = [
    { title: "SMART HOME AUTOMATION", desc: "Solutions designed to bring connected control into everyday living spaces." },
    { title: "SMART SWITCHING", desc: "Modern touch-based switching solutions for contemporary interiors." },
    { title: "SMART SENSING", desc: "Sensors designed to help spaces respond to activity and everyday needs." },
    { title: "SMART ACCESS", desc: "Smart door-lock and access-oriented solutions." },
    { title: "GATE AUTOMATION", desc: "Automation solutions for swing, sliding and curtain/gate applications." }
  ];

  return (
    <section className="space-y-12">
      <div className="max-w-2xl">
        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">What We Do</h2>
        <p className="text-xl text-slate-500 font-medium">Practical automation for modern spaces.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((cap, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 mb-3 tracking-widest uppercase">{cap.title}</h3>
            <p className="text-slate-600 font-medium leading-relaxed">{cap.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
