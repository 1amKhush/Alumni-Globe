"use client";

import React, { useState, useEffect } from "react";

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
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background:
          "linear-gradient(to bottom,rgb(91, 10, 10),rgb(56, 2, 2),rgb(1, 2, 34))",
        color: "white",
        fontFamily: "Playfair Display",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="IIT-logo.png"
          alt="IIT Jodhpur Logo"
          style={{ height: "50px", marginRight: "10px" }}
        />
        <h2 style={{ margin: 0, fontSize: "20px" }}>
          IIT Jodhpur: Society of Alumni Affairs
        </h2>
      </div>

      {isSmallScreen && (
        <div style={{ cursor: "pointer" }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img src="menu-icon.svg" alt="Menu" style={{ height: "35px" }} />
        </div>
      )}

      <ul
        style={{
          listStyle: "none",
          display: isSmallScreen ? (isMenuOpen ? "flex" : "none") : "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          alignItems: "center",
          gap: "20px",
          position: isSmallScreen ? "absolute" : "relative",
          top: isSmallScreen ? "60px" : "auto",
          left: 0,
          width: isSmallScreen ? "100%" : "auto",
          background: isSmallScreen ? "rgba(29, 2, 2, 0.95)" : "transparent",
          padding: isSmallScreen ? "10px 0" : 0,
          textAlign: "center",
        }}
      >
        {["INITIATIVES", "COMMUNITY", "EVENTS", "REYA AWARDS", "LEGACY"].map(
          (item) => (
            <li key={item}>
              <a
                href="#"
                style={{
                  color: "white",
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                  textDecoration: "none",
                  padding: "10px",
                  display: "block",
                }}
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