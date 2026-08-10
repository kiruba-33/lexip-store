
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Package, ShoppingBag, Settings, LogOut, FileText, Shield, Bell } from 'lucide-react';
import ContactInfo from '../../components/contact/ContactInfo';
import ContactForm from '../../components/contact/ContactForm';
export default function Profile() {
  const { totalItems } = useCart();
  
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-10 md:pt-16 pb-24 font-sans">
      <main className="flex-grow container mx-auto px-4 max-w-[1280px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDEBAR */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Header Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full border-4 border-slate-50 overflow-hidden shadow-sm mb-4">
                <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Profile Avatar" className="w-full h-full object-cover" />
              </div>
              <span className="text-[10px] font-bold text-purple-600 uppercase tracking-widest mb-1">PROFILE</span>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">LEXIP Customer</h1>
              <p className="text-slate-500 font-medium text-sm mt-1">customer@example.com</p>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4 px-2">Quick Actions</h3>
              <div className="space-y-1">
                <Link to="/products" className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-purple-700 transition-colors font-bold text-sm">
                  <ShoppingBag className="w-5 h-5 text-slate-400" />
                  Browse Products
                </Link>
                <Link to="/cart" className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-purple-700 transition-colors font-bold text-sm">
                  <Package className="w-5 h-5 text-slate-400" />
                  View Cart
                </Link>
                <Link to="/contact" className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-purple-700 transition-colors font-bold text-sm">
                  <Settings className="w-5 h-5 text-slate-400" />
                  Contact LEXIP
                </Link>
              </div>
            </div>

            {/* Account Preferences */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4 px-2">Preferences</h3>
              <div className="space-y-1">
                <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 text-slate-700 transition-colors font-medium text-sm text-left">
                  <Bell className="w-5 h-5 text-slate-400" />
                  Notifications
                </button>
                <Link to="/terms" className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 text-slate-700 transition-colors font-medium text-sm">
                  <FileText className="w-5 h-5 text-slate-400" />
                  Terms & Conditions
                </Link>
                <Link to="/privacy" className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 text-slate-700 transition-colors font-medium text-sm">
                  <Shield className="w-5 h-5 text-slate-400" />
                  Privacy Policy
                </Link>
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl bg-white border border-slate-200 text-slate-500 hover:text-red-600 hover:bg-red-50 hover:border-red-100 transition-colors font-bold text-sm shadow-sm">
              <LogOut className="w-4 h-4" />
              LOG OUT
            </button>

          </div>

          {/* RIGHT MAIN CONTENT */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Overview Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Orders</span>
                <span className="text-3xl font-black text-slate-900">0</span>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Cart Items</span>
                <span className="text-3xl font-black text-slate-900">{totalItems}</span>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Account Status</span>
                <span className="text-lg font-bold text-emerald-600 flex items-center gap-1 mt-1">
                  Active
                </span>
              </div>
            </div>

            {/* Personal Info */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-black text-slate-900 tracking-tight">Personal Information</h2>
                <button className="text-xs font-bold text-purple-600 uppercase tracking-widest hover:text-purple-800 transition-colors">Edit</button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Full Name</span>
                  <span className="text-sm font-bold text-slate-900">LEXIP Customer</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Email Address</span>
                  <span className="text-sm font-bold text-slate-900">customer@example.com</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Phone Number</span>
                  <span className="text-sm font-bold text-slate-900">+91 90000 00000</span>
                </div>
              </div>
            </div>

            {/* My Orders */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm min-h-[300px] flex flex-col">
              <h2 className="text-lg font-black text-slate-900 tracking-tight mb-8">My Orders</h2>
              
              <div className="flex-grow flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-4 border border-slate-100">
                  <Package className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">No orders yet</h3>
                <p className="text-slate-500 font-medium text-sm max-w-sm mb-6">
                  Your orders will appear here after you complete a purchase.
                </p>
                <Link to="/products" className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs tracking-wide transition-colors shadow-sm uppercase">
                  START SHOPPING
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* MOBILE & TABLET CONTACT SECTION */}
        <div className="block lg:hidden mt-16 pt-12 border-t border-slate-200/60">
          <div className="mb-8 px-2">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-3">Contact LEXIP</h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              Have a product question, automation requirement, or need help choosing the right solution? Connect with the LEXIP team.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <ContactInfo />
            </div>
            
            <ContactForm />
          </div>
        </div>

      </main>
    </div>
  );
}
