"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Search, 
  Calendar, 
  Clock, 
  Eye, 
  Heart,
  ChevronRight,
  ChevronLeft,
  Filter,
  X,
  Newspaper,
  TrendingUp,
  Users,
  MessageCircle,
  Share2
} from "lucide-react";
import Navbar from "../components/NavBar";  
import Footer from  "../components/Footer"; 

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  views: number;
  likes: number;
  comments: number;
  image: string;
  author: string;
  featured: boolean;
}

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: "all", label: "All News", count: 24 },
    { id: "announcement", label: "Announcements", count: 8 },
    { id: "event", label: "Events", count: 6 },
    { id: "achievement", label: "Achievements", count: 5 },
    { id: "update", label: "Updates", count: 5 },
  ];

  const news: NewsItem[] = [
    {
      id: 1,
      title: "Annual Leadership Summit 2024 Announced",
      excerpt: "Join us for the biggest leadership event of the year featuring industry experts and successful alumni. The summit will focus on developing future leaders.",
      content: "",
      category: "event",
      date: "December 15, 2024",
      readTime: "3 min read",
      views: 1234,
      likes: 89,
      comments: 23,
      image: "/news/summit.jpg",
      author: "DCMA Media Team",
      featured: true,
    },
    {
      id: 2,
      title: "New Executive Committee Takes Office",
      excerpt: "The newly elected executive committee for 2024-25 session has officially taken charge with great enthusiasm and dedication.",
      content: "",
      category: "announcement",
      date: "December 10, 2024",
      readTime: "2 min read",
      views: 987,
      likes: 67,
      comments: 15,
      image: "/news/committee.jpg",
      author: "Election Committee",
      featured: false,
    },
    {
      id: 3,
      title: "DCMA Wins Best Student Organization Award",
      excerpt: "Dhaka College Management Association has been recognized as the Best Student Organization of the Year 2024.",
      content: "",
      category: "achievement",
      date: "December 5, 2024",
      readTime: "2 min read",
      views: 2156,
      likes: 234,
      comments: 56,
      image: "/news/award.jpg",
      author: "DCMA Media Team",
      featured: false,
    },
    {
      id: 4,
      title: "Membership Drive 2024 Opens",
      excerpt: "Applications are now open for new members. Don't miss this opportunity to join DCMA and enhance your leadership skills.",
      content: "",
      category: "announcement",
      date: "December 1, 2024",
      readTime: "1 min read",
      views: 3456,
      likes: 178,
      comments: 89,
      image: "/news/membership.jpg",
      author: "Membership Committee",
      featured: true,
    },
    {
      id: 5,
      title: "Professional Development Workshop",
      excerpt: "Enhance your CV writing, interview skills, and professional communication in our upcoming workshop.",
      content: "",
      category: "event",
      date: "November 28, 2024",
      readTime: "2 min read",
      views: 876,
      likes: 45,
      comments: 12,
      image: "/news/workshop.jpg",
      author: "Training Cell",
      featured: false,
    },
    {
      id: 6,
      title: "Cultural Night Celebration",
      excerpt: "A night of music, dance, and cultural performances by talented students was a grand success.",
      content: "",
      category: "event",
      date: "November 25, 2024",
      readTime: "3 min read",
      views: 2345,
      likes: 345,
      comments: 78,
      image: "/news/cultural.jpg",
      author: "Cultural Committee",
      featured: false,
    },
    {
      id: 7,
      title: "University Admission Guidelines 2024",
      excerpt: "Important updates and guidelines for university admission process released by DCMA.",
      content: "",
      category: "update",
      date: "November 20, 2024",
      readTime: "2 min read",
      views: 5678,
      likes: 234,
      comments: 145,
      image: "/news/admission.jpg",
      author: "Advisory Board",
      featured: false,
    },
    {
      id: 8,
      title: "Debate Competition Winners",
      excerpt: "Congratulations to the winners of the Inter-College Debate Competition 2024.",
      content: "",
      category: "achievement",
      date: "November 15, 2024",
      readTime: "1 min read",
      views: 1234,
      likes: 98,
      comments: 34,
      image: "/news/debate.jpg",
      author: "Debate Club",
      featured: false,
    },
  ];

  const filteredNews = news.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredNews = filteredNews.filter(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      event: "bg-blue-100 text-blue-700",
      announcement: "bg-purple-100 text-purple-700",
      achievement: "bg-green-100 text-green-700",
      update: "bg-amber-100 text-amber-700",
    };
    return colors[category] || "bg-gray-100 text-gray-700";
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      event: "Event",
      announcement: "Announcement",
      achievement: "Achievement",
      update: "Update",
    };
    return labels[category] || category;
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Latest News</h1>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Stay updated with the latest announcements, events, and achievements from DCMA
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          {/* Search and Filter Bar */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="relative w-full lg:w-96">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-lg bg-white"
              >
                <Filter size={18} />
                Categories
                {showFilters ? <X size={18} /> : <ChevronRight size={18} />}
              </button>

              <div className="hidden lg:flex gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === cat.id
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {cat.label}
                    <span className={`ml-2 px-1.5 py-0.5 rounded-full text-xs ${
                      selectedCategory === cat.id
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {showFilters && (
              <div className="lg:hidden mt-4 p-4 bg-white rounded-xl border border-slate-200">
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                        selectedCategory === cat.id
                          ? "bg-blue-600 text-white"
                          : "bg-slate-50 text-slate-600"
                      }`}
                    >
                      {cat.label} ({cat.count})
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-sm text-slate-500">
              Showing {filteredNews.length} of {news.length} news articles
            </p>
          </div>

          {/* Featured News Section */}
          {featuredNews.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp size={20} className="text-blue-600" />
                <h2 className="text-xl font-bold text-slate-800">Featured News</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {featuredNews.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden"
                  >
                    <div className="h-64 bg-gradient-to-br from-blue-400 to-indigo-500 relative">
                      <div className="absolute top-4 left-4">
                        <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${getCategoryColor(item.category)}`}>
                          {getCategoryLabel(item.category)}
                        </span>
                      </div>
                      <div className="flex items-center justify-center h-full">
                        <Newspaper size={64} className="text-white/30" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {item.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {item.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 mb-4 line-clamp-2">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <span className="flex items-center gap-1">
                            <Eye size={14} />
                            {item.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart size={14} />
                            {item.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageCircle size={14} />
                            {item.comments}
                          </span>
                        </div>
                        <Link
                          href={`/news/${item.id}`}
                          className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:gap-2 transition-all"
                        >
                          Read More
                          <ChevronRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Regular News Grid */}
          {regularNews.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Newspaper size={20} className="text-blue-600" />
                <h2 className="text-xl font-bold text-slate-800">Latest News</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularNews.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden"
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-500 relative">
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${getCategoryColor(item.category)}`}>
                          {getCategoryLabel(item.category)}
                        </span>
                      </div>
                      <div className="flex items-center justify-center h-full">
                        <Newspaper size={48} className="text-white/30" />
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} />
                          {item.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={11} />
                          {item.readTime}
                        </span>
                      </div>
                      <h3 className="font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-sm mb-3 line-clamp-2">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                        <div className="flex items-center gap-3 text-xs text-slate-400">
                          <span className="flex items-center gap-1">
                            <Eye size={12} />
                            {item.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart size={12} />
                            {item.likes}
                          </span>
                        </div>
                        <Link
                          href={`/news/${item.id}`}
                          className="text-sm font-medium text-blue-600 hover:text-blue-700"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {filteredNews.length === 0 && (
            <div className="text-center py-16">
              <Newspaper size={48} className="text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">No news found</h3>
              <p className="text-slate-500">Try adjusting your search or filter criteria</p>
            </div>
          )}

          {/* Pagination */}
          {filteredNews.length > 0 && (
            <div className="flex justify-center gap-2 mt-12">
              <button className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 bg-white">
                <ChevronLeft size={18} />
              </button>
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">1</button>
              <button className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 bg-white">2</button>
              <button className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 bg-white">3</button>
              <button className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 bg-white">
                <ChevronRight size={18} />
              </button>
            </div>
          )}

          {/* Newsletter Subscription */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-slate-500 mb-4">
              Get the latest news and updates directly in your inbox
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}