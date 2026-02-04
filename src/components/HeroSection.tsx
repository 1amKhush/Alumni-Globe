"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero"
      aria-labelledby="hero-heading"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div
            className={`text-center lg:text-left transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-white/90">
                Global Alumni Network
              </span>
            </div>

            {/* Heading */}
            <h1
              id="hero-heading"
              className="heading-xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-6"
            >
              Connect with{" "}
              <span className="gradient-text">IIT Jodhpur</span>{" "}
              Alumni Worldwide
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-blue-100/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Discover and connect with fellow alumni across the globe through
              our interactive 3D visualization. Build meaningful relationships
              that last a lifetime.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/globe"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                <span>Explore the Globe</span>
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

              <a
                href="#community"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                <span>Join Community</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>10,000+ Alumni</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>50+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>500+ Companies</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl animate-pulse-slow" />
              
              {/* Globe illustration placeholder */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-600/30 to-indigo-800/30 border border-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                {/* Connection lines */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-30"
                  viewBox="0 0 400 400"
                  aria-hidden="true"
                >
                  <circle
                    cx="200"
                    cy="200"
                    r="150"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-blue-300"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-blue-300"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-blue-300"
                  />
                  {/* Meridians */}
                  <ellipse
                    cx="200"
                    cy="200"
                    rx="150"
                    ry="60"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-blue-300"
                  />
                  <ellipse
                    cx="200"
                    cy="200"
                    rx="60"
                    ry="150"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-blue-300"
                  />
                </svg>

                {/* Animated dots representing alumni */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50 animate-pulse" />
                <div
                  className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
                <div
                  className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-lg shadow-amber-400/50 animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50 animate-pulse"
                  style={{ animationDelay: "1.5s" }}
                />
                <div
                  className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-pink-400 shadow-lg shadow-pink-400/50 animate-pulse"
                  style={{ animationDelay: "2s" }}
                />

                {/* Center logo */}
                <div className="relative z-10 w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center">
                  <Image
                    src="/IIT-Logo.png"
                    alt="IIT Jodhpur"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-sm font-medium">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
