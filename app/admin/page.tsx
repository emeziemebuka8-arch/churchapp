import React from "react";
import { Filter, Download } from "lucide-react";
import { StatsCard } from "@/components/admin/StatsCard";
import { ParticipantsTable } from "@/components/admin/ParticipantsTable";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-10 font-sans">
      {/* Header Section */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Participants Overview
          </h1>
          <p className="text-base md:text-lg font-medium text-slate-500">
            Manage and track church leadership training attendees.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-xl border-2 border-slate-100 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-200 transition-all active:scale-95">
            <Filter className="h-4 w-4" />
            Filter
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-700 shadow-md shadow-blue-200 transition-all active:scale-95">
            <Download className="h-4 w-4" />
            Export <span className="hidden sm:inline">to CSV</span>
          </button>
        </div>
      </div>

      {/* Stats Cards Section */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard 
          label="Total Participant's" 
          value="1,284" 
          trend="~12%" 
          trendType="positive" 
        />
        <StatsCard 
          label="Active Programs" 
          value="8" 
          subtitle="Global"
        />
        <StatsCard 
          label="Church Partners" 
          value="42" 
          trend="+3" 
          trendType="positive"
        />
        <StatsCard 
          label="Certifications" 
          value="892" 
          subtitle="Issued"
        />
      </div>

      {/* Table Section */}
      <div className="flex flex-col gap-6">
        <ParticipantsTable />
      </div>
    </div>
  );
}
