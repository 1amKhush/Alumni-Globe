"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import MapboxGlobe to avoid SSR issues
const MapboxGlobe = dynamic(() => import("./MapboxGlobe"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-slate-800/50 rounded-2xl">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
        <p className="text-white/70 text-sm font-medium">Loading Globe...</p>
      </div>
    </div>
  ),
});

const GlobeSection: React.FC = () => {
  return (
    <section
      id="globe"
      className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800"
      aria-labelledby="globe-heading"
    >
      {/* Section Header */}
      <div className="relative z-10 pt-24 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-blue-400 bg-blue-400/10 rounded-full mb-4">
            Interactive Map
          </span>
          <h2
            id="globe-heading"
            className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-white mb-4"
          >
            Explore Our Global Network
          </h2>
          <p className="text-lg text-slate-300/80 max-w-2xl mx-auto">
            Navigate the interactive 3D globe to discover IIT Jodhpur alumni
            located around the world. Click on markers to view profiles.
          </p>
        </div>
      </div>

      {/* Globe Container */}
      <div className="relative w-full px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[16/10] lg:aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
            {/* Globe Map */}
            <MapboxGlobe />

            {/* Overlay gradient at edges */}
            <div
              className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>

          {/* Instructions */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-slate-700/50 rounded text-slate-300 font-mono text-xs">
                Drag
              </kbd>
              <span>to rotate</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-slate-700/50 rounded text-slate-300 font-mono text-xs">
                Scroll
              </kbd>
              <span>to zoom</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-slate-700/50 rounded text-slate-300 font-mono text-xs">
                Click
              </kbd>
              <span>markers for details</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default GlobeSection;
