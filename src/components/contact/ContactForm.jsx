
import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-10 lg:p-14 shadow-[0_2px_12px_rgb(0,0,0,0.04)] border border-slate-200 text-center flex flex-col items-center justify-center min-h-[500px]">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-2">Thank you for contacting LEXIP.</h3>
        <p className="text-slate-500 font-medium">We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-[0_2px_12px_rgb(0,0,0,0.04)] border border-slate-200">
      <div className="mb-10">
        <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2">Send an Enquiry</h2>
        <p className="text-slate-500 font-medium text-sm">Tell us what you're looking for and we'll help you find the right solution.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">FULL NAME</label>
            <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 transition-colors" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">EMAIL ADDRESS</label>
            <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 transition-colors" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">PHONE NUMBER</label>
            <input required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 transition-colors" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">ENQUIRY TYPE</label>
            <select required defaultValue="" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 transition-colors appearance-none">
              <option value="" disabled>Select an option...</option>
              <option value="Product Enquiry">Product Enquiry</option>
              <option value="Product Information">Product Information</option>
              <option value="Automation Requirement">Automation Requirement</option>
              <option value="Installation / Support">Installation / Support</option>
              <option value="General Enquiry">General Enquiry</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-widest">MESSAGE</label>
          <textarea required rows="5" placeholder="Tell us how we can help..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 transition-colors resize-none"></textarea>
        </div>

        <div className="pt-2">
          <button type="submit" className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white font-bold px-10 py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm">
            SEND ENQUIRY
          </button>
          <p className="text-xs font-medium text-slate-400 mt-4">
            Your enquiry details are used only to respond to your request.
          </p>
        </div>
      </form>
    </div>
  );
}
