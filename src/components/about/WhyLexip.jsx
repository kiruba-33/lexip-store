
import React from 'react';

export default function WhyLexip() {
  const points = [
    { title: "SIMPLICITY", desc: "Smart technology should feel easy to understand and use." },
    { title: "PRACTICAL AUTOMATION", desc: "Focus on useful solutions for everyday spaces." },
    { title: "MODERN DESIGN", desc: "Automation products designed to fit contemporary environments." },
    { title: "CONNECTED LIVING", desc: "Bring different smart solutions together for a more connected experience." }
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-200/60 py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-16 text-center">Why LEXIP</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {points.map((point, idx) => (
            <div key={idx} className="space-y-4">
              <div className="text-4xl lg:text-5xl font-black text-slate-200 border-b-2 border-purple-600 pb-4 inline-block">
                0{idx + 1}
              </div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">{point.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
