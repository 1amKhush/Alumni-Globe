"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

interface NavItem {
  name: string;
  href: string;
  isExternal?: boolean;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Globe", href: "/globe", isExternal: true },
  { name: "Community", href: "#community" },
  { name: "Events", href: "#events" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1024) {
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg p-1"
            aria-label="AlumniGlobe - IIT Jodhpur Home"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-lg bg-white/10 p-1 transition-transform group-hover:scale-105">
              <Image
                src="/IIT-Logo.png"
                alt=""
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-white leading-tight">
                IIT Jodhpur
              </h1>
              <p className="text-xs text-blue-200/80">Society of Alumni Affairs</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1" role="menubar">
            {navItems.map((item) => (
              <li key={item.name} role="none">
                {item.isExternal ? (
                  <Link
                    href={item.href}
                    role="menuitem"
                    className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    role="menuitem"
                    className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/globe"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <span>Explore Globe</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <FontAwesomeIcon
              icon={isMenuOpen ? faTimes : faBars}
              className="h-6 w-6"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`lg:hidden fixed inset-0 top-16 z-40 transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <nav
            className={`relative bg-slate-900 border-t border-white/10 transform transition-transform duration-300 ${
              isMenuOpen ? "translate-y-0" : "-translate-y-4"
            }`}
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col py-4 px-4" role="menu">
              {navItems.map((item, index) => (
                <li key={item.name} role="none">
                  {item.isExternal ? (
                    <Link
                      href={item.href}
                      role="menuitem"
                      onClick={closeMenu}
                      className="block px-4 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-400"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      role="menuitem"
                      onClick={closeMenu}
                      className="block px-4 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-400"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
              <li className="mt-4 px-4" role="none">
                <Link
                  href="/globe"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <span>Explore Globe</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;