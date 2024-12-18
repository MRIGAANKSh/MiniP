import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Remove map related code for booking page
const BookingPage = () => {
  const { listingId } = useParams();
  const navigate = useNavigate();

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [formData, setFormData] = useState({
    numberOfRooms: '',
    message: '',
    name: '',
    phoneNumber: ''
  });

  const defaultLocation = {
    lat: 28.6692,
    lon: 77.4538,
  };

  // Fetch listing details on page load
  useEffect(() => {
    const fetchListingDetails = async () => {
      try {
        const response = await fetch(
          `https://minip-2.onrender.com/api/listings/${listingId}`
        );
        if (!response.ok) {
          throw new Error('Listing not found');
        }
        const data = await response.json();
        setListing(data);

        // Debug log to see the structure of the response
        console.log('Fetched listing data:', data);

        const locationCoordinates = data.location
          ? {
              lat: data.location.lat || data.location.latitude,
              lon: data.location.lng || data.location.longitude,
            }
          : defaultLocation;

        setCoordinates(locationCoordinates);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchListingDetails();
  }, [listingId]);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle booking submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { numberOfRooms, message, name, phoneNumber } = formData;
    if (!numberOfRooms || !message || !name || !phoneNumber) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('https://minip-2.onrender.com/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          listingId,
          numberOfRooms,
          message,
          name,
          phoneNumber,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Booking confirmed!');
        navigate('/listings');
      } else {
        alert(data.message || 'Booking failed');
      }
    } catch (err) {
      alert('Error creating booking');
    }
  };

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">{error}</div>;
  }

  const location = listing.address || 'No address provided';

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg space-y-8">
      <button
        className="text-blue-500 hover:text-blue-700 mb-4"
        onClick={() => navigate('/listings')}
      >
        &lt; Back to Listings
      </button>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">{listing.name}</h2>
        <p className="text-xl font-semibold text-gray-800 mb-4">{`₹ ${listing.price} / month`}</p>
        <p className="text-gray-600 mb-4">{location}</p>
        <p className="text-gray-600 mb-4">
          {listing.description || 'No description available'}
        </p>
      </div>

      {/* Booking Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="numberOfRooms" className="block font-semibold text-lg">
            Number of Rooms
          </label>
          <input
            type="number"
            id="numberOfRooms"
            name="numberOfRooms"
            value={formData.numberOfRooms}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-semibold text-lg">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div>
          <label htmlFor="name" className="block font-semibold text-lg">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block font-semibold text-lg">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="mt-8 py-3 px-6 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Confirm Booking
          </button>
        </div>
      </form>

      <div className="text-center mt-8">
        <button
          className="py-2 px-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => navigate('/listings')}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BookingPage;
