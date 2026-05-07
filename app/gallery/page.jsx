"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  X, 
  ChevronLeft, 
  ChevronRight,
  Calendar,
  Users,
  Camera,
  Heart,
  Share2,
  Download,
  Clock,
  MapPin
} from "lucide-react";
import Navbar from  "../components/NavBar";
import Footer from  "../components/Footer";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const categories = [
    { id: "all", label: "All Photos", count: 24 },
    { id: "events", label: "Events", count: 12 },
    { id: "cultural", label: "Cultural", count: 5 },
    { id: "workshops", label: "Workshops", count: 4 },
    { id: "competitions", label: "Competitions", count: 3 },
  ];

  const galleryImages = [
    // Events Category
    {
      id: 1,
      title: "Annual Leadership Summit 2024",
      category: "events",
      image: "/gallery/summit1.jpg",
      thumbnail: "/gallery/summit1.jpg",
      date: "December 15, 2024",
      location: "Dhaka College Auditorium",
      photographer: "DCMA Media Team",
      likes: 245,
      views: 1234,
      description: "Inaugural ceremony of the Annual Leadership Summit with distinguished guests.",
    },
    {
      id: 2,
      title: "Keynote Speech Session",
      category: "events",
      image: "/gallery/summit2.jpg",
      thumbnail: "/gallery/summit2.jpg",
      date: "December 15, 2024",
      location: "Dhaka College Auditorium",
      photographer: "DCMA Media Team",
      likes: 189,
      views: 987,
      description: "Industry experts sharing valuable insights with students.",
    },
    {
      id: 3,
      title: "Panel Discussion",
      category: "events",
      image: "/gallery/summit3.jpg",
      thumbnail: "/gallery/summit3.jpg",
      date: "December 15, 2024",
      location: "Conference Hall",
      photographer: "DCMA Media Team",
      likes: 167,
      views: 876,
      description: "Panel discussion on future leadership challenges.",
    },
    {
      id: 4,
      title: "Business Competition Finals",
      category: "competitions",
      image: "/gallery/competition1.jpg",
      thumbnail: "/gallery/competition1.jpg",
      date: "December 10, 2024",
      location: "Business Faculty",
      photographer: "DCMA Media Team",
      likes: 312,
      views: 1543,
      description: "Final round of the Inter-College Business Competition.",
    },
    {
      id: 5,
      title: "Prize Giving Ceremony",
      category: "competitions",
      image: "/gallery/competition2.jpg",
      thumbnail: "/gallery/competition2.jpg",
      date: "December 10, 2024",
      location: "Business Faculty",
      photographer: "DCMA Media Team",
      likes: 234,
      views: 1098,
      description: "Winners receiving awards and recognition.",
    },
    {
      id: 6,
      title: "Cultural Night Performance",
      category: "cultural",
      image: "/gallery/cultural1.jpg",
      thumbnail: "/gallery/cultural1.jpg",
      date: "November 30, 2024",
      location: "College Ground",
      photographer: "DCMA Media Team",
      likes: 456,
      views: 2345,
      description: "Traditional dance performance by students.",
    },
    {
      id: 7,
      title: "Music Concert",
      category: "cultural",
      image: "/gallery/cultural2.jpg",
      thumbnail: "/gallery/cultural2.jpg",
      date: "November 30, 2024",
      location: "College Ground",
      photographer: "DCMA Media Team",
      likes: 389,
      views: 1876,
      description: "Live music performance by popular artists.",
    },
    {
      id: 8,
      title: "Professional Development Workshop",
      category: "workshops",
      image: "/gallery/workshop1.jpg",
      thumbnail: "/gallery/workshop1.jpg",
      date: "November 25, 2024",
      location: "Seminar Hall",
      photographer: "DCMA Media Team",
      likes: 178,
      views: 945,
      description: "Students participating in skill development workshop.",
    },
    {
      id: 9,
      title: "CV Writing Session",
      category: "workshops",
      image: "/gallery/workshop2.jpg",
      thumbnail: "/gallery/workshop2.jpg",
      date: "November 25, 2024",
      location: "Seminar Hall",
      photographer: "DCMA Media Team",
      likes: 145,
      views: 823,
      description: "Hands-on session on CV writing and interview preparation.",
    },
    {
      id: 10,
      title: "Cultural Dance Performance",
      category: "cultural",
      image: "/gallery/cultural3.jpg",
      thumbnail: "/gallery/cultural3.jpg",
      date: "November 30, 2024",
      location: "College Ground",
      photographer: "DCMA Media Team",
      likes: 267,
      views: 1432,
      description: "Colorful cultural dance performance.",
    },
    {
      id: 11,
      title: "Debate Competition",
      category: "competitions",
      image: "/gallery/debate1.jpg",
      thumbnail: "/gallery/debate1.jpg",
      date: "December 5, 2024",
      location: "Conference Room",
      photographer: "DCMA Media Team",
      likes: 198,
      views: 1123,
      description: "Students engaged in intense debate competition.",
    },
    {
      id: 12,
      title: "Event Volunteers",
      category: "events",
      image: "/gallery/volunteers.jpg",
      thumbnail: "/gallery/volunteers.jpg",
      date: "December 15, 2024",
      location: "Dhaka College",
      photographer: "DCMA Media Team",
      likes: 234,
      views: 1456,
      description: "Dedicated volunteers making events successful.",
    },
  ];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const currentImage = selectedImage !== null ? galleryImages[selectedImage] : null;

  const nextImage = () => {
    if (selectedImage !== null && selectedImage < filteredImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Explore memories and moments from our events, workshops, and cultural programs.
              Relive the best moments of DCMA!
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {category.label}
                <span className={`ml-2 px-1.5 py-0.5 rounded-full text-xs ${
                  selectedCategory === category.id
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 text-slate-500"
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 mb-8">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Camera size={18} className="text-blue-500" />
                  <span className="text-sm text-slate-600">
                    {filteredImages.length} Photos
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-blue-500" />
                  <span className="text-sm text-slate-600">
                    Latest: December 2024
                  </span>
                </div>
              </div>
              <div className="text-sm text-slate-400">
                Click on any photo to view in full size
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group cursor-pointer"
                  onClick={() => {
                    setSelectedImage(index);
                    setLightboxOpen(true);
                  }}
                >
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100">
                    {/* Image Container */}
                    <div className="relative h-64 bg-gradient-to-br from-purple-400 to-blue-500 overflow-hidden">
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all z-10" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 z-20">
                        <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-semibold text-blue-600 capitalize">
                          {image.category}
                        </span>
                      </div>
                      
                      {/* Overlay Icons */}
                      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all z-20">
                        <button className="p-2 bg-white rounded-full hover:bg-blue-500 hover:text-white transition-all">
                          <Heart size={18} />
                        </button>
                        <button className="p-2 bg-white rounded-full hover:bg-blue-500 hover:text-white transition-all">
                          <Share2 size={18} />
                        </button>
                        <button className="p-2 bg-white rounded-full hover:bg-blue-500 hover:text-white transition-all">
                          <Download size={18} />
                        </button>
                      </div>

                      {/* Placeholder Content */}
                      <div className="flex items-center justify-center h-full">
                        <Camera size={48} className="text-white/30" />
                      </div>
                    </div>

                    {/* Image Info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-slate-800 mb-1 line-clamp-1">
                        {image.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {image.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart size={12} />
                          {image.likes}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Camera size={48} className="text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">No photos found</h3>
              <p className="text-slate-500">Try selecting a different category</p>
            </div>
          )}

          {/* Load More Button */}
          {filteredImages.length > 0 && filteredImages.length >= 12 && (
            <div className="text-center mt-12">
              <button className="px-6 py-3 bg-white border border-slate-200 rounded-lg text-slate-600 font-medium hover:bg-slate-50 transition-all">
                Load More
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && currentImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-all z-10"
          >
            <X size={32} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-gray-300 transition-all disabled:opacity-50"
            disabled={selectedImage === 0}
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-gray-300 transition-all disabled:opacity-50"
            disabled={selectedImage === filteredImages.length - 1}
          >
            <ChevronRight size={40} />
          </button>

          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl overflow-hidden">
              <div className="h-[60vh] md:h-[70vh] flex items-center justify-center">
                <Camera size={80} className="text-white/50" />
              </div>
            </div>

            <div className="mt-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{currentImage.title}</h3>
              <p className="text-gray-300 mb-4">{currentImage.description}</p>
              
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{currentImage.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{currentImage.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Camera size={16} />
                  <span>By: {currentImage.photographer}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart size={16} />
                  <span>{currentImage.likes} likes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>{currentImage.views} views</span>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all">
                  <Heart size={18} />
                  Like
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all">
                  <Share2 size={18} />
                  Share
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all">
                  <Download size={18} />
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}