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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Top strip - Modern Light ── */}
      <div className="bg-slate-50 border-b border-slate-200 text-slate-600 text-xs py-2 px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <span className="hidden sm:block">
          Dhaka College Management Association — Believing in Unity
        </span>
        <span className="sm:hidden text-center">
          DCMA — Dhaka College
        </span>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">📞 01700-000000</span>
          <span className="hidden sm:flex items-center gap-1">✉ dcma@dhakacollege.edu.bd</span>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-white"
        } border-b border-slate-100`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
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
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-sm">
                  <GraduationCap size={20} className="text-white" />
                </div>
              )}
              <div className="leading-tight">
                <p className="font-bold text-sm text-slate-800">
                  Dhaka College
                </p>
                <p className="text-[10px] font-medium text-blue-500 tracking-wide">
                  DCMA
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
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

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {isLoggedIn ? (
                <>
                  <button className="hidden sm:block relative p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-all">
                    <Bell size={18} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-400 rounded-full ring-2 ring-white" />
                  </button>

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

                    {userMenuOpen && (
                      <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5">
                        <Link
                          href="/profile"
                          className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          <User size={14} />
                          My Profile
                        </Link>
                        <button
                          onClick={() => {
                            setIsLoggedIn(false);
                            setUserMenuOpen(false);
                          }}
                          className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-rose-600 hover:bg-rose-50 w-full text-left"
                        >
                          <LogOut size={14} />
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="hidden sm:flex items-center gap-2">
                  <button
                    onClick={() => setIsLoggedIn(true)}
                    className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-all"
                  >
                    Login
                  </button>
                  <Link
                    href="/register"
                    className="px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-sm hover:shadow-md"
                  >
                    Register
                  </Link>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-600 hover:bg-slate-100 transition-all z-50"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Slide from right */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-40 transition-transform duration-300 ease-in-out md:hidden ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ top: 0 }}
        >
          <div className="pt-20 pb-6 px-4">
            {/* Mobile User Info */}
            {isLoggedIn ? (
              <div className="mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-white text-lg font-bold">
                    R
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Rakib Hossain</p>
                    <p className="text-xs text-slate-500">rakib@example.com</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mb-6 pb-4 border-b border-slate-100 space-y-2">
                <button
                  onClick={() => {
                    setIsLoggedIn(true);
                    setMobileOpen(false);
                  }}
                  className="w-full px-4 py-2.5 rounded-lg text-sm font-medium text-blue-600 border border-blue-200 hover:bg-blue-50"
                >
                  Login
                </button>
                <Link
                  href="/register"
                  className="w-full block text-center px-4 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Register
                </Link>
              </div>
            )}

            {/* Mobile Navigation Links */}
            <div className="space-y-1">
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
              
              {isLoggedIn && (
                <>
                  <Link
                    href="/profile"
                    className="flex items-center gap-3 px-3 py-3 rounded-lg text-base text-slate-600 hover:text-blue-600 hover:bg-slate-50"
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
                    className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-base text-rose-600 hover:bg-rose-50 mt-4"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Overlay */}
        {mobileOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-30 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </nav>
    </>
  );
}