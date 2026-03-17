"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useModal } from "./ModalProvider";

export function Navbar({ onRegisterClick }: { onRegisterClick?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const { openRegistration } = useModal();

  const handleRegisterClick = onRegisterClick || openRegistration;

  return (
    <header className="w-full bg-white/40 backdrop-blur-md py-4 px-8 md:px-12 flex items-center justify-between sticky top-0 z-50 transition-all border-b border-white/20">
      <div className="flex items-center gap-2">
        {/* Logo SVG */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/logo.png"
            alt="Summit Logo"
            className="w-28 h-12 transition-transform group-hover:rotate-6"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
        <Link href="/speakers" className="hover:text-blue-600 transition-colors">Speakers</Link>
        <button 
          onClick={handleRegisterClick}
          className="bg-blue-600 text-white px-5 py-2.5 rounded-md hover:bg-blue-700 transition-colors font-semibold shadow-md "
        >
          Register Now
        </button>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-slate-900 p-2 hover:bg-slate-100 rounded-lg transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-slate-100 shadow-xl md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col p-6 gap-4 justify-center items-center">
            <Link
              href="/"
              className="text-lg font-semibold text-slate-900 py-2 border-b border-slate-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg font-semibold text-slate-900 py-2 border-b border-slate-50"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/speakers"
              className="text-lg font-semibold text-slate-900 py-2 border-b border-slate-50"
              onClick={() => setIsOpen(false)}
            >
              Speakers
            </Link>
            <button
              onClick={() => {
                setIsOpen(false);
                handleRegisterClick();
              }}
              className="bg-blue-600 text-white text-center py-4 px-8 rounded-xl font-bold text-lg shadow-lg shadow-blue-600/20 active:scale-95 transition-all mt-2 w-full"
            >
              Register Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
