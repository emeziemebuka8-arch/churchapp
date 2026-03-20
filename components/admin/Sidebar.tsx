"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 



  Settings, 
  Hexagon,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
 
];

interface SidebarProps {
  className?: string;
  onClose?: () => void;
}

export function Sidebar({ className, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className={cn(
      "flex h-screen w-72 flex-col border-r border-slate-100 bg-white font-sans",
      className
    )}>
      {/* Logo Section */}
      <div className="flex items-center justify-between px-8 py-10">
        <div className="w-32">
          <img src="/logo.png" alt="CLT Logo" className="h-full w-full object-contain" />
        </div>
        {onClose && (
          <button 
            onClick={onClose}
            className="lg:hidden p-2 -mr-2 text-slate-400 hover:text-slate-900 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        )}
      </div>

      {/* Navigation Section */}
      <nav className="flex-1 space-y-2 px-4 mt-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center gap-4 rounded-xl px-4 py-3.5 text-sm font-bold transition-all duration-200",
                isActive 
                  ? "bg-blue-50 text-blue-600 shadow-sm shadow-blue-50" 
                  : "text-slate-400 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <item.icon className={cn(
                "h-5 w-5 transition-colors",
                isActive ? "text-blue-600" : "text-slate-300 group-hover:text-slate-900"
              )} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* User Profile Section */}
      <div className="mt-auto border-t border-slate-50 p-6">
        <div className="flex items-center gap-4 rounded-2xl p-2 hover:bg-slate-50 transition-colors cursor-pointer group">
          <div className="relative">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-black text-xs border-2 border-white shadow-sm ring-1 ring-emerald-50">
              AU
            </div>
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500 shadow-sm"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black text-slate-900 leading-none mb-1.5 group-hover:text-blue-600 transition-colors">Admin User</span>
            <span className="text-[11px] font-bold text-slate-400 leading-none">System Manager</span>
          </div>
        </div>
      </div>
    </div>
  );
}
