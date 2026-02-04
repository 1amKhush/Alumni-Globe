"use client";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Search, Filter, X, Users, MapPin, Building2 } from "lucide-react";

// Dynamically import MapboxGlobe to avoid SSR issues
const MapboxGlobe = dynamic(() => import("@/components/MapboxGlobe"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-slate-900">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
        <p className="text-white/70 text-sm font-medium">Loading Globe...</p>
      </div>
    </div>
  ),
});

const GlobePage: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-slate-900">
      {/* Full-screen Globe */}
      <div className="absolute inset-0">
        <MapboxGlobe />
      </div>

      {/* Top Navigation Bar */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between p-4 lg:p-6">
          {/* Back to Home */}
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2.5 bg-slate-800/80 backdrop-blur-md rounded-xl border border-white/10 text-white hover:bg-slate-700/80 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <ArrowLeft className="w-5 h-5" aria-hidden="true" />
            <span className="hidden sm:inline font-medium">Back to Home</span>
          </Link>

          {/* Logo - Center */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-white/10 backdrop-blur-md p-1">
              <Image
                src="/IIT-Logo.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">AlumniGlobe</h1>
              <p className="text-xs text-blue-200/70">IIT Jodhpur</p>
            </div>
          </div>

          {/* Search & Filter */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`p-2.5 rounded-xl border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                isFilterOpen
                  ? "bg-blue-600 border-blue-500 text-white"
                  : "bg-slate-800/80 backdrop-blur-md border-white/10 text-white hover:bg-slate-700/80"
              }`}
              aria-label="Toggle filters"
              aria-expanded={isFilterOpen}
            >
              <Filter className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Filter Sidebar */}
      <aside
        className={`absolute top-0 right-0 h-full w-full sm:w-96 z-40 transform transition-transform duration-300 ease-in-out ${
          isFilterOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Filters"
        aria-hidden={!isFilterOpen}
      >
        <div className="h-full bg-slate-900/95 backdrop-blur-xl border-l border-white/10 overflow-y-auto">
          {/* Filter Header */}
          <div className="sticky top-0 bg-slate-900/95 backdrop-blur-xl p-4 border-b border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">
                Search & Filter
              </h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                aria-hidden="true"
              />
              <input
                type="search"
                placeholder="Search alumni by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Filter Content */}
          <div className="p-4 space-y-6">
            {/* Batch Filter */}
            <div>
              <h3 className="text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
                <Users className="w-4 h-4" aria-hidden="true" />
                Batch Year
              </h3>
              <div className="flex flex-wrap gap-2">
                {["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015"].map(
                  (year) => (
                    <button
                      key={year}
                      className="px-3 py-1.5 text-sm bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white rounded-lg border border-slate-700 hover:border-blue-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                    >
                      {year}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Branch Filter */}
            <div>
              <h3 className="text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
                <Building2 className="w-4 h-4" aria-hidden="true" />
                Branch
              </h3>
              <div className="space-y-2">
                {[
                  "Computer Science",
                  "Electrical Engineering",
                  "Mechanical Engineering",
                  "Civil Engineering",
                  "Chemical Engineering",
                  "Bioscience & Bioengineering",
                  "Metallurgical & Materials",
                ].map((branch) => (
                  <label
                    key={branch}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-blue-500 focus:ring-blue-500 focus:ring-offset-0"
                    />
                    <span className="text-sm text-slate-300">{branch}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Location Filter */}
            <div>
              <h3 className="text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                Location
              </h3>
              <div className="space-y-2">
                {[
                  "India",
                  "United States",
                  "United Kingdom",
                  "Germany",
                  "Singapore",
                  "Canada",
                  "Australia",
                ].map((location) => (
                  <label
                    key={location}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-blue-500 focus:ring-blue-500 focus:ring-offset-0"
                    />
                    <span className="text-sm text-slate-300">{location}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Apply/Reset Buttons */}
            <div className="flex gap-3 pt-4 border-t border-slate-700">
              <button className="flex-1 px-4 py-2.5 text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
                Reset
              </button>
              <button className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Filter Backdrop */}
      {isFilterOpen && (
        <div
          className="absolute inset-0 bg-black/50 z-30 sm:hidden"
          onClick={() => setIsFilterOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Bottom Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="p-4 lg:p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 sm:gap-8 px-6 py-4 bg-slate-800/80 backdrop-blur-md rounded-2xl border border-white/10">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  10,000+
                </div>
                <div className="text-xs sm:text-sm text-slate-400">Alumni</div>
              </div>
              <div className="w-px h-10 bg-slate-600" aria-hidden="true" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-slate-400">Countries</div>
              </div>
              <div className="w-px h-10 bg-slate-600" aria-hidden="true" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  500+
                </div>
                <div className="text-xs sm:text-sm text-slate-400">Companies</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions Tooltip */}
      <div className="absolute bottom-24 left-4 z-20 hidden lg:block">
        <div className="px-4 py-3 bg-slate-800/80 backdrop-blur-md rounded-xl border border-white/10">
          <p className="text-xs text-slate-400 mb-2">Navigation</p>
          <div className="space-y-1 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <kbd className="px-1.5 py-0.5 bg-slate-700 rounded text-xs">
                Drag
              </kbd>
              <span>Rotate globe</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="px-1.5 py-0.5 bg-slate-700 rounded text-xs">
                Scroll
              </kbd>
              <span>Zoom in/out</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="px-1.5 py-0.5 bg-slate-700 rounded text-xs">
                Click
              </kbd>
              <span>View details</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobePage;
