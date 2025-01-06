'use client';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

export default function Listings() {
  const [listings, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [maxPrice, setMaxPrice] = useState(10000);
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

  const filteredListings = listings.filter(
    (listing) =>
      listing.price > 0 &&
      listing.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterType === 'All' || listing.type === filterType) &&
      listing.price <= maxPrice
  );

  const handleViewDetails = (listingId) => {
    navigate(`/details/${listingId}`);
  };

  if (isLoading) {
    return <div className="text-center mt-8 text-sm">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-8">
        <p className="text-sm text-red-500">{error}</p>
        <button
          onClick={fetchListings}
          className="mt-4 bg-gray-900 text-white px-4 py-2 text-sm rounded-full hover:bg-gray-800 transition duration-300"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Filter Section */}
      <div className="w-full flex flex-wrap justify-between items-center gap-4 mb-6">
        <button className="px-4 py-2 text-sm rounded-full border hover:bg-gray-50 transition-colors">
          Room For
        </button>
        <button className="px-4 py-2 text-sm rounded-full border hover:bg-gray-50 transition-colors">
          Type of room
        </button>
        <select
          className="px-4 py-2 text-sm rounded-full border hover:bg-gray-50 transition-colors"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="All">All Types</option>
          <option value="PG">PG</option>
          <option value="Hostel">Hostel</option>
          <option value="Apartment">Apartment</option>
        </select>
        <button className="px-4 py-2 text-sm rounded-full border hover:bg-gray-50 transition-colors">
          Amenities
        </button>
        <div className="relative">
          <input
            type="number"
            placeholder="Max Price"
            className="px-4 py-2 text-sm rounded-full border hover:bg-gray-50 transition-colors w-32"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search by College or Location"
          className="w-full px-4 py-2 pl-10 text-sm border rounded-full focus:outline-none focus:ring-1 focus:ring-gray-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredListings.map((listing) => (
          <div
            key={listing.id}
            className="bg-white rounded-lg border overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => handleViewDetails(listing.id)}
          >
            <div className="relative h-40">
              <img
                src={listing.image}
                alt={listing.name}
                className="object-cover w-full h-full"
              />
              {/* Image dots indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-white opacity-60"
                  />
                ))}
              </div>
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between mb-1">
                <h2 className="text-sm font-medium">{listing.name}</h2>
                <div className="flex items-center">
                  <span className="text-xs">4.4</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mb-2">
                Nearby College: {listing.nearby_college}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-semibold">₹{listing.price}</span>
                  <span className="text-xs text-gray-500">/month</span>
                </div>
                <span
                  className={`text-xs ${
                    listing.type === 'Male' ? 'text-blue-500' : 'text-pink-500'
                  }`}
                >
                  {listing.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
