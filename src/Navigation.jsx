import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100); // Delay for smoother animation
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const handleClick = () => {
    // Navigate to login page or signup page (modify this as needed)
    navigate("/login");  // You can replace '/login' with '/signup' or other routes
  };

  return (
    <nav
      className={`bg-white text-black p-4 shadow-md transition-transform duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center space-x-2 text-2xl font-bold transition-transform transform hover:scale-105"
        >
          <img
            src="https://www.shutterstock.com/image-vector/man-leaving-work-sign-icon-600w-2539144085.jpg"
            alt="Campus Crib Logo"
            className="h-8 w-8 rounded-full"
          />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-wide">
            Campus Crib
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6 items-center">
          <li>
            <Link
              to="/listings"
              className="relative group transition-colors duration-300"
            >
              Explore
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="relative group transition-colors duration-300"
            >
              Community
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="relative group transition-colors duration-300"
            >
              About
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </li>
        </ul>

        {/* Button */}
        <button
          onClick={handleClick} // Call the handleClick function to navigate
          className="border-2 border-black text-black font-semibold py-1 px-2 rounded-3xl transition-colors duration-300 flex items-center space-x-2 hover:bg-gray-200"
        >
          <i className="fa-solid fa-bars"></i>
          <i className="fa-regular fa-user"></i>
        </button>
      </div>
    </nav>
  );
}
