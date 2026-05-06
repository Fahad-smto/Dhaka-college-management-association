"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin,
  Clock,
  ChevronRight,
  GraduationCap,
  Globe,
  
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Members", href: "/members" },
    { label: "Gallery", href: "/gallery" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ];

  const importantLinks = [
    { label: "Executive Committee", href: "/leadership" },
    { label: "Elections", href: "/elections" },
    { label: "Become a Member", href: "/register" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "FAQs", href: "/faqs" },
  ];

  const contactInfo = [
    { icon: <MapPin size={16} />, text: "Dhaka College, Dhaka - 1000, Bangladesh" },
    { icon: <Phone size={16} />, text: "+880 1700-000000" },
    { icon: <Mail size={16} />, text: "dcma@dhakacollege.edu.bd" },
    { icon: <Clock size={16} />, text: "Sunday - Thursday: 9:00 AM - 5:00 PM" },
  ];

  const socialLinks = [
    { icon: <Globe size={18} />, href: "#", label: "Website" },
    
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1 - About */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <GraduationCap size={20} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-lg text-white">DCMA</p>
                <p className="text-xs text-blue-300">Dhaka College</p>
              </div>
            </Link>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              Dhaka College Management Association (DCMA) is committed to developing 
              students' professional skills and leadership qualities for a better future.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500 mt-1"></span>
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white text-sm flex items-center gap-1 group transition-all"
                  >
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Important Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Important
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500 mt-1"></span>
            </h3>
            <ul className="space-y-2">
              {importantLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white text-sm flex items-center gap-1 group transition-all"
                  >
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500 mt-1"></span>
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="text-blue-400 mt-0.5">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-2">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-l-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center text-slate-400 text-xs">
            <p>
              &copy; {currentYear} Dhaka College Management Association. All rights reserved.
            </p>
            <p>
              Designed with ❤️ for DCMA
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}