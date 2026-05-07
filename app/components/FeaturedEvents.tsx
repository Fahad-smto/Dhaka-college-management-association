"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, MapPin, Users, Clock, ArrowRight, Trophy, Briefcase, GraduationCap } from "lucide-react";

export default function FeaturedEvents() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const events = {
    upcoming: [
      {
        id: 1,
        title: "Leadership Summit 2024",
        description: "Annual leadership conference with industry experts",
        date: "December 15, 2024",
        time: "10:00 AM - 5:00 PM",
        location: "Dhaka College Auditorium",
        image: "/events/leadership.jpg",
        category: "Conference",
        icon: <Trophy size={20} />,
        attendees: 250,
      },
      {
        id: 2,
        title: "Business Case Competition",
        description: "Inter-college business solution competition",
        date: "December 20, 2024",
        time: "9:00 AM - 6:00 PM",
        location: "Business Faculty Building",
        image: "/events/competition.jpg",
        category: "Competition",
        icon: <Briefcase size={20} />,
        attendees: 150,
      },
      {
        id: 3,
        title: "Career Workshop",
        description: "CV writing and interview preparation workshop",
        date: "December 25, 2024",
        time: "2:00 PM - 5:00 PM",
        location: "Seminar Hall",
        image: "/events/workshop.jpg",
        category: "Workshop",
        icon: <GraduationCap size={20} />,
        attendees: 100,
      },
    ],
    ongoing: [
      {
        id: 4,
        title: "Membership Drive 2024",
        description: "New member registration campaign",
        date: "December 1-30, 2024",
        time: "All Day",
        location: "Online & Campus",
        image: "/events/membership.jpg",
        category: "Campaign",
        icon: <Users size={20} />,
        attendees: 500,
      },
    ],
    past: [
      {
        id: 5,
        title: "Annual Sports Day",
        description: "Inter-department sports competition",
        date: "November 20, 2024",
        time: "8:00 AM - 6:00 PM",
        location: "College Ground",
        image: "/events/sports.jpg",
        category: "Sports",
        icon: <Trophy size={20} />,
        attendees: 400,
      },
    ],
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Calendar size={16} />
            <span>Upcoming & Ongoing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            Featured Events & Activities
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Join our exciting events designed to enhance your skills and expand your network
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-2 mb-10">
          {[
            { id: "upcoming", label: "Upcoming", count: events.upcoming.length },
            { id: "ongoing", label: "Ongoing", count: events.ongoing.length },
            { id: "past", label: "Past", count: events.past.length },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {tab.label}
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                activeTab === tab.id ? "bg-white/20" : "bg-slate-100 text-slate-500"
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events[activeTab as keyof typeof events].map((event) => (
            <div
              key={event.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100"
            >
              {/* Image Placeholder - Replace with actual images */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-semibold text-blue-600">
                  {event.category}
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white text-sm bg-black/30 backdrop-blur-sm px-2 py-1 rounded-lg">
                  {event.icon}
                  <span>{event.attendees}+ Attendees</span>
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

                {/* Event Meta Info */}
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
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-3 border-t border-slate-100">
                  {activeTab !== "past" ? (
                    <>
                      <Link
                        href={`/events/${event.id}`}
                        className="flex-1 text-center px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all"
                      >
                        Register Now
                      </Link>
                      <button className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all border border-slate-200">
                        Details
                      </button>
                    </>
                  ) : (
                    <Link
                      href={`/events/${event.id}`}
                      className="w-full text-center px-4 py-2 rounded-lg text-sm font-medium text-blue-600 hover:bg-blue-50 transition-all border border-blue-200"
                    >
                      View Gallery
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
         
        </div>
      </div>
    </section>
  );
}