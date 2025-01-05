import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

export default function Results() {
  const [listings, setListings] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const searchTerm = new URLSearchParams(location.search).get('search');

  // Fetch filtered listings from the backend
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch(
          `https://minip-2.onrender.com/api/listings?search=${encodeURIComponent(searchTerm)}`
        );
        const data = await response.json();

        setListings(data);
      } catch (error) {
        console.error('Error fetching filtered listings:', error);
      }
    };

    if (searchTerm) {
      fetchListings();
    }
  }, [searchTerm]);

  // Navigate to details page for a specific listing
  const handleViewDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Search Bar */}
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search by College or Location"
          className="w-full px-4 py-2 pl-10 text-sm border rounded-full focus:outline-none focus:ring-1 focus:ring-gray-300"
          value={searchTerm}
          disabled
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>

      <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
  Search Results for <span className="text-teal-600">{searchTerm}</span> College
</h1>


      {/* Listings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {listings.length > 0 ? (
          listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-lg border overflow-hidden cursor-pointer"
              onClick={() => handleViewDetails(listing.id)}
            >
              <div className="relative h-40">
                <img
                  src={listing.image}
                  alt={listing.name}
                  className="object-cover w-full h-full"
                />
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
          ))
        ) : (
          <p className="text-center text-gray-600">
            No results found for "{searchTerm} College"
          </p>
        )}
      </div>
    </div>
  );
}
