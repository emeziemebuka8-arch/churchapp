import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const speakers = [
  // ... (Speakers Data) ...
  {
    name: "Dr. Samuel Roberts",
    role: "Lead Pastor, Grace Fellowship",
    bio: "With over 25 years of ministry experience, Dr. Roberts specializes in visionary leadership and sustainable church growth.",
    image: "/speaker-1.png",
  },
  {
    name: "Sarah Jenkins",
    role: "COO, Kingdom Initiatives",
    bio: "An expert in church administration and financial stewardship, Sarah helps organizations align resources with their mission.",
    image: "/speaker-2.png",
  },
  {
    name: "Marcus Thompson",
    role: "Director of Digital Outreach",
    bio: "Marcus focuses on leveraging modern technology and social media to foster deep, authentic digital discipleship.",
    image: "/speaker-3.png",
  },
];

export default function SpeakersPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 md:py-20 w-full">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-blue-600 font-bold tracking-widest text-xs uppercase">
            Expert Guidance
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Meet Our Keynote Speakers
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Learn from world-class practitioners who have successfully grown and managed thriving spiritual communities.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-900/5"
            >
              {/* Profile Image */}
              <div className="relative aspect-square w-full overflow-hidden text-slate-900">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Speaker Info */}
              <div className="p-8 flex flex-col flex-1 space-y-3">
                <p className="text-blue-600 font-bold text-[10px] uppercase tracking-wider">
                  {speaker.role}
                </p>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  {speaker.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {speaker.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
