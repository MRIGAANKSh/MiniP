import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Hamburger clicked"); // Add this line
    setIsOpen((prev) => !prev);
  };
  return (
    <nav>
      <div className="nav-container">
        <h1 className="logo">Campus Crib</h1>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </div>

        {/* Navbar Links */}
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" className="nav-link hover:bg-blue-800 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/listings" className="nav-link " onClick={() => setIsOpen(false)}>List your property</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;
