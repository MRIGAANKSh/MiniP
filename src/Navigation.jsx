import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="bg-gray-800 text-gray-300 p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold transition-transform transform hover:scale-105">
          <i className="fa-solid fa-house"></i> Campus Crib
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="relative group transition-colors duration-300">
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-300 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </li>
          <li>
            <Link to="/about" className="relative group transition-colors duration-300">
              About
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-300 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </li>
          <li>
            <Link to="/listings" className="relative group transition-colors duration-300">
              Listings
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-300 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </li>
          <li>
            <Link to="/contact" className="relative group transition-colors duration-300">
              Contact
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-300 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
