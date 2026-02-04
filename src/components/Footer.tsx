"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "#home" },
    { name: "Globe", href: "#globe" },
    { name: "Community", href: "#community" },
    { name: "Events", href: "#events" },
  ],
  resources: [
    { name: "Alumni Directory", href: "#" },
    { name: "Career Portal", href: "#" },
    { name: "Mentorship Program", href: "#" },
    { name: "Newsletter", href: "#" },
  ],
  institute: [
    { name: "IIT Jodhpur", href: "https://iitj.ac.in" },
    { name: "Admissions", href: "#" },
    { name: "Research", href: "#" },
    { name: "Campus Life", href: "#" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-slate-900 text-white"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-3 mb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg"
            >
              <div className="relative w-12 h-12 overflow-hidden rounded-lg bg-white/10 p-1">
                <Image
                  src="/IIT-Logo.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">IIT Jodhpur</h3>
                <p className="text-sm text-slate-400">
                  Society of Alumni Affairs
                </p>
              </div>
            </Link>

            <p className="text-slate-400 mb-6 max-w-sm">
              Connecting IIT Jodhpur alumni across the globe. Building a
              stronger community through collaboration and shared experiences.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:alumni@iitj.ac.in"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                <span>alumni@iitj.ac.in</span>
              </a>
              <a
                href="tel:+91-291-280-1234"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>+91-291-280-1234</span>
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  IIT Jodhpur, NH 62, Karwar,
                  <br />
                  Jodhpur 342037, Rajasthan, India
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Institute */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Institute
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.institute.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                    {...(link.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-slate-400">
              © {currentYear} IIT Jodhpur Society of Alumni Affairs. All rights
              reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
