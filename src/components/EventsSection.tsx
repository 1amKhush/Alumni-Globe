"use client";

import React from "react";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: "online" | "in-person" | "hybrid";
  image?: string;
}

const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "Annual Alumni Meet 2026",
    date: "March 15, 2026",
    time: "10:00 AM IST",
    location: "IIT Jodhpur Campus",
    type: "in-person",
  },
  {
    id: "2",
    title: "Tech Talk: AI in Healthcare",
    date: "February 20, 2026",
    time: "7:00 PM IST",
    location: "Online via Zoom",
    type: "online",
  },
  {
    id: "3",
    title: "Career Networking Session",
    date: "February 28, 2026",
    time: "6:00 PM IST",
    location: "Bengaluru Chapter",
    type: "hybrid",
  },
];

const getEventTypeBadge = (type: Event["type"]) => {
  const styles = {
    online:
      "bg-green-100 dark:bg-green-400/10 text-green-700 dark:text-green-400",
    "in-person":
      "bg-blue-100 dark:bg-blue-400/10 text-blue-700 dark:text-blue-400",
    hybrid:
      "bg-purple-100 dark:bg-purple-400/10 text-purple-700 dark:text-purple-400",
  };

  const labels = {
    online: "Online",
    "in-person": "In-Person",
    hybrid: "Hybrid",
  };

  return (
    <span
      className={`inline-flex px-2.5 py-1 text-xs font-medium rounded-full ${styles[type]}`}
    >
      {labels[type]}
    </span>
  );
};

const EventsSection: React.FC = () => {
  return (
    <section
      id="events"
      className="relative py-20 lg:py-28 bg-slate-50 dark:bg-slate-900"
      aria-labelledby="events-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-400/10 rounded-full mb-4">
              Events
            </span>
            <h2
              id="events-heading"
              className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white"
            >
              Upcoming Events
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
          >
            <span>View all events</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {upcomingEvents.map((event) => (
            <article
              key={event.id}
              className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Event Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <Calendar
                  className="w-16 h-16 text-white/50"
                  aria-hidden="true"
                />
                <div className="absolute top-4 left-4">
                  {getEventTypeBadge(event.type)}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {event.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <Calendar
                      className="w-4 h-4 text-slate-400"
                      aria-hidden="true"
                    />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <Clock
                      className="w-4 h-4 text-slate-400"
                      aria-hidden="true"
                    />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <MapPin
                      className="w-4 h-4 text-slate-400"
                      aria-hidden="true"
                    />
                    <span>{event.location}</span>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                >
                  <span>Register now</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 lg:p-12">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="cta-pattern"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="20" cy="20" r="1" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-pattern)" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Want to host an event?
              </h3>
              <p className="text-blue-100 max-w-xl">
                Organize alumni meetups, workshops, or networking sessions in
                your city. We&apos;ll help you connect with fellow graduates.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-blue-600 bg-white rounded-xl shadow-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 whitespace-nowrap"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
