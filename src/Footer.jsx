import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-800  text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Campus Crib</h3>
            <p>Providing comfortable and affordable student accommodations since 2024.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
              <li><Link to="/listings" className="hover:text-blue-400">Listings</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><i class="fa-brands fa-facebook"></i></a>
              <a href="#" className="hover:text-blue-400"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="https://www.instagram.com/theprashant1.4/profilecard/?igsh=MTl5dXNvaGU3eW04aw==" target="_blank" className="hover:text-blue-400"><i class="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Campus Crib. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}