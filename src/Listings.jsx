'use client'

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Listings() {
  const [listings, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [maxPrice, setMaxPrice] = useState(10000); // Default max price
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); 

  // Fetch listings from the backend
  const fetchListings = () => {
    setIsLoading(true);
    setError(null);  

    fetch('https://minip-2.onrender.com/api/listings')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setListings(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching listings:', error);
        setError('Failed to fetch listings. Please try again later.');
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchListings();  
  }, []);

  // Filter listings based on search term, selected type, and max price (excluding zero price listings)
  const filteredListings = listings.filter(
    (listing) =>
      listing.price > 0 && // Exclude listings with zero price
      listing.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterType === 'All' || listing.type === filterType) &&
      listing.price <= maxPrice // Apply max price filter
  );

  const handleViewDetails = (listingId) => {
    navigate(`/details/${listingId}`);
  };

  if (isLoading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-8 text-red-600">
        <p>{error}</p>
        <button
          onClick={fetchListings}  
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Our Listings</h1>
      
      {/* Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b pb-6">
        <div className="flex space-x-6 w-full md:w-auto">
          {/* Search */}
          <input
            type="text"
            placeholder="Search listings..."
            className="border rounded-lg px-4 py-2 w-full md:w-80 text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          {/* Filter by Type */}
          <select
            className="border rounded-lg px-4 py-2 w-full md:w-48 text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="All">All Types</option>
            <option value="PG">PG</option>
            <option value="Hostel">Hostel</option>
            <option value="Apartment">Apartment</option>
          </select>
        </div>
        
        {/* Price Range Filter (Only Upper Price) */}
        <div className="mt-6 md:mt-0">
          <label className="block text-gray-700 font-medium mb-2">Max Price</label>
          <input
            type="number"
            placeholder="Max Price"
            className="border rounded-lg px-4 py-2 w-32 text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredListings.map((listing) => (
          <div key={listing.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
            <div className="relative h-48 w-full">
              <img
                src={listing.image}  
                alt={listing.name}
                className="object-cover w-full h-full rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{listing.name}</h2>
              <p className="text-gray-600 mb-2">Type: {listing.type}</p>
              <p className="text-blue-600 font-bold">₹{listing.price} / month</p>
              <button
                className="mt-4 bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition duration-300"
                onClick={() => handleViewDetails(listing.id)} 
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
