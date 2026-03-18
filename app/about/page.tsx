import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Users, BookOpen, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 w-full">
        {/* ... (About Content) ... */}
        <div className="flex-1 w-full text-left space-y-8">
          <div className="space-y-4">
            <h2 className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2">
              About the Program
            </h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              THE BUILDERS HANDS
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed max-w-xl font-medium">
              The Achievers Leadership Retreat is meant to transform willing hands into effective, disciplined, and spiritually grounded vessels for impactful service.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-100/60 p-3 rounded-xl mt-1 text-blue-600 shadow-sm border border-blue-100">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-slate-900 font-bold text-lg mb-1">Our Purpose</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  Rekindling Passion and Commitment. Reigniting  the fire for service, reminding leaders of their calling and responsibility.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-100/60 p-3 rounded-xl mt-1 text-blue-600 shadow-sm border border-blue-100">
                <BookOpen size={24} />
              </div>
              <div>
                <h3 className="text-slate-900 font-bold text-lg mb-1">Key Topics</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  Strategic planning, ministerial ethics, spiritual authority and commitment
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-100/60 p-3 rounded-xl mt-1 text-blue-600 shadow-sm border border-blue-100">
                <Target size={24} />
              </div>
              <div>
                <h3 className="text-slate-900 font-bold text-lg mb-1">Target Audience</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  Pastors, departmental leads, general workforce and those transitioning into leadership roles
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Illustration */}
        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-xl aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-white/60">
            <Image
              src="/leader.jpeg"
              alt="Professionals Collaborating"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
