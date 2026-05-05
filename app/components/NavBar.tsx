"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  Bell,
  ChevronDown,
  Menu,
  X,
  LogOut,
  User,
} from "lucide-react";

// ─── Nav links ────────────────────────────────────────────
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Members", href: "/members" },
  { label: "News", href: "/news" },
  { label: "Elections", href: "/elections" },
];

// ─── Main Component ─────────────────────────────────────
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  // For demo - replace with actual auth later
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* ── Top strip - Modern Light ── */}
      <div className="bg-slate-50 border-b border-slate-200 text-slate-600 text-xs py-2 px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <span className="hidden sm:block">
          Dhaka College Management Association — Believing in Unity
        </span>
        <span className="sm:hidden text-center">
          DCMA — Dhaka College Management Association
        </span>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">📞 01700-000000</span>
          <span className="hidden sm:flex items-center gap-1">✉ dcma@dhakacollege.edu.bd</span>
        </div>
      </div>

      {/* ── Main Navbar - Modern Light Design ── */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100"
            : "bg-white border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* ── Logo - Modern ── */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              {!logoError ? (
                <div className="relative w-10 h-10">
                  <Image
                    src="/dcma-logo.png"
                    alt="DCMA Logo"
                    width={40}
                    height={40}
                    className="rounded-xl object-contain"
                    onError={() => setLogoError(true)}
                    priority
                  />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                  <GraduationCap size={20} className="text-white" />
                </div>
              )}
              <div className="leading-tight">
                <p className="font-bold text-sm text-slate-800">
                Dhaka College Management Association
                </p>
                <p className="text-[10px] font-medium text-blue-500 tracking-wide">
                  Unity in Diversity
                </p>
              </div>
            </Link>

            {/* ── Desktop Nav Links - Hidden on mobile ── */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* ── Right Side ── */}
            <div className="flex items-center gap-3">
              {isLoggedIn ? (
                <>
                  {/* Notification Bell */}
                  <button className="relative p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-all">
                    <Bell size={18} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-400 rounded-full ring-2 ring-white" />
                  </button>

                  {/* User Menu - Desktop */}
                  <div className="hidden md:block relative">
                    <button
                      onClick={() => setUserMenuOpen(!userMenuOpen)}
                      className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl hover:bg-slate-50 transition-all border border-slate-200"
                    >
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-white text-xs font-medium">
                        R
                      </div>
                      <span className="text-sm font-medium text-slate-700">
                        Rakib
                      </span>
                      <ChevronDown size={14} className="text-slate-400" />
                    </button>

                    {/* Dropdown Menu */}
                    {userMenuOpen && (
                      <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5">
                        <Link
                          href="/profile"
                          className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          <User size={14} className="text-slate-400" />
                          My Profile
                        </Link>
                        <button
                          onClick={() => {
                            setIsLoggedIn(false);
                            setUserMenuOpen(false);
                          }}
                          className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-rose-600 hover:bg-rose-50 transition-colors w-full text-left"
                        >
                          <LogOut size={14} />
                          Logout
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Mobile user icon */}
                  <div className="md:hidden">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-white text-xs font-medium">
                      R
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsLoggedIn(true)}
                    className="hidden sm:block px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-all"
                  >
                    Login
                  </button>
                  <Link
                    href="/register"
                    className="px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-sm hover:shadow-md transition-all"
                  >
                    Register
                  </Link>
                </div>
              )}

              {/* Mobile menu button - Always visible on mobile */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-all"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile Menu - Full width overlay ── */}
        <div
          className={`md:hidden fixed inset-x-0 top-[calc(4rem+1px)] bg-white border-t border-slate-100 shadow-lg transition-all duration-300 ease-in-out z-40 ${
            mobileOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-full invisible"
          }`}
        >
          <div className="px-4 py-3 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center px-3 py-3 rounded-lg text-base text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-all"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {!isLoggedIn && (
              <>
                <div className="border-t border-slate-100 my-2"></div>
                <button
                  onClick={() => {
                    setIsLoggedIn(true);
                    setMobileOpen(false);
                  }}
                  className="w-full text-center px-4 py-3 rounded-lg text-base font-medium text-slate-600 border border-slate-200 hover:bg-slate-50 transition-all"
                >
                  Login
                </button>
              </>
            )}
            
            {isLoggedIn && (
              <>
                <div className="border-t border-slate-100 my-2"></div>
                <Link
                  href="/profile"
                  className="flex items-center gap-3 px-3 py-3 rounded-lg text-base text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  <User size={18} />
                  My Profile
                </Link>
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    setMobileOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-base text-rose-600 hover:bg-rose-50 transition-all"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Overlay backdrop for mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 z-30"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}