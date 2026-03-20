"use client";

import React from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  Download, 
  Mail, 
  Calendar, 
  Users, 
  Bell, 
  User, 
  Twitter, 
  Instagram, 
  Facebook, 
  Link as LinkIcon,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function RegistrationSuccessPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/30 font-sans">
      {/* Header */}
      <header className="w-full bg-white border-b border-slate-100 py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 group">
          <img src="/logo.png" alt="Church Logo" className="w-30 h-18 object-contain transition-transform group-hover:scale-110" />
        </Link>
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full border-2 border-white"></span>
          </button>
          <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg transition-colors">
            <User size={20} />
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 md:py-20 flex flex-col items-center text-center">
        {/* Success Icon */}
        <div className="mb-8 animate-in zoom-in duration-500">
          <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 shadow-sm border border-emerald-100">
            <CheckCircle2 size={32} strokeWidth={2.5} />
          </div>
        </div>

        {/* Success Message */}
        <div className="space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            You're registered!
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed font-medium">
            Welcome to the program! We've sent a confirmation email to your inbox with the full schedule and pre-program resources.
          </p>
        </div>

        {/* Badge Card */}
        <div className="w-full bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col md:flex-row mb-16 animate-in slide-in-from-bottom-8 duration-700">
          {/* Badge Preview */}
          <div className="md:w-[40%] bg-blue-50/50 p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-100">
            <div className="w-32 h-32 rounded-full bg-orange-100 border-4 border-white shadow-xl mb-6 overflow-hidden flex items-center justify-center relative group">
               <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=James" 
                alt="Profile" 
                className="w-full h-full object-cover"
               />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-black text-blue-900 leading-tight mb-1">James Harrison</h3>
              <p className="text-[10px] font-black tracking-[0.2em] text-blue-400 uppercase mb-6">OFFICIAL ATTENDEE</p>
              <button className="bg-blue-600 text-white text-[11px] font-bold py-3 px-6 rounded-full shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:scale-105 transition-all active:scale-95 whitespace-nowrap">
                I will be attending this Leadership Program
              </button>
            </div>
          </div>

          {/* Badge Actions */}
          <div className="flex-1 p-8 md:p-10 text-left flex flex-col justify-center">
            <div className="space-y-4 mb-8">
              <h2 className="text-2xl font-black text-slate-900">Claim Your Badge</h2>
              <p className="text-slate-500 font-medium leading-relaxed text-sm">
                Generate your personalized attendee badge to share with your community and celebrate your leadership journey.
              </p>
            </div>
            
            <button className="w-fit flex items-center gap-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-95 mb-10 group">
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              Download Badge
            </button>

            <div className="space-y-4 pt-8 border-t border-slate-50">
              <p className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">SHARE WITH YOUR NETWORK</p>
              <div className="flex gap-3">
                {[Twitter, Instagram, Facebook, LinkIcon].map((Icon, i) => (
                  <button key={i} className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-100 hover:bg-blue-50 transition-all active:scale-90">
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* What's Next Section */}
        <div className="w-full space-y-8 mb-16">
          <h2 className="text-xl font-black text-slate-900">What's next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-slate-50/50 p-8 rounded-3xl border border-slate-100 text-left hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Check Email</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">
                We sent your registration confirmation and receipt. Check your spam folder if you don't see it.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-50/50 p-8 rounded-3xl border border-slate-100 text-left hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                <Calendar size={20} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Save the Date</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">
                The program begins on October 18th. Add the orientation session to your calendar.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-50/50 p-8 rounded-3xl border border-slate-100 text-left hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                <Users size={20} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Join the Community</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">
                Connect with fellow leaders in our private Slack workspace before the first session.
              </p>
            </div>
          </div>
        </div>

        {/* Support */}
        <p className="text-slate-400 text-sm font-medium mb-12">
          Have questions? <Link href="/contact" className="text-blue-600 hover:underline font-bold">Contact the Program Office</Link>
        </p>

        {/* Footer */}
        <footer className="pt-12 border-t border-slate-100 w-full text-slate-400 text-xs font-bold tracking-tight">
          © {new Date().getFullYear()} Achievers Leadership Program. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
