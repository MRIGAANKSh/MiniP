import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Results() {
  const [listings, setListings] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const searchTerm = new URLSearchParams(location.search).get('search');

  // Fetch filtered listings from the backend
  useEffect(() => {
    const fetchListings = async () => {
      try {
        // Make API call with search term
        const response = await fetch(
          `http://localhost:3001/api/listings?search=${encodeURIComponent(searchTerm)}`
        );
        const data = await response.json();

        // Set filtered listings to state
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
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Search Results for "{searchTerm}" College
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
        {listings.length > 0 ? (
          listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105"
            >
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
