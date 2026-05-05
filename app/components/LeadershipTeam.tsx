"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  ChevronRight,
  Award,
  Users,
  Calendar,
  Star,
  Globe
} from "lucide-react";

export default function LeadershipTeam() {
  const [activeRole, setActiveRole] = useState("all");

  const teamMembers = [
    {
      id: 1,
      name: "Md. Rahman",
      position: "President",
      role: "executive",
      department: "Executive Committee",
      email: "president@dcma.edu.bd",
      phone: "+880 1700-000001",
      bio: "Leading DCMA with vision and dedication for student development",
      achievements: ["5+ years leadership", "Organized 20+ events", "Student welfare advocate"],
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      id: 2,
      name: "Fatema Akter",
      position: "Vice President",
      role: "executive",
      department: "Executive Committee",
      email: "vp@dcma.edu.bd",
      phone: "+880 1700-000002",
      bio: "Passionate about empowering students through various programs",
      achievements: ["Women in leadership", "Event management expert", "Public speaker"],
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      id: 3,
      name: "Shahidul Islam",
      position: "General Secretary",
      role: "executive",
      department: "Executive Committee",
      email: "secretary@dcma.edu.bd",
      phone: "+880 1700-000003",
      bio: "Ensuring smooth operations and communication within the association",
      achievements: ["Organizational expert", "Team coordinator", "Crisis manager"],
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      id: 4,
      name: "Nusrat Jahan",
      position: "Treasurer",
      role: "executive",
      department: "Finance Committee",
      email: "treasurer@dcma.edu.bd",
      phone: "+880 1700-000004",
      bio: "Managing financial resources transparently and efficiently",
      achievements: ["Financial analyst", "Budget planning", "Audit expert"],
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      id: 5,
      name: "Kamal Hossain",
      position: "Organizing Secretary",
      role: "executive",
      department: "Event Management",
      email: "organizing@dcma.edu.bd",
      phone: "+880 1700-000005",
      bio: "Planning and executing successful events throughout the year",
      achievements: ["Event planner", "Logistics expert", "Team leader"],
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      id: 6,
      name: "Tahmina Begum",
      position: "Cultural Secretary",
      role: "executive",
      department: "Cultural Affairs",
      email: "cultural@dcma.edu.bd",
      phone: "+880 1700-000006",
      bio: "Promoting cultural activities and student talents",
      achievements: ["Cultural coordinator", "Event organizer", "Talent hunter"],
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
  ];

  const filteredMembers = activeRole === "all" 
    ? teamMembers 
    : teamMembers.filter(member => member.role === activeRole);

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Users size={16} />
            <span>Our Leadership</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            Executive Committee 2024-25
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Meet the dedicated team working tirelessly for student welfare and association development
          </p>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-slate-100">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Users size={20} className="text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-slate-800">15+</div>
            <div className="text-xs text-slate-500">Committee Members</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-slate-100">
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Award size={20} className="text-green-600" />
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

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100"
            >
              {/* Profile Image Placeholder */}
              <div className="relative h-56 bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                
                {/* Position Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-semibold text-blue-600 z-10">
                  {member.position}
                </div>
                
                {/* Initial Avatar for demo */}
                <div className="flex items-center justify-center h-full">
                  <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-3xl font-bold">
                    {member.name[0]}
                  </div>
                </div>

                {/* Social Links Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex gap-3 justify-center">
                    <a href={member.social.website} className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all">
                      <Globe size={18} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 text-sm font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                  {member.bio}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {member.achievements.slice(0, 2).map((achievement, idx) => (
                      <span key={idx} className="text-xs bg-slate-50 text-slate-600 px-2 py-1 rounded-full">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="flex gap-2 pt-3 border-t border-slate-100">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all"
                  >
                    <Mail size={12} />
                    Email
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all"
                  >
                    <Phone size={12} />
                    Contact
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/members"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 transition-all"
          >
            Meet All Committee Members
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}