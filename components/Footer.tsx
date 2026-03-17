import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 py-10 px-6 md:px-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo and Branding */}
        <div className="flex items-center gap-3">
          <img src="/logo.jpeg" alt="Summit Logo" className="w-24 h-auto" />
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
