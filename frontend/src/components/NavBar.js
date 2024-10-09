import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={handleLinkClick}>
            About
          </Link>
        </li>
        <li>
          <Link to="/how-to-start" onClick={handleLinkClick}>
            How to Start
          </Link>
        </li>

        <li>
          <Link to="/quiz" onClick={handleLinkClick}>
            Quiz
          </Link>
        </li>
        <li>
          <Link to="/chat/aws" onClick={handleLinkClick}>
            AWS Chat
          </Link>
        </li>
        <li>
          <Link to="/chat/azure" onClick={handleLinkClick}>
            Azure Chat
          </Link>
        </li>
        <li>
          <Link to="/chat/linux" onClick={handleLinkClick}>
            Linux Chat
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
