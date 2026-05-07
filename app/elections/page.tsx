"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Vote, 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle, 
  AlertCircle,
  ChevronRight,
  Award,
  BarChart3,
  FileText,
  MessageCircle,
  UserCheck,
  TrendingUp,
  Shield,
  Info,
  Trophy,
  Crown,
  Star
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ElectedMember {
  id: number;
  name: string;
  position: string;
  party: string;
  image: string;
  votesReceived: number;
  termStart: string;
  termEnd: string;
}

export default function ElectionsPage() {
  const [activeTab, setActiveTab] = useState("elected");

  // Elected Members Data
  const electedMembers: ElectedMember[] = [
    {
      id: 1,
      name: "Md. Rahman",
      position: "President",
      party: "United Student Forum",
      image: "/elected/president.jpg",
      votesReceived: 245,
      termStart: "January 1, 2024",
      termEnd: "December 31, 2025",
    },
    {
      id: 2,
      name: "Fatema Akter",
      position: "Vice President",
      party: "United Student Forum",
      image: "/elected/vp.jpg",
      votesReceived: 198,
      termStart: "January 1, 2024",
      termEnd: "December 31, 2025",
    },
    {
      id: 3,
      name: "Shahidul Islam",
      position: "General Secretary",
      party: "Progressive Alliance",
      image: "/elected/secretary.jpg",
      votesReceived: 187,
      termStart: "January 1, 2024",
      termEnd: "December 31, 2025",
    },
    {
      id: 4,
      name: "Nusrat Jahan",
      position: "Treasurer",
      party: "United Student Forum",
      image: "/elected/treasurer.jpg",
      votesReceived: 176,
      termStart: "January 1, 2024",
      termEnd: "December 31, 2025",
    },
    {
      id: 5,
      name: "Kamal Hossain",
      position: "Organizing Secretary",
      party: "Progressive Alliance",
      image: "/elected/organizer.jpg",
      votesReceived: 165,
      termStart: "January 1, 2024",
      termEnd: "December 31, 2025",
    },
    {
      id: 6,
      name: "Tahmina Begum",
      position: "Cultural Secretary",
      party: "United Student Forum",
      image: "/elected/cultural.jpg",
      votesReceived: 159,
      termStart: "January 1, 2024",
      termEnd: "December 31, 2025",
    },
    {
      id: 7,
      name: "Rafiq Uddin",
      position: "Office Secretary",
      party: "Progressive Alliance",
      image: "/elected/office.jpg",
      votesReceived: 148,
      termStart: "January 1, 2024",
      termEnd: "December 31, 2025",
    },
    {
      id: 8,
      name: "Sumaiya Akter",
      position: "Publication Secretary",
      party: "United Student Forum",
      image: "/elected/publication.jpg",
      votesReceived: 142,
      termStart: "January 1, 2024",
      termEnd: "December 31, 2025",
    },
  ];

  const nextElectionDate = "December 15, 2025";
  const daysUntilElection = () => {
    const today = new Date();
    const election = new Date(nextElectionDate);
    const diffTime = election.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-4">
              <Vote size={16} />
              <span>Election Results 2024-25</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Elected Committee</h1>
            <p className="text-orange-100 max-w-2xl mx-auto">
              Meet your newly elected leaders who will serve for the term 2024-2025
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          {/* Tab Buttons */}
          <div className="flex justify-center gap-4 mb-10">
            <button
              onClick={() => setActiveTab("elected")}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                activeTab === "elected"
                  ? "bg-orange-600 text-white shadow-md"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              <Trophy size={16} className="inline mr-2" />
              Elected Committee
            </button>
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                activeTab === "upcoming"
                  ? "bg-orange-600 text-white shadow-md"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              <Calendar size={16} className="inline mr-2" />
              Upcoming Elections
            </button>
          </div>

          {/* Elected Committee Section */}
          {activeTab === "elected" && (
            <div>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Users size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-800">{electedMembers.length}</p>
                      <p className="text-xs text-slate-500">Elected Members</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                      <Calendar size={20} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Term Period</p>
                      <p className="text-xs text-slate-500">2024 - 2025</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                      <Award size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-800">100%</p>
                      <p className="text-xs text-slate-500">Voter Turnout</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                      <Star size={20} className="text-amber-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-800">3</p>
                      <p className="text-xs text-slate-500">Political Parties</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* President Highlight Card */}
              <div className="mb-10">
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl overflow-hidden shadow-lg">
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-white/90 mb-3">
                      <Crown size={20} />
                      <span className="text-sm font-medium">Leadership</span>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="w-28 h-28 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-3xl font-bold border-4 border-white/30">
                        {electedMembers[0].name[0]}
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                          {electedMembers[0].name}
                        </h2>
                        <p className="text-amber-100 text-lg font-medium">{electedMembers[0].position}</p>
                        <p className="text-white/80 text-sm mt-2">{electedMembers[0].party}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-white">{electedMembers[0].votesReceived}</p>
                        <p className="text-white/80 text-sm">Votes Received</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elected Members Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {electedMembers.slice(1).map((member) => (
                  <div
                    key={member.id}
                    className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-xl font-bold">
                          {member.name[0]}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{member.name}</h3>
                          <p className="text-blue-100 text-sm">{member.position}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="mb-3">
                        <p className="text-xs text-slate-400">Party</p>
                        <p className="text-sm font-medium text-slate-700">{member.party}</p>
                      </div>
                      <div className="mb-3">
                        <p className="text-xs text-slate-400">Votes Received</p>
                        <p className="text-sm font-semibold text-green-600">{member.votesReceived} votes</p>
                      </div>
                      <div className="flex justify-between text-xs text-slate-400 pt-2 border-t border-slate-100">
                        <span>Term: {member.termStart.split(",")[0]}</span>
                        <span>to {member.termEnd.split(",")[0]}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Upcoming Elections Section */}
          {activeTab === "upcoming" && (
            <div>
              {/* Next Election Countdown */}
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Next Election</h2>
                <div className="text-5xl font-bold mb-3">{nextElectionDate}</div>
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock size={16} />
                  <span>{daysUntilElection()} days remaining</span>
                </div>
              </div>

              {/* Upcoming Positions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Crown size={24} className="text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">Leadership Positions</h3>
                      <p className="text-sm text-slate-500">5 positions available</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-green-500" />
                      President
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-green-500" />
                      Vice President
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-green-500" />
                      General Secretary
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-green-500" />
                      Treasurer
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-green-500" />
                      Organizing Secretary
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <FileText size={24} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">Important Dates</h3>
                      <p className="text-sm text-slate-500">Mark your calendar</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li>
                      <p className="text-xs text-slate-400">Nomination Start</p>
                      <p className="text-sm font-medium text-slate-700">December 1, 2025</p>
                    </li>
                    <li>
                      <p className="text-xs text-slate-400">Nomination End</p>
                      <p className="text-sm font-medium text-slate-700">December 5, 2025</p>
                    </li>
                    <li>
                      <p className="text-xs text-slate-400">Campaign Period</p>
                      <p className="text-sm font-medium text-slate-700">December 8-12, 2025</p>
                    </li>
                    <li>
                      <p className="text-xs text-slate-400">Voting Day</p>
                      <p className="text-sm font-medium text-slate-700">December 15, 2025</p>
                    </li>
                    <li>
                      <p className="text-xs text-slate-400">Result Announcement</p>
                      <p className="text-sm font-medium text-slate-700">December 16, 2025</p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Guidelines for Candidates */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Shield size={18} className="text-purple-600" />
                  Guidelines for Candidates
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-green-500 mt-0.5" />
                      Must be an active DCMA member for at least 1 year
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-green-500 mt-0.5" />
                      No academic probation or disciplinary record
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-green-500 mt-0.5" />
                      Submit nomination form with 10 supporter signatures
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-green-500 mt-0.5" />
                      Pay nomination fee of 500 BDT
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-green-500 mt-0.5" />
                      Attend mandatory candidate briefing
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-green-500 mt-0.5" />
                      Follow election code of conduct
                    </li>
                  </ul>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 text-center">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  <UserCheck size={18} />
                  Become a Candidate
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          )}

          {/* Election Commission Contact */}
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm text-orange-600 hover:text-orange-700"
            >
              <MessageCircle size={16} />
              Contact Election Commission for any queries
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}