"use client";

import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const menuSlide = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "12%",
        background:
          "linear-gradient(to bottom,rgb(91, 10, 10),rgb(56, 2, 2),rgb(1, 2, 34))",
        color: "white",
        fontFamily: " Playfair Display",

        position: "relative",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="IIT-logo.png"
          alt="IIT Jodhpur Logo"
          style={{ height: "65px", marginLeft: "10px" }}
        ></img>
        <h2
          style={{
            margin: "0",
            fontSize: "24px",
            fontFamily: "Playfair Display",
            // whiteSpace: "nowrap",
          }}
        >
          IIT Jodhpur: Society of Alumni Affairs
        </h2>
      </div>

      {isSmallScreen && (
        <div style={{ cursor: "pointer" }} onClick={menuSlide}>
          <img src="menu-icon.svg" alt="Menu" style={{ height: "35px" }}></img>
        </div>
      )}

      <ul
        style={{
          zIndex: "1000",
          listStyleType: "none",
          display: isSmallScreen && !isMenuOpen ? "none" : "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          justifyContent: isSmallScreen
            ? isMenuOpen
              ? "space-evenly"
              : undefined
            : undefined,
          alignItems: "center",
          gap: isSmallScreen ? "0" : "25px",
          position: isSmallScreen
            ? isMenuOpen
              ? "absolute"
              : undefined
            : "relative",
          top: isSmallScreen ? (isMenuOpen ? "76px" : undefined) : undefined,
          right: isSmallScreen ? (isMenuOpen ? "0" : undefined) : "20px",
          backgroundColor:
            isSmallScreen && isMenuOpen ? "rgba(29, 2, 2, 0.83)" : undefined,
          width: isSmallScreen && isMenuOpen ? "30%" : undefined,
          height: isSmallScreen && isMenuOpen ? "70vh" : undefined,
          paddingLeft: isSmallScreen && isMenuOpen ? "20px" : undefined,
        }}
      >
        <li>
          <a
            href="#"
            style={{
              color: "white",

              fontSize: "16px",
              fontFamily: "sans-serif",
            }}
          >
            INITIATIVES
          </a>
        </li>
        <li>
          <a
            href="#"
            style={{
              color: "white",

              fontSize: "16px",
              fontFamily: "sans-serif",
            }}
          >
            COMMUNITY
          </a>
        </li>
        <li>
          <a
            href="#"
            style={{
              color: "white",

              fontSize: "16px",
              fontFamily: "sans-serif",
            }}
          >
            EVENTS
          </a>
        </li>
        <li>
          <a
            href="#"
            style={{
              color: "white",
              fontSize: "16px",
              fontFamily: "sans-serif",
            }}
          >
            REYA AWARDS
          </a>
        </li>
        <li>
          <a
            href="#"
            style={{
              color: "white",

              fontSize: "16px",
              fontFamily: "sans-serif",
            }}
          >
            LEGACY
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
