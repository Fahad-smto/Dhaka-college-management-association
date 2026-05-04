"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Home,
  CalendarDays,
  Users,
  ImageIcon,
  Vote,
  Bell,
  ChevronDown,
  Menu,
  X,
  LogOut,
  User,
} from "lucide-react";

// ─── Nav links ────────────────────────────────────────────
const navLinks = [
  { label: "হোম", href: "/" },
  { label: "ইভেন্ট", href: "/events" },
  { label: "গ্যালারি", href: "/gallery" },
  { label: "সদস্যবৃন্দ", href: "/members" },
  { label: "সংবাদ", href: "/news" },
  { label: "নির্বাচন", href: "/elections" },
];

// ─── Main Component ─────────────────────────────────────
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // For demo - replace with actual auth later
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Top strip ─────────────────────────────────── */}
      <div className="bg-blue-950 text-blue-200 text-xs py-1.5 px-4 flex justify-between items-center">
        <span className="hidden sm:block">
          ঢাকা কলেজ ম্যানেজমেন্ট অ্যাসোসিয়েশন — আমরা একতায় বিশ্বাসী
        </span>
        <span className="sm:hidden">DCMA — ঢাকা কলেজ</span>
        <div className="flex items-center gap-3">
          <span>📞 01700-000000</span>
          <span className="hidden sm:block">✉ dcma@dhakacollege.edu.bd</span>
        </div>
      </div>

      {/* ── Main Navbar ────────────────────────────────── */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg border-b border-blue-100"
            : "bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md ${
                  scrolled ? "bg-blue-600" : "bg-white/20 backdrop-blur-sm"
                }`}
              >
                <GraduationCap size={22} className="text-white" />
              </div>
              <div className="leading-tight">
                <p className={`font-bold text-sm ${scrolled ? "text-blue-800" : "text-white"}`}>
                  ঢাকা কলেজ
                </p>
                <p className={`text-[10px] font-medium ${scrolled ? "text-blue-400" : "text-blue-200"}`}>
                  DCMA
                </p>
              </div>
            </Link>

            {/* ── Desktop Nav Links ── */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    scrolled
                      ? "text-blue-700 hover:bg-blue-50"
                      : "text-white/90 hover:bg-white/15"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* ── Right Side ── */}
            <div className="flex items-center gap-2">
              {isLoggedIn ? (
                <>
                  {/* Notification */}
                  <button
                    className={`relative w-9 h-9 rounded-lg flex items-center justify-center ${
                      scrolled
                        ? "text-blue-600 hover:bg-blue-50"
                        : "text-white/80 hover:bg-white/15"
                    }`}
                  >
                    <Bell size={18} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
                  </button>

                  {/* User Menu */}
                  <div className="relative">
                    <button
                      onClick={() => setUserMenuOpen(!userMenuOpen)}
                      className={`flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl ${
                        scrolled
                          ? "hover:bg-blue-50 border border-blue-100"
                          : "hover:bg-white/15 border border-white/20"
                      }`}
                    >
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                        R
                      </div>
                      <span className={`text-sm font-medium ${scrolled ? "text-blue-800" : "text-white"}`}>
                        রাকিব
                      </span>
                      <ChevronDown size={13} className={scrolled ? "text-blue-400" : "text-white/60"} />
                    </button>

                    {/* Dropdown */}
                    {userMenuOpen && (
                      <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-blue-50 py-1.5">
                        <Link
                          href="/profile"
                          className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-blue-700 hover:bg-blue-50"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          <User size={15} />
                          আমার প্রোফাইল
                        </Link>
                        <button
                          onClick={() => {
                            setIsLoggedIn(false);
                            setUserMenuOpen(false);
                          }}
                          className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 w-full text-left"
                        >
                          <LogOut size={15} />
                          লগআউট
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsLoggedIn(true)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      scrolled
                        ? "text-blue-700 hover:bg-blue-50"
                        : "text-white/90 hover:bg-white/15"
                    }`}
                  >
                    লগইন
                  </button>
                  <Link
                    href="/register"
                    className={`px-4 py-2 rounded-lg text-sm font-semibold shadow-sm ${
                      scrolled
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-white text-blue-700 hover:bg-blue-50"
                    }`}
                  >
                    নিবন্ধন
                  </Link>
                </div>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden w-9 h-9 rounded-lg flex items-center justify-center ${
                  scrolled
                    ? "text-blue-700 hover:bg-blue-50"
                    : "text-white hover:bg-white/15"
                }`}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-blue-100 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center px-3 py-2.5 rounded-lg text-sm text-blue-700 hover:bg-blue-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {!isLoggedIn && (
                <div className="flex gap-2 pt-3 border-t border-blue-50 mt-2">
                  <button
                    onClick={() => {
                      setIsLoggedIn(true);
                      setMobileOpen(false);
                    }}
                    className="flex-1 text-center px-4 py-2.5 rounded-lg text-sm font-medium text-blue-700 border border-blue-200 hover:bg-blue-50"
                  >
                    লগইন
                  </button>
                  <Link
                    href="/register"
                    className="flex-1 text-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    নিবন্ধন
                  </Link>
                </div>
              )}
              
              {isLoggedIn && (
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    setMobileOpen(false);
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-red-600 hover:bg-red-50 mt-2 border-t border-blue-50 pt-3"
                >
                  <LogOut size={15} />
                  লগআউট
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}