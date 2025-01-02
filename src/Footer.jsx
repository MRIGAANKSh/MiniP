import React from "react";
import { Link } from "react-router-dom";
// Import necessary icons from react-icons/fa
import { FaFacebookF, FaInstagram, FaTwitter, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="bg-white py-12 px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-semibold tracking-wide">
              JOIN THE CRIB, BE OUR PARTNER.
            </h2>
            <p className="text-gray-600">
              Stay up-to-date with our new updates, events, discounts and promotions.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-xl mx-auto mt-6">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
              <button 
                type="submit" 
                className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                SIGN UP
              </button>
            </form>
          </div>
        </div>

      <div className="mx-auto">
        <img
          src="https://www.thesac.org.uk/application/files/4014/6549/5690/housing_vector_banner.png"
          alt=""
          className="w-screen h-32 object-cover"
          role="presentation"
        />
      </div>

      <footer className="w-full">
        {/* Newsletter Section */}
        
        {/* Navigation Section */}
        <div className="bg-gray-900 text-white py-8 px-4 relative">
          <div className="max-w-6xl mx-auto">
            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-8">
              {[{ Icon: FaFacebookF, href: '#' }, { Icon: FaInstagram, href: '#' }, { Icon: FaTwitter, href: '#' }].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Primary Navigation */}
            <nav className="flex justify-center gap-8 mb-4 flex-wrap">
              {['HOME', 'MENU', 'COMMUNITY', 'EXPLORE', 'JOIN'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Secondary Navigation */}
            <nav className="flex justify-center gap-4 text-sm text-gray-400 mb-8 flex-wrap">
              {['CONTACT', 'BLOG', 'SIGN-IN', 'TEAM'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="absolute right-8 top-8 p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              aria-label="Back to top"
            >
              <FaArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#5B9B42] text-white py-4 px-4 text-center text-sm">
          <p className="mb-1">
            
          </p>
          <p className="text-white/80">
            ©2025 CAMPUS CRIB | ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </div>
  );
}
