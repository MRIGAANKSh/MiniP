import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <div className="container mx-auto px-4 mb-8">
        <img
          src="https://img.freepik.com/premium-photo/building-perspective-cityscape-white-background-modern-building-city-skyline_51530-2648.jpg?w=2000"
          alt=""
          className="w-full h-32 object-cover opacity-20"
          role="presentation"
        />
      </div>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Campus Crib Section */}
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Campus Crib</h3>
              <p className="text-gray-400">
                Providing comfortable and affordable student accommodations since 2024.
              </p>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="hover:text-blue-400 transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-blue-400 transition-colors duration-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/listings" className="hover:text-blue-400 transition-colors duration-300">
                    Listings
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-blue-400 transition-colors duration-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Follow Us</h3>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <i className="fa-brands fa-facebook text-2xl" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <i className="fa-brands fa-twitter text-2xl" />
                </a>
                <a
                  href="https://www.instagram.com/theprashant1.4/profilecard/?igsh=MTl5dXNvaGU3eW04aw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <i className="fa-brands fa-instagram text-2xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-16 text-center">
            <p className="text-gray-500">&copy; 2024 Campus Crib. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
