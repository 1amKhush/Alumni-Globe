"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, Users, MapPin } from "lucide-react";

const GlobePreviewSection: React.FC = () => {
  return (
    <section
      id="globe"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 overflow-hidden"
      aria-labelledby="globe-preview-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-blue-400 bg-blue-400/10 rounded-full mb-4">
              Interactive Experience
            </span>
            <h2
              id="globe-preview-heading"
              className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-white mb-6"
            >
              Explore Our Global Alumni Network
            </h2>
            <p className="text-lg text-slate-300/80 mb-8">
              Navigate our interactive 3D globe to discover IIT Jodhpur alumni
              located around the world. Find connections in your city, connect
              with batch-mates, and expand your professional network.
            </p>

            {/* Feature highlights */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Globe className="w-5 h-5 text-blue-400" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">50+</div>
                  <div className="text-xs text-slate-400">Countries</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Users className="w-5 h-5 text-green-400" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">10K+</div>
                  <div className="text-xs text-slate-400">Alumni</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <MapPin className="w-5 h-5 text-purple-400" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-white">200+</div>
                  <div className="text-xs text-slate-400">Cities</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/globe"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <span>Launch Interactive Globe</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>

          {/* Globe Preview Visual */}
          <div className="order-1 lg:order-2">
            <Link
              href="/globe"
              className="block relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-3xl"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl group-hover:blur-2xl transition-all duration-500" />

                {/* Globe visualization */}
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 overflow-hidden group-hover:border-blue-500/30 transition-colors duration-300">
                  {/* Grid lines */}
                  <svg
                    className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-30 transition-opacity"
                    viewBox="0 0 400 400"
                    aria-hidden="true"
                  >
                    {/* Latitude lines */}
                    <circle
                      cx="200"
                      cy="200"
                      r="180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-blue-400"
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="140"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-blue-400"
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="100"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-blue-400"
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="60"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-blue-400"
                    />
                    {/* Longitude lines */}
                    <ellipse
                      cx="200"
                      cy="200"
                      rx="180"
                      ry="70"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-blue-400"
                    />
                    <ellipse
                      cx="200"
                      cy="200"
                      rx="70"
                      ry="180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-blue-400"
                    />
                    <line
                      x1="20"
                      y1="200"
                      x2="380"
                      y2="200"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-blue-400"
                    />
                    <line
                      x1="200"
                      y1="20"
                      x2="200"
                      y2="380"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-blue-400"
                    />
                  </svg>

                  {/* Animated location dots */}
                  <div
                    className="absolute top-[25%] left-[30%] w-3 h-3 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50 animate-pulse"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute top-[35%] right-[25%] w-2.5 h-2.5 rounded-full bg-green-400 shadow-lg shadow-green-400/50 animate-pulse"
                    style={{ animationDelay: "0.3s" }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute top-[45%] left-[45%] w-2 h-2 rounded-full bg-amber-400 shadow-lg shadow-amber-400/50 animate-pulse"
                    style={{ animationDelay: "0.6s" }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute bottom-[35%] left-[35%] w-2.5 h-2.5 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50 animate-pulse"
                    style={{ animationDelay: "0.9s" }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute bottom-[30%] right-[30%] w-3 h-3 rounded-full bg-pink-400 shadow-lg shadow-pink-400/50 animate-pulse"
                    style={{ animationDelay: "1.2s" }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute top-[55%] right-[35%] w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 animate-pulse"
                    style={{ animationDelay: "1.5s" }}
                    aria-hidden="true"
                  />

                  {/* Connection lines */}
                  <svg
                    className="absolute inset-0 w-full h-full opacity-30"
                    viewBox="0 0 400 400"
                    aria-hidden="true"
                  >
                    <path
                      d="M120 100 Q200 150 300 140"
                      fill="none"
                      stroke="url(#lineGradient)"
                      strokeWidth="1"
                      strokeDasharray="4 2"
                    />
                    <path
                      d="M140 180 Q250 200 280 260"
                      fill="none"
                      stroke="url(#lineGradient)"
                      strokeWidth="1"
                      strokeDasharray="4 2"
                    />
                    <path
                      d="M180 180 Q220 250 260 280"
                      fill="none"
                      stroke="url(#lineGradient)"
                      strokeWidth="1"
                      strokeDasharray="4 2"
                    />
                    <defs>
                      <linearGradient
                        id="lineGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Center logo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src="/IIT-Logo.png"
                        alt="IIT Jodhpur"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-blue-600/0 group-hover:bg-blue-600/20 transition-colors duration-300">
                  <div className="px-6 py-3 bg-white/0 group-hover:bg-white rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-blue-600 font-semibold flex items-center gap-2">
                      Click to Explore
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobePreviewSection;
