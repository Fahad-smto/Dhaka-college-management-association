"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Search, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  ChevronRight,
  Filter,
  X,
  UserPlus,
  Award,
  BookOpen,
  Star
} from "lucide-react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";



interface Member {
  id: number;
  name: string;
  position: string;
  department: string;
  batch: string;
  email: string;
  phone: string;
  image: string;
  joinedDate: string;
  achievements: number;
}

export default function MembersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const departments = [
    { id: "all", label: "All Departments", count: 45 },
    { id: "executive", label: "Executive Committee", count: 15 },
    { id: "general", label: "General Members", count: 30 },
  ];

  const members: Member[] = [
    {
      id: 1,
      name: "Md. Rahman",
      position: "President",
      department: "executive",
      batch: "2020-21",
      email: "rahman@dcma.edu.bd",
      phone: "+880 1700-000001",
      image: "/members/president.jpg",
      joinedDate: "January 2023",
      achievements: 12,
    },
    {
      id: 2,
      name: "Fatema Akter",
      position: "Vice President",
      department: "executive",
      batch: "2020-21",
      email: "fatema@dcma.edu.bd",
      phone: "+880 1700-000002",
      image: "/members/vp.jpg",
      joinedDate: "January 2023",
      achievements: 8,
    },
    {
      id: 3,
      name: "Shahidul Islam",
      position: "General Secretary",
      department: "executive",
      batch: "2021-22",
      email: "shahidul@dcma.edu.bd",
      phone: "+880 1700-000003",
      image: "/members/secretary.jpg",
      joinedDate: "January 2023",
      achievements: 10,
    },
    {
      id: 4,
      name: "Nusrat Jahan",
      position: "Treasurer",
      department: "executive",
      batch: "2021-22",
      email: "nusrat@dcma.edu.bd",
      phone: "+880 1700-000004",
      image: "/members/treasurer.jpg",
      joinedDate: "January 2023",
      achievements: 7,
    },
    {
      id: 5,
      name: "Kamal Hossain",
      position: "Organizing Secretary",
      department: "executive",
      batch: "2020-21",
      email: "kamal@dcma.edu.bd",
      phone: "+880 1700-000005",
      image: "/members/organizer.jpg",
      joinedDate: "February 2023",
      achievements: 9,
    },
    {
      id: 6,
      name: "Tahmina Begum",
      position: "Cultural Secretary",
      department: "executive",
      batch: "2021-22",
      email: "tahmina@dcma.edu.bd",
      phone: "+880 1700-000006",
      image: "/members/cultural.jpg",
      joinedDate: "February 2023",
      achievements: 6,
    },
    {
      id: 7,
      name: "Rafiq Uddin",
      position: "Active Member",
      department: "general",
      batch: "2022-23",
      email: "rafiq@dcma.edu.bd",
      phone: "+880 1700-000007",
      image: "/members/rafiq.jpg",
      joinedDate: "March 2023",
      achievements: 4,
    },
    {
      id: 8,
      name: "Sumaiya Akter",
      position: "Active Member",
      department: "general",
      batch: "2022-23",
      email: "sumaiya@dcma.edu.bd",
      phone: "+880 1700-000008",
      image: "/members/sumaiya.jpg",
      joinedDate: "March 2023",
      achievements: 5,
    },
    {
      id: 9,
      name: "Imran Hossain",
      position: "Active Member",
      department: "general",
      batch: "2022-23",
      email: "imran@dcma.edu.bd",
      phone: "+880 1700-000009",
      image: "/members/imran.jpg",
      joinedDate: "April 2023",
      achievements: 3,
    },
    {
      id: 10,
      name: "Sabrina Khan",
      position: "Active Member",
      department: "general",
      batch: "2023-24",
      email: "sabrina@dcma.edu.bd",
      phone: "+880 1700-000010",
      image: "/members/sabrina.jpg",
      joinedDate: "June 2023",
      achievements: 2,
    },
    {
      id: 11,
      name: "Hasan Mahmud",
      position: "Active Member",
      department: "general",
      batch: "2023-24",
      email: "hasan@dcma.edu.bd",
      phone: "+880 1700-000011",
      image: "/members/hasan.jpg",
      joinedDate: "June 2023",
      achievements: 3,
    },
    {
      id: 12,
      name: "Mim Akter",
      position: "Active Member",
      department: "general",
      batch: "2023-24",
      email: "mim@dcma.edu.bd",
      phone: "+880 1700-000012",
      image: "/members/mim.jpg",
      joinedDate: "July 2023",
      achievements: 2,
    },
  ];

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.position.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === "all" || member.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Members</h1>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Meet the dedicated members of DCMA working together to create a better future
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Users size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800">45</p>
                  <p className="text-xs text-slate-500">Total Members</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                  <Award size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800">15</p>
                  <p className="text-xs text-slate-500">Executive Members</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                  <BookOpen size={20} className="text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800">8</p>
                  <p className="text-xs text-slate-500">Departments</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                  <Star size={20} className="text-amber-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800">100+</p>
                  <p className="text-xs text-slate-500">Achievements</p>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search Box */}
              <div className="relative flex-1">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search members by name or position..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                />
              </div>

              {/* Filter Toggle for Mobile */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="sm:hidden flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 rounded-lg bg-white"
              >
                <Filter size={18} />
                Filter
                {showFilters ? <X size={18} /> : <ChevronRight size={18} />}
              </button>

              {/* Department Filters - Desktop */}
              <div className="hidden sm:flex gap-2">
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => setSelectedDepartment(dept.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedDepartment === dept.id
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {dept.label}
                    <span className={`ml-2 px-1.5 py-0.5 rounded-full text-xs ${
                      selectedDepartment === dept.id
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}>
                      {dept.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="sm:hidden mt-4 p-4 bg-white rounded-xl border border-slate-200">
                <div className="flex flex-wrap gap-2">
                  {departments.map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => setSelectedDepartment(dept.id)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                        selectedDepartment === dept.id
                          ? "bg-blue-600 text-white"
                          : "bg-slate-50 text-slate-600"
                      }`}
                    >
                      {dept.label} ({dept.count})
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="mb-4">
            <p className="text-sm text-slate-500">
              Showing {filteredMembers.length} of {members.length} members
            </p>
          </div>

          {/* Members Grid */}
          {filteredMembers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMembers.map((member) => (
                <div
                  key={member.id}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden"
                >
                  {/* Member Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-3xl font-bold border-4 border-white/30">
                      {member.name[0]}
                    </div>
                    
                    {/* Position Badge */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-semibold text-blue-600 text-center">
                        {member.position}
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-slate-800 mb-1">
                      {member.name}
                    </h3>
                    
                    <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        Batch {member.batch}
                      </span>
                    </div>

                    <div className="flex items-center justify-center gap-2 mb-3">
                      <div className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        <Award size={12} />
                        {member.achievements} Achievements
                      </div>
                    </div>

                    {/* Contact Icons */}
                    <div className="flex gap-3 justify-center pt-3 border-t border-slate-100">
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2 rounded-lg bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all"
                      >
                        <Mail size={16} />
                      </a>
                      <a
                        href={`tel:${member.phone}`}
                        className="p-2 rounded-lg bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all"
                      >
                        <Phone size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Users size={48} className="text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">No members found</h3>
              <p className="text-slate-500">Try adjusting your search or filter criteria</p>
            </div>
          )}

          {/* Join CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">Want to join DCMA?</h3>
            <p className="text-blue-100 mb-4">
              Become a part of our growing community and unlock new opportunities
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-100 transition-all">
              <UserPlus size={18} />
              Apply for Membership
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}