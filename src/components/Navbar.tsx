"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md w-full z-50">
      <div className="flex items-center">
        <Image
          src="/IIT-Logo.png"
          alt="IIT Jodhpur Logo"
          width={48}
          height={48}
          className="h-12 w-12 mr-4"
        />
        <div>
          <h2 className="text-xl font-bold">IIT Jodhpur</h2>
          <p className="text-sm">Society of Alumni Affairs</p>
        </div>
      </div>

      {isSmallScreen && (
        <div
          className="cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="h-6 w-6" />
        </div>
      )}

      <ul
        className={`
          ${isSmallScreen ? "absolute top-16 left-0 w-full bg-gray-800" : "flex"}
          ${isMenuOpen || !isSmallScreen ? "flex" : "hidden"}
          flex-col md:flex-row items-center gap-6 p-4 md:p-0
        `}
      >
        {["INITIATIVES", "COMMUNITY", "EVENTS", "REYA AWARDS", "LEGACY"].map(
          (item) => (
            <li key={item}>
              <a
                href="#"
                className="text-white text-base font-sans hover:text-blue-300 transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;