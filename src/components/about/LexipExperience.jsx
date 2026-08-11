
import React from 'react';

export default function LexipExperience() {
  const steps = [
    { id: "01", title: "Connect", desc: "Bring smart devices into your space." },
    { id: "02", title: "Control", desc: "Manage everyday functions with simple interaction." },
    { id: "03", title: "Automate", desc: "Create a more convenient and connected environment." }
  ];

  return (
    <section className="space-y-16 px-4 py-8">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">Smart Technology.<br/>Simple Experience.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-slate-50 rounded-[2rem] p-10 shadow-[0_2px_12px_rgb(0,0,0,0.03)] border border-slate-100 flex flex-col relative overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="text-7xl font-black text-white absolute -top-4 -right-2 group-hover:text-lexip-50 transition-colors z-0 drop-shadow-sm">
              {step.id}
            </div>
            <div className="relative z-10 flex flex-col mt-4">
              <h3 className="text-2xl font-black text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed text-lg">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
