"use client";

import { JSX, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Ticket, 
  ChevronRight,
  ChevronLeft,
  Search,
  Filter,
  X,
  AlertCircle,
  CheckCircle,
  Award,
  Briefcase,
  GraduationCap,
  Music,
  Trophy
} from "lucide-react";
import Navbar from "../components/NavBar";
import Footer from  "../components/Footer";

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: "all", label: "All Events", icon: <Calendar size={16} /> },
    { id: "conference", label: "Conference", icon: <Users size={16} /> },
    { id: "workshop", label: "Workshop", icon: <GraduationCap size={16} /> },
    { id: "competition", label: "Competition", icon: <Trophy size={16} /> },
    { id: "cultural", label: "Cultural", icon: <Music size={16} /> },
    { id: "seminar", label: "Seminar", icon: <Briefcase size={16} /> },
  ];

  const months = [
    { id: "all", label: "All Months" },
    { id: "jan", label: "January" },
    { id: "feb", label: "February" },
    { id: "mar", label: "March" },
    { id: "apr", label: "April" },
    { id: "may", label: "May" },
    { id: "jun", label: "June" },
    { id: "jul", label: "July" },
    { id: "aug", label: "August" },
    { id: "sep", label: "September" },
    { id: "oct", label: "October" },
    { id: "nov", label: "November" },
    { id: "dec", label: "December" },
  ];

  const events = [
    {
      id: 1,
      title: "Annual Leadership Summit 2024",
      description: "Join us for the biggest leadership event of the year featuring industry experts and successful alumni. Learn from top leaders and network with professionals.",
      date: "December 15, 2024",
      time: "10:00 AM - 5:00 PM",
      location: "Dhaka College Auditorium",
      category: "conference",
      image: "/events/summit.jpg",
      price: "Free",
      seats: 250,
      registered: 180,
      status: "upcoming",
      speakers: ["Dr. Rahman", "Prof. Hasan", "Ms. Karim"],
      tags: ["Leadership", "Networking", "Career"],
    },
    {
      id: 2,
      title: "Business Case Competition",
      description: "Inter-college business solution competition. Present your innovative ideas and win exciting prizes.",
      date: "December 20, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Business Faculty Hall",
      category: "competition",
      image: "/events/competition.jpg",
      price: "500 BDT",
      seats: 100,
      registered: 65,
      status: "upcoming",
      speakers: ["Industry Experts"],
      tags: ["Business", "Competition", "Prizes"],
    },
    {
      id: 3,
      title: "Professional Development Workshop",
      description: "Enhance your CV writing, interview skills, and professional communication.",
      date: "December 25, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Seminar Hall",
      category: "workshop",
      image: "/events/workshop.jpg",
      price: "Free",
      seats: 150,
      registered: 95,
      status: "upcoming",
      speakers: ["Career Experts"],
      tags: ["Workshop", "Career", "Skills"],
    },
    {
      id: 4,
      title: "Annual Cultural Night",
      description: "A night of music, dance, and cultural performances by talented students.",
      date: "December 30, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "College Ground",
      category: "cultural",
      image: "/events/cultural.jpg",
      price: "200 BDT",
      seats: 500,
      registered: 320,
      status: "upcoming",
      speakers: ["Cultural Artists"],
      tags: ["Cultural", "Entertainment", "Music"],
    },
    {
      id: 5,
      title: "Tech Innovation Seminar",
      description: "Latest trends in technology and innovation for students.",
      date: "January 5, 2025",
      time: "11:00 AM - 3:00 PM",
      location: "Computer Science Department",
      category: "seminar",
      image: "/events/seminar.jpg",
      price: "Free",
      seats: 200,
      registered: 120,
      status: "upcoming",
      speakers: ["Tech Leaders"],
      tags: ["Technology", "Innovation", "Seminar"],
    },
    {
      id: 6,
      title: "Debate Championship",
      description: "Inter-college debate competition on current affairs.",
      date: "January 10, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Conference Room",
      category: "competition",
      image: "/events/debate.jpg",
      price: "300 BDT",
      seats: 80,
      registered: 45,
      status: "upcoming",
      speakers: ["Expert Judges"],
      tags: ["Debate", "Competition", "Public Speaking"],
    },
  ];

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, JSX.Element> = {
      conference: <Users size={16} />,
      workshop: <GraduationCap size={16} />,
      competition: <Trophy size={16} />,
      cultural: <Music size={16} />,
      seminar: <Briefcase size={16} />,
    };
    return icons[category] || <Calendar size={16} />;
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Events & Activities</h1>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Discover and participate in exciting events designed to enhance your skills,
              expand your network, and create memorable experiences.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          {/* Search and Filter Bar */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search Box */}
              <div className="relative w-full lg:w-96">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                />
              </div>

              {/* Filter Toggle Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 transition-all lg:hidden bg-white"
              >
                <Filter size={18} />
                Filters
                {showFilters ? <X size={18} /> : <ChevronRight size={18} />}
              </button>

              {/* Category Filters - Desktop */}
              <div className="hidden lg:flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === category.id
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {category.icon}
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden mt-4 p-4 bg-white rounded-xl border border-slate-200">
                <h3 className="font-semibold text-slate-800 mb-3">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                        selectedCategory === category.id
                          ? "bg-blue-600 text-white"
                          : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {category.icon}
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-slate-500 text-sm">
              Showing {filteredEvents.length} of {events.length} events
            </p>
          </div>

          {/* Events Grid */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden"
                >
                  {/* Event Image */}
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-semibold text-blue-600">
                      {getCategoryIcon(event.category)}
                      <span className="capitalize">{event.category}</span>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                      {event.status}
                    </div>

                    {/* Placeholder Content */}
                    <div className="flex items-center justify-center h-full">
                      <Calendar size={48} className="text-white/30" />
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    {/* Event Meta */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Calendar size={14} className="text-blue-400" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock size={14} className="text-blue-400" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <MapPin size={14} className="text-blue-400" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Users size={14} className="text-blue-400" />
                        <span>{event.registered}/{event.seats} Registered</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {event.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs bg-slate-50 text-slate-500 px-2 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Price and Register Button */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                      <div>
                        <p className="text-xs text-slate-400">Price</p>
                        <p className="text-lg font-bold text-blue-600">{event.price}</p>
                      </div>
                      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all">
                        <Ticket size={14} />
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // No Results
            <div className="text-center py-16">
              <AlertCircle size={48} className="text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">No events found</h3>
              <p className="text-slate-500">Try adjusting your search or filter criteria</p>
            </div>
          )}

          {/* Pagination */}
          {filteredEvents.length > 0 && (
            <div className="flex justify-center gap-2 mt-12">
              <button className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-all bg-white">
                <ChevronLeft size={18} />
              </button>
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all">
                1
              </button>
              <button className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-all bg-white">
                2
              </button>
              <button className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-all bg-white">
                3
              </button>
              <button className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-all bg-white">
                <ChevronRight size={18} />
              </button>
            </div>
          )}

          {/* Upcoming Events Banner */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">Want to host an event?</h3>
            <p className="text-blue-100 mb-4">
              Have an idea for an event? We'd love to help you make it happen.
            </p>
            <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-100 transition-all">
              Propose an Event
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}