"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, 
  ChevronRight, 
  Megaphone, 
  Award,
  Users,
  Clock,
  Eye,
  ArrowRight
} from "lucide-react";

export default function LatestNews() {
  const [activeTab, setActiveTab] = useState("news");

  const news = [
    {
      id: 1,
      title: "Annual Leadership Summit 2024 Announced",
      excerpt: "Join us for the biggest leadership event of the year featuring industry experts and successful alumni...",
      date: "December 15, 2024",
      category: "Event",
      image: "/news/summit.jpg",
      readTime: "3 min read",
      views: 245,
    },
    {
      id: 2,
      title: "New Executive Committee Takes Office",
      excerpt: "The newly elected executive committee for 2024-25 session has officially taken charge with great enthusiasm...",
      date: "December 10, 2024",
      category: "Announcement",
      image: "/news/committee.jpg",
      readTime: "2 min read",
      views: 189,
    },
    {
      id: 3,
      title: "Business Competition Winners Announced",
      excerpt: "Congratulations to the winners of the Inter-College Business Competition 2024...",
      date: "December 5, 2024",
      category: "Achievement",
      image: "/news/competition.jpg",
      readTime: "2 min read",
      views: 312,
    },
    {
      id: 4,
      title: "Membership Drive 2024 Opens",
      excerpt: "Applications are now open for new members. Don't miss this opportunity to join DCMA...",
      date: "December 1, 2024",
      category: "Membership",
      image: "/news/membership.jpg",
      readTime: "1 min read",
      views: 567,
    },
    {
      id: 5,
      title: "Workshop on Professional Development",
      excerpt: "Enhance your skills with our upcoming workshop on professional development and career planning...",
      date: "November 28, 2024",
      category: "Workshop",
      image: "/news/workshop.jpg",
      readTime: "2 min read",
      views: 178,
    },
    {
      id: 6,
      title: "Annual Cultural Night Celebration",
      excerpt: "A night of music, dance, and cultural performances by talented students...",
      date: "November 25, 2024",
      category: "Cultural",
      image: "/news/cultural.jpg",
      readTime: "3 min read",
      views: 423,
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "Important: Exam Schedule Update",
      content: "The final exam schedule has been updated. Please check your email for details.",
      date: "December 14, 2024",
      priority: "High",
    },
    {
      id: 2,
      title: "Holiday Notice",
      content: "The association office will remain closed on December 16th due to Victory Day.",
      date: "December 12, 2024",
      priority: "Normal",
    },
    {
      id: 3,
      title: "Registration Deadline Extended",
      content: "The deadline for membership registration has been extended to December 30th.",
      date: "December 10, 2024",
      priority: "High",
    },
    {
      id: 4,
      title: "New Resource Library Launched",
      content: "Access study materials, past papers, and resources online.",
      date: "December 8, 2024",
      priority: "Normal",
    },
  ];

  const displayedItems = activeTab === "news" ? news : announcements;

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Event: "bg-blue-100 text-blue-700",
      Announcement: "bg-purple-100 text-purple-700",
      Achievement: "bg-green-100 text-green-700",
      Membership: "bg-amber-100 text-amber-700",
      Workshop: "bg-indigo-100 text-indigo-700",
      Cultural: "bg-pink-100 text-pink-700",
    };
    return colors[category] || "bg-gray-100 text-gray-700";
  };

  const getPriorityColor = (priority: string) => {
    return priority === "High" 
      ? "bg-red-100 text-red-700" 
      : "bg-yellow-100 text-yellow-700";
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Megaphone size={16} />
            <span>Stay Updated</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            Latest News & Announcements
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Get the latest updates, events, and important announcements from DCMA
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("news")}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
              activeTab === "news"
                ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            Latest News
          </button>
          <button
            onClick={() => setActiveTab("announcements")}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
              activeTab === "announcements"
                ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            Announcements
          </button>
        </div>

        {/* News Grid */}
        {activeTab === "news" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedItems.slice(0, 6).map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden"
                >
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                    </div>
                    <div className="flex items-center justify-center h-full">
                      <div className="text-white text-opacity-30">
                        <Megaphone size={48} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {item.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {item.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye size={12} />
                        {item.views}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                      {item.excerpt}
                    </p>
                    <Link
                      href={`/news/${item.id}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 group-hover:gap-2 transition-all"
                    >
                      Read More
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 transition-all"
              >
                View All News
                <ChevronRight size={16} />
              </Link>
            </div>
          </>
        )}

        {/* Announcements List */}
        {activeTab === "announcements" && (
          <>
            <div className="max-w-4xl mx-auto space-y-4">
              {displayedItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 p-5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <Megaphone size={18} className="text-blue-500" />
                      <h3 className="text-lg font-semibold text-slate-800">
                        {item.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-1 rounded-lg text-xs font-medium ${getPriorityColor(item.priority)}`}>
                        {item.priority} Priority
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Calendar size={12} />
                        {item.date}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm ml-6">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/announcements"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 transition-all"
              >
                View All Announcements
                <ChevronRight size={16} />
              </Link>
            </div>
          </>
        )}

        {/* Stats Bar */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">50+</div>
              <div className="text-xs text-slate-500">Events Organized</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">1000+</div>
              <div className="text-xs text-slate-500">Active Members</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">20+</div>
              <div className="text-xs text-slate-500">Workshops</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">5000+</div>
              <div className="text-xs text-slate-500">Students Impacted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}