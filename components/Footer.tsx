import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 py-10 px-6 md:px-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo and Branding */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-blue-600 rotate-45 flex items-center justify-center rounded-sm overflow-hidden">
            <div className="w-full h-[2px] bg-white -rotate-45 relative top-[0.5px]"></div>
          </div>
          <span className="font-bold text-lg text-white tracking-tight">Grace Leadership</span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium">
          <Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-blue-400 transition-colors">Contact Us</Link>
        </nav>

        {/* Copyright */}
        <div className="text-sm text-slate-500">
          © {new Date().getFullYear()} Grace Leadership Program. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
