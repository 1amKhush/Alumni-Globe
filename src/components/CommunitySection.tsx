"use client";

import React from "react";
import Image from "next/image";
import { Linkedin, Mail, ExternalLink } from "lucide-react";

interface AlumniMember {
  name: string;
  batch: string;
  role: string;
  company: string;
  image: string;
  linkedin?: string;
}

const featuredAlumni: AlumniMember[] = [
  {
    name: "Priya Sharma",
    batch: "2015",
    role: "Senior Software Engineer",
    company: "Google",
    image: "/alumni/placeholder.jpg",
    linkedin: "#",
  },
  {
    name: "Rahul Verma",
    batch: "2016",
    role: "Product Manager",
    company: "Microsoft",
    image: "/alumni/placeholder.jpg",
    linkedin: "#",
  },
  {
    name: "Ananya Patel",
    batch: "2017",
    role: "Data Scientist",
    company: "Amazon",
    image: "/alumni/placeholder.jpg",
    linkedin: "#",
  },
  {
    name: "Vikram Singh",
    batch: "2014",
    role: "Founder & CEO",
    company: "TechStartup Inc.",
    image: "/alumni/placeholder.jpg",
    linkedin: "#",
  },
];

const CommunitySection: React.FC = () => {
  return (
    <section
      id="community"
      className="relative py-20 lg:py-28 bg-white dark:bg-slate-800"
      aria-labelledby="community-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-400/10 rounded-full mb-4">
              Community
            </span>
            <h2
              id="community-heading"
              className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-6"
            >
              Join a Thriving Alumni Community
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              Connect with fellow IIT Jodhpur graduates who are making waves in
              various industries across the globe. Share experiences, seek
              guidance, and build lasting professional relationships.
            </p>

            {/* Benefits list */}
            <ul className="space-y-4 mb-8" role="list">
              {[
                "Network with 10,000+ alumni worldwide",
                "Access exclusive mentorship programs",
                "Get career guidance from industry experts",
                "Participate in alumni-exclusive events",
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-slate-700 dark:text-slate-200">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
            >
              <span>Join the Network</span>
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Featured Alumni Cards */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {featuredAlumni.map((alumni, index) => (
              <article
                key={alumni.name}
                className={`group relative p-4 sm:p-5 bg-slate-50 dark:bg-slate-700/50 rounded-2xl border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300 ${
                  index === 1 || index === 2 ? "lg:translate-y-8" : ""
                }`}
              >
                {/* Avatar placeholder */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold overflow-hidden">
                  <span aria-hidden="true">
                    {alumni.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                    {alumni.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                    {alumni.role}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {alumni.company} • Batch {alumni.batch}
                  </p>
                </div>

                {/* Social links */}
                <div className="flex justify-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={alumni.linkedin}
                    className="p-2 rounded-lg bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300 hover:bg-blue-500 hover:text-white transition-colors"
                    aria-label={`Connect with ${alumni.name} on LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-lg bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300 hover:bg-blue-500 hover:text-white transition-colors"
                    aria-label={`Email ${alumni.name}`}
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

export default CommunitySection;
