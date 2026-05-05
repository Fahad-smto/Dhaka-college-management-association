"use client";

import Link from "next/link";
import { 
  Mail, 
  Phone, 
  ChevronRight,
  Crown,
  Users,
  Calendar,
  Trophy,
  Star
} from "lucide-react";

export default function LeadershipPyramid() {
  const leadershipStructure = {
    president: {
      name: "Md. Rahman",
      position: "President",
      email: "president@dcma.edu.bd",
      phone: "+880 1700-000001",
      bio: "Leading DCMA with vision and dedication for student development",
      image: "/team/president.jpg",
      social: { linkedin: "#", twitter: "#" },
    },
    vicePresident: {
      name: "Fatema Akter",
      position: "Vice President",
      email: "vp@dcma.edu.bd",
      phone: "+880 1700-000002",
      bio: "Supporting the president and overseeing key initiatives",
      image: "/team/vp.jpg",
      social: { linkedin: "#", twitter: "#" },
    },
    generalSecretary: {
      name: "Shahidul Islam",
      position: "General Secretary",
      email: "secretary@dcma.edu.bd",
      phone: "+880 1700-000003",
      bio: "Managing daily operations and communication",
      image: "/team/secretary.jpg",
      social: { linkedin: "#", twitter: "#" },
    },
    jointSecretary: {
      name: "Rafiq Uddin",
      position: "Joint Secretary",
      email: "jointsecretary@dcma.edu.bd",
      phone: "+880 1700-000007",
      bio: "Assisting the general secretary in administrative tasks",
      image: "/team/joint.jpg",
      social: { linkedin: "#", twitter: "#" },
    },
    treasurer: {
      name: "Nusrat Jahan",
      position: "Treasurer",
      email: "treasurer@dcma.edu.bd",
      phone: "+880 1700-000004",
      bio: "Managing financial resources transparently",
      image: "/team/treasurer.jpg",
      social: { linkedin: "#", twitter: "#" },
    },
    organizingSecretary: {
      name: "Kamal Hossain",
      position: "Organizing Secretary",
      email: "organizing@dcma.edu.bd",
      phone: "+880 1700-000005",
      bio: "Planning and executing successful events",
      image: "/team/organizer.jpg",
      social: { linkedin: "#", twitter: "#" },
    },
    culturalSecretary: {
      name: "Tahmina Begum",
      position: "Cultural Secretary",
      email: "cultural@dcma.edu.bd",
      phone: "+880 1700-000006",
      bio: "Promoting cultural activities and talents",
      image: "/team/cultural.jpg",
      social: { linkedin: "#", twitter: "#" },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Crown size={16} />
            <span>Organizational Structure</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            Leadership Pyramid
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Our hierarchical leadership structure ensuring efficient management and decision-making
          </p>
        </div>

        {/* Pyramid Layout */}
        <div className="relative">
          {/* Level 1: President - Top */}
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-md">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl font-bold">
                    {leadershipStructure.president.name[0]}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{leadershipStructure.president.name}</h3>
                    <p className="text-amber-100 text-sm flex items-center gap-1">
                      <Crown size={14} />
                      {leadershipStructure.president.position}
                    </p>
                    <p className="text-white/80 text-xs mt-1 line-clamp-1">{leadershipStructure.president.bio}</p>
                  </div>
                  <div className="flex gap-2">
                    <a href={`mailto:${leadershipStructure.president.email}`} className="p-2 bg-white/20 rounded-lg hover:bg-white/30">
                      <Mail size={14} />
                    </a>
                    <a href={`tel:${leadershipStructure.president.phone}`} className="p-2 bg-white/20 rounded-lg hover:bg-white/30">
                      <Phone size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Connecting Line */}
          <div className="flex justify-center mb-6">
            <div className="w-px h-8 bg-gradient-to-b from-amber-400 to-slate-300"></div>
          </div>

          {/* Level 2: VP & General Secretary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
            {/* Vice President */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-5 text-white shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold">
                  {leadershipStructure.vicePresident.name[0]}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">{leadershipStructure.vicePresident.name}</h4>
                  <p className="text-blue-100 text-xs">{leadershipStructure.vicePresident.position}</p>
                </div>
                <div className="flex gap-1">
                  <a href={`mailto:${leadershipStructure.vicePresident.email}`} className="p-1.5 bg-white/20 rounded-lg hover:bg-white/30">
                    <Mail size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* General Secretary */}
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-5 text-white shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold">
                  {leadershipStructure.generalSecretary.name[0]}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">{leadershipStructure.generalSecretary.name}</h4>
                  <p className="text-purple-100 text-xs">{leadershipStructure.generalSecretary.position}</p>
                </div>
                <div className="flex gap-1">
                  <a href={`mailto:${leadershipStructure.generalSecretary.email}`} className="p-1.5 bg-white/20 rounded-lg hover:bg-white/30">
                    <Mail size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Connecting Lines */}
          <div className="flex justify-center gap-32 mb-6">
            <div className="w-px h-6 bg-gradient-to-b from-blue-400 to-slate-300"></div>
            <div className="w-px h-6 bg-gradient-to-b from-purple-400 to-slate-300"></div>
          </div>

          {/* Level 3: Joint Secretary & Treasurer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-4 text-white shadow-md">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-sm font-bold">
                  {leadershipStructure.jointSecretary.name[0]}
                </div>
                <div>
                  <h5 className="font-semibold text-sm">{leadershipStructure.jointSecretary.name}</h5>
                  <p className="text-emerald-100 text-xs">{leadershipStructure.jointSecretary.position}</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-rose-500 to-rose-600 rounded-xl p-4 text-white shadow-md">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-sm font-bold">
                  {leadershipStructure.treasurer.name[0]}
                </div>
                <div>
                  <h5 className="font-semibold text-sm">{leadershipStructure.treasurer.name}</h5>
                  <p className="text-rose-100 text-xs">{leadershipStructure.treasurer.position}</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl p-4 text-white shadow-md">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-sm font-bold">
                  {leadershipStructure.culturalSecretary.name[0]}
                </div>
                <div>
                  <h5 className="font-semibold text-sm">{leadershipStructure.culturalSecretary.name}</h5>
                  <p className="text-indigo-100 text-xs">{leadershipStructure.culturalSecretary.position}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Level 4: Organizing Secretary & Others */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg p-3 text-white text-center shadow">
              <p className="font-semibold text-sm">{leadershipStructure.organizingSecretary.name}</p>
              <p className="text-cyan-100 text-xs">{leadershipStructure.organizingSecretary.position}</p>
            </div>
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg p-3 text-white text-center shadow">
              <p className="font-semibold text-sm">Office Secretary</p>
              <p className="text-teal-100 text-xs">办公室秘书</p>
            </div>
            <div className="bg-gradient-to-r from-sky-500 to-sky-600 rounded-lg p-3 text-white text-center shadow">
              <p className="font-semibold text-sm">Publication Secretary</p>
              <p className="text-sky-100 text-xs">প্রকাশনা সম্পাদক</p>
            </div>
            <div className="bg-gradient-to-r from-violet-500 to-violet-600 rounded-lg p-3 text-white text-center shadow">
              <p className="font-semibold text-sm">Sports Secretary</p>
              <p className="text-violet-100 text-xs">ক্রীড়া সম্পাদক</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-slate-100">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Users size={20} className="text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-slate-800">15+</div>
            <div className="text-xs text-slate-500">Committee Members</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-slate-100">
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Trophy size={20} className="text-green-600" />
            </div>
            <div className="text-2xl font-bold text-slate-800">50+</div>
            <div className="text-xs text-slate-500">Events Organized</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-slate-100">
            <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Calendar size={20} className="text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-slate-800">5+</div>
            <div className="text-xs text-slate-500">Years of Excellence</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-slate-100">
            <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Star size={20} className="text-amber-600" />
            </div>
            <div className="text-2xl font-bold text-slate-800">1000+</div>
            <div className="text-xs text-slate-500">Students Impacted</div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/members"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 transition-all"
          >
            View Full Committee
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}