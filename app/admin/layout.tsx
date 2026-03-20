"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/admin/Sidebar";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50/50 relative font-sans">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Desktop & Mobile */}
      <Sidebar 
        onClose={() => setIsSidebarOpen(false)}
        className={cn(
          "fixed inset-y-0 left-0 z-50 transform lg:static lg:translate-x-0 transition-transform duration-300",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )} 
      />

      <div className="flex flex-1 flex-col min-w-0">
        {/* Mobile Header */}
        <header className="flex h-16 items-center justify-between border-b border-slate-100 bg-white px-6 lg:hidden">
          <div className="w-24">
            <img src="/logo.png" alt="CLT Logo" className="h-full w-full object-contain" />
          </div>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-slate-500 hover:text-slate-900"
          >
            <Menu className="h-6 w-6" />
          </button>
        </header>

        <main className="flex-1 overflow-y-auto px-4 py-8 md:px-8 md:py-10">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
