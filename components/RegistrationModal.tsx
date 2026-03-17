"use client";

import React from "react";
import { X, User, Mail, Phone, Building2, Upload } from "lucide-react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 py-12 md:p-8 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
      {/* Registration Card */}
      <div
        className="bg-white w-full max-w-2xl rounded-lg overflow-hidden shadow-2xl relative animate-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header */}
        <div className="bg-blue-600 p-8 pt-10 pb-12 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
          <h1 className="text-3xl font-extrabold mb-2">Leadership Training Registration</h1>
          <p className="text-blue-100 font-medium">Empowering the next generation of ministry leaders.</p>
        </div>

        {/* Form Body */}
        <div className="p-8 space-y-8 max-h-[70vh] overflow-y-auto custom-scrollbar">

          {/* Passport Photo Section */}
          <div className="space-y-4">
            <label className="text-sm font-bold text-slate-700 block uppercase tracking-wider">
              Passport Photo
            </label>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 border-2 border-dashed border-slate-200 shadow-inner">
                <User size={40} />
              </div>
              <div className="flex-1 w-full relative">
                <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-blue-400 hover:bg-blue-50/30 transition-all cursor-pointer group">
                  <div className="bg-blue-600 p-2 rounded-lg text-white mb-2 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                    <Upload size={20} />
                  </div>
                  <p className="text-sm font-bold text-slate-900 mb-1">Click to upload photo</p>
                  <p className="text-xs text-slate-400">JPG or PNG, max 5MB (Passport size preferred)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 block uppercase tracking-wider">Full Name</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-slate-50 border-0 rounded-xl py-4 pl-12 pr-4 text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 transition-all outline-none"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 block uppercase tracking-wider">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-slate-50 border-0 rounded-xl py-4 pl-12 pr-4 text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 transition-all outline-none"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 block uppercase tracking-wider">Phone Number</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                  <Phone size={18} />
                </div>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-slate-50 border-0 rounded-xl py-4 pl-12 pr-4 text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 transition-all outline-none"
                />
              </div>
            </div>

            {/* Church Name */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 block uppercase tracking-wider">Church Name</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                  <Building2 size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Grace Community Church"
                  className="w-full bg-slate-50 border-0 rounded-xl py-4 pl-12 pr-4 text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 transition-all outline-none"
                />
              </div>
            </div>
          </div>

          {/* Agreement */}
          <div className="flex items-start gap-3 py-2">
            <input
              type="checkbox"
              id="agree-modal"
              className="mt-1 w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-600 transition-all cursor-pointer"
            />
            <label htmlFor="agree-modal" className="text-xs text-slate-500 leading-normal font-medium cursor-pointer">
              I agree to receive communications regarding the Leadership Training Program and confirm that the information provided is accurate.
            </label>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 pb-2">
            <button
              onClick={onClose}
              className="flex-1 bg-white hover:bg-slate-50 border border-slate-100 text-slate-900 font-bold py-4 rounded-xl text-center transition-all active:scale-[0.98]"
            >
              Cancel
            </button>
            <button
              className="flex-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-xl shadow-xl shadow-blue-600/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              Register Now <span className="text-lg">→</span>
            </button>
          </div>



        </div>
      </div>
    </div>
  );
}
