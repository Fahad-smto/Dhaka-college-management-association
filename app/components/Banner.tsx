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

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300">
      {/* Main Banner Container */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 h-full flex items-center"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
                <div className="max-w-2xl">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      {slide.icon}
                    </div>
                  </div>

                  {/* Subtitle */}
                  <p className="text-blue-200 text-sm md:text-base uppercase tracking-wider mb-3">
                    {slide.subtitle}
                  </p>

                  {/* Title */}
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="text-blue-100 text-base md:text-lg mb-8 leading-relaxed">
                    {slide.description}
                  </p>

                  {/* Button */}
                  <Link
                    href={slide.buttonLink}
                    className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all hover:gap-3 group"
                  >
                    {slide.buttonText}
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-sm transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-sm transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots/Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all h-2 rounded-full ${
                currentSlide === index
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Stats Section (Optional) */}
      <div className="bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
              <div className="text-blue-200 text-sm mt-1">Active Members</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">50+</div>
              <div className="text-blue-200 text-sm mt-1">Events Organized</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white">10+</div>
              <div className="text-blue-200 text-sm mt-1">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}