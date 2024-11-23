import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Details = () => {
  const { listingId } = useParams(); // Get the listing ID from the URL
  const navigate = useNavigate(); // To navigate back to the listings page

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true); // To manage loading state
  const [error, setError] = useState(null); // To manage error state

  // Fetch the listing details based on the listingId from the URL
  useEffect(() => {
    const fetchListingDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/listings/${listingId}`);
        if (!response.ok) {
          throw new Error('Listing not found');
        }
        const data = await response.json();
        setListing(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchListingDetails();
  }, [listingId]);

  // If the listing is still loading or doesn't exist
  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">{error}</div>;
  }

  // Function to navigate back to the listings page
  const closeModal = () => {
    navigate('/listings');
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg space-y-8">
      <button
        className="text-blue-500 hover:text-blue-700 mb-4"
        onClick={closeModal}
      >
        &lt; Back to Listings
      </button>

      <div className="text-center">
        {/* Image Section */}
        <div className="mb-6">
          <img
            src={listing.image}
            alt={listing.name}
            className="w-96 h-96 object-cover rounded-lg mx-auto mb-4"
          />
        </div>

        {/* Listing Name */}
        <h2 className="text-3xl font-bold mb-4">{listing.name}</h2>

        {/* Price Section */}
        <p className="text-xl font-semibold text-gray-800 mb-4">{`₹ ${listing.price} / month`}</p>

        {/* Address Section */}
        <p className="text-gray-600 mb-4">{listing.address}</p>

        {/* Description Section */}
        <p className="text-gray-600 mb-4">{listing.description || 'No description available'}</p>

        {/* Amenities Section */}
        <div className="text-left text-gray-600">
          <h3 className="font-semibold text-lg">Amenities</h3>
          <ul className="list-disc pl-5">
            {listing.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>

          {/* Contact Info */}
          <h3 className="font-semibold mt-4 text-lg">Contact</h3>
          <p>Phone: {listing.phone}</p>
          <p>Email: {listing.email}</p>
        </div>
      </div>

      {/* Close Button */}
      <div className="text-center">
        <button
          className="mt-8 py-2 px-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Details;
