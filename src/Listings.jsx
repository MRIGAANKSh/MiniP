'use client'

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Listings() {
  const [listings, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Hook to programmatically navigate to another page

  // Fetch listings from the backend
  const fetchListings = () => {
    setIsLoading(true);
    setError(null);  // Clear any previous errors

    fetch('http://localhost:3001/api/listings')
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
    fetchListings();  // Fetch listings when the component mounts
  }, []);

  // Filter listings based on search term and selected type
  const filteredListings = listings.filter(
    (listing) =>
      listing.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterType === 'All' || listing.type === filterType)
  );

  const handleViewDetails = (listingId) => {
    // Navigate to the details page for the specific listing
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
          onClick={fetchListings}  // Retry the fetch on button click
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Listings</h1>
      <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
        <input
          type="text"
          placeholder="Search listings..."
          className="border rounded-lg px-4 py-2 mb-4 md:mb-0 md:mr-4 w-full md:w-auto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border rounded-lg px-4 py-2 w-full md:w-auto"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="All">All Types</option>
          <option value="PG">PG</option>
          <option value="Hostel">Hostel</option>
          <option value="Apartment">Apartment</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredListings.map((listing) => (
          <div key={listing.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48 w-full">
              <img
                src={listing.image}  // Use the URL from the backend
                alt={listing.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{listing.name}</h2>
              <p className="text-gray-600 mb-2">Type: {listing.type}</p>
              <p className="text-blue-600 font-bold">₹{listing.price} / month</p>
              <button
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                onClick={() => handleViewDetails(listing.id)} // Navigate on click
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
