"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, ChevronLeft, Calendar, MapPin, Users } from "lucide-react";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Dhaka College Management Association",
      subtitle: "Developing Leadership, Power of Unity",
      description: "Committed to developing students' professional skills and leadership qualities",
      buttonText: "Learn About Us",
      buttonLink: "/about",
      icon: <Users className="text-blue-400" size={24} />,
    },
    {
      title: "Join Various Programs",
      subtitle: "Competitions, Seminars & Workshops",
      description: "Build yourself through seminars, workshops and cultural programs",
      buttonText: "View Activities",
      buttonLink: "/activities",
      icon: <Calendar className="text-green-400" size={24} />,
    },
    {
      title: "Become a Member Today",
      subtitle: "Be Part of Our Community",
      description: "Join DCMA and enhance your leadership capabilities",
      buttonText: "Register Now",
      buttonLink: "/register",
      icon: <MapPin className="text-yellow-400" size={24} />,
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

 
}