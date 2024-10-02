import React from "react";
import { FaSearch } from "react-icons/fa";
import "./center.css";

const CenterBox = () => {
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("/im.avif")', // Reference image from the public folder
      }}
    >
      {/* Overlay */}
      <div id="box" className="absolute inset-0  opacity-80"></div>

      {/* Main content */}
      <div className="relative z-10 text-center w-full lg:w-1/2 px-4 py-10">
        {/* Rental Carnival Badge */}

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-6 bg-white bg-opacity-50 p-4 m-4 rounded-full shadow-lg">
          <button className="px-6 py-2 text-white bg-blue-700 rounded-full focus:outline-none hover:bg-blue-800 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
            Full House
          </button>
          <button className="px-6 py-2 text-white bg-blue-700 opacity-70 hover:opacity-100 hover:bg-blue-800 hover:shadow-xl rounded-full focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-105">
            Flatmates
          </button>
          <button className="px-6 py-2 text-white bg-blue-700 opacity-70 hover:opacity-100 hover:bg-blue-800 hover:shadow-xl rounded-full focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-105">
            Co-Living/PG
          </button>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-full shadow-lg flex overflow-hidden w-full">
          <select className="bg-white text-gray-800 px-5 py-4  rounded-l-full focus:outline-none">
            <option>Bangalore</option>
            <option>Mumbai</option>
            <option>Delhi</option>
          </select>
          <input
            type="text"
            placeholder="Search Locality"
            className="w-full px-6 py-3 text-gray-800 focus:outline-none"
          />
          <button className="bg-blue-700 p-4 text-white rounded-r-full focus:outline-none">
            <FaSearch />
          </button>
        </div>

        {/* Offers */}
        
      </div>
    </div>
  );
};

export default CenterBox;
