import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Participant {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  initials: string;
  email: string;
  phone: string;
  church: string;
  regDate: string;
}

const participants: Participant[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Youth Lead",
    initials: "SC",
    email: "sarah.chen@email.com",
    phone: "+1 (555) 012-3456",
    church: "Grace Community",
    regDate: "Oct 12, 2023",
  },
  {
    id: "2",
    name: "James Wilson",
    role: "Elder",
    initials: "JW",
    email: "j.wilson@ministry.org",
    phone: "+1 (555) 098-7654",
    church: "Redeemer Fellowship",
    regDate: "Oct 14, 2023",
  },
  {
    id: "3",
    name: "Marcus Thompson",
    role: "Worship Director",
    initials: "MT",
    email: "m.thompson@chapel.com",
    phone: "+1 (555) 234-5678",
    church: "City Chapel",
    regDate: "Oct 15, 2023",
  },
  {
    id: "4",
    name: "Elena Rodriguez",
    role: "Associate Pastor",
    initials: "ER",
    email: "e.rodriguez@firstchurch.net",
    phone: "+1 (555) 345-6789",
    church: "First Methodist",
    regDate: "Oct 16, 2023",
  },
  {
    id: "5",
    name: "David Miller",
    role: "Treasurer",
    initials: "DM",
    email: "d.miller@zion.com",
    phone: "+1 (555) 456-7890",
    church: "Zion Hill",
    regDate: "Oct 18, 2023",
  },
];

export function ParticipantsTable() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden font-sans">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50/50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-[10px] font-black tracking-[0.1em] text-slate-400 uppercase">Participant</th>
              <th className="hidden md:table-cell px-6 py-4 text-[10px] font-black tracking-[0.1em] text-slate-400 uppercase">Contact Details</th>
              <th className="hidden sm:table-cell px-6 py-4 text-[10px] font-black tracking-[0.1em] text-slate-400 uppercase">Church Affiliation</th>
              <th className="hidden lg:table-cell px-6 py-4 text-[10px] font-black tracking-[0.1em] text-slate-400 uppercase">Reg. Date</th>
              <th className="px-6 py-4 text-[10px] font-black tracking-[0.1em] text-slate-400 uppercase text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {participants.map((participant) => (
              <tr key={participant.id} className="group hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="h-10 w-10 md:h-11 md:w-11 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm ring-1 ring-slate-100">
                       <span className="text-xs font-bold text-slate-500">{participant.initials}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-900 leading-none mb-1">{participant.name}</span>
                      <span className="text-xs font-medium text-slate-400">{participant.role}</span>
                      {/* Mobile only details */}
                      <span className="text-[10px] font-medium text-slate-400 md:hidden mt-1">{participant.email}</span>
                    </div>
                  </div>
                </td>
                <td className="hidden md:table-cell px-6 py-5 whitespace-nowrap">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-slate-600 leading-none">{participant.email}</span>
                    <span className="text-xs font-medium text-slate-400">{participant.phone}</span>
                  </div>
                </td>
                <td className="hidden sm:table-cell px-6 py-5 whitespace-nowrap">
                  <span className="inline-flex items-center rounded-full bg-blue-50/50 px-3 py-1 text-[11px] font-bold text-blue-600 border border-blue-100/50">
                    {participant.church}
                  </span>
                </td>
                <td className="hidden lg:table-cell px-6 py-5 whitespace-nowrap">
                  <span className="text-sm font-semibold text-slate-600">{participant.regDate}</span>
                </td>
                <td className="px-6 py-5 whitespace-nowrap text-right">
                  <button className="text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline transition-all">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-slate-100 px-6 py-5 bg-white">
        <div className="text-sm text-slate-400 font-medium">
          Showing <span className="text-slate-900 font-bold">1</span> to <span className="text-slate-900 font-bold">5</span> of <span className="text-slate-900 font-bold">1,284</span> results
        </div>
        <div className="flex items-center gap-3">
          <button className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-300 cursor-not-allowed transition-colors" disabled>
            Previous
          </button>
          <button className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
