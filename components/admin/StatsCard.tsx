import React from "react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  label: string;
  value: string;
  trend?: string;
  trendType?: "positive" | "negative" | "neutral";
  subtitle?: string;
}

export function StatsCard({ label, value, trend, trendType = "neutral", subtitle }: StatsCardProps) {
  return (
    <div className="flex flex-col gap-4 md:gap-6 rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 font-sans">
      <div className="text-[10px] font-black tracking-[0.1em] text-slate-400 uppercase">
        {label}
      </div>
      <div className="flex items-baseline justify-between">
        <div className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
          {value}
        </div>
        <div className="flex items-center gap-2">
          {trend && (
            <div className={cn(
              "text-[11px] font-black px-2 py-0.5 rounded-full",
              trendType === "positive" && "text-emerald-600 bg-emerald-50/50",
              trendType === "negative" && "text-rose-600 bg-rose-50/50",
              trendType === "neutral" && "text-slate-400 bg-slate-50"
            )}>
              {trend}
            </div>
          )}
          {subtitle && (
            <div className="text-[11px] font-bold text-slate-300 italic">
              {subtitle}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
