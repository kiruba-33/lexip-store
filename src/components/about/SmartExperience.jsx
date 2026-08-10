
import React from 'react';

export default function SmartExperience() {
  const steps = [
    { num: "01", title: "CONNECT", desc: "Bring smart products into your space." },
    { num: "02", title: "CONTROL", desc: "Interact with everyday functions with simple control." },
    { num: "03", title: "AUTOMATE", desc: "Create a more convenient and connected environment." }
  ];

  return (
    <section className="space-y-16">
      <div className="max-w-3xl">
        <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Smart Technology.<br/>Simple Experience.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {steps.map((step, idx) => (
          <div key={idx} className="relative pt-8 border-t border-slate-200">
            <span className="absolute -top-4 bg-white pr-4 text-xs font-black text-purple-600 tracking-widest">
              STEP {step.num}
            </span>
            <h3 className="text-xl font-black text-slate-900 mb-3">{step.title}</h3>
            <p className="text-slate-600 font-medium leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
