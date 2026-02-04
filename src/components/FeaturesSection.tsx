"use client";

import React, { useEffect, useRef, useState } from "react";
import { Users, Globe, Calendar, MessageCircle, Award, Briefcase } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Network",
    description:
      "Connect with alumni across 50+ countries through our interactive globe visualization.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Alumni Directory",
    description:
      "Search and filter alumni by batch, branch, company, or location to find your connections.",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Career Opportunities",
    description:
      "Access exclusive job postings and career guidance from successful alumni mentors.",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Events & Reunions",
    description:
      "Stay updated on alumni meetups, webinars, and annual reunion events worldwide.",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Community Forums",
    description:
      "Engage in discussions, share experiences, and seek advice from the alumni community.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Recognition Programs",
    description:
      "Celebrate achievements with REYA Awards and other alumni recognition initiatives.",
  },
];

const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-slate-50 dark:bg-slate-900"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-400/10 rounded-full mb-4">
            Features
          </span>
          <h2
            id="features-heading"
            className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-4"
          >
            Everything You Need to Stay Connected
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Our platform offers comprehensive tools to help you maintain and
            grow your alumni network effectively.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={`group relative p-6 lg:p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-5 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover decoration */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div
        className="absolute top-20 left-0 w-72 h-72 bg-blue-200/30 dark:bg-blue-500/5 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 right-0 w-96 h-96 bg-purple-200/30 dark:bg-purple-500/5 rounded-full blur-3xl"
        aria-hidden="true"
      />
    </section>
  );
};

export default FeaturesSection;
