import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Details = () => {
  const { listingId } = useParams();
  const navigate = useNavigate();

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  // Default fallback location if latitude/longitude is not available
  const defaultLocation = {
    lat: 28.6692,
    lon: 77.4538,
  };

  useEffect(() => {
    const fetchListingDetails = async () => {
      try {
        const response = await fetch(`https://minip-2.onrender.com/api/listings/${listingId}`);
        if (!response.ok) {
          throw new Error('Listing not found');
        }
        const data = await response.json();
        setListing(data);

        // Debug log to see the structure of the response
        console.log('Fetched listing data:', data);

        const locationCoordinates = data.location
          ? {
              lat: data.location.lat || data.location.latitude, // Handle both latitude keys
              lon: data.location.lng || data.location.longitude, // Handle both longitude keys
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

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">{error}</div>;
  }

  const location = listing.address || "No address provided";

  const closeModal = () => {
    navigate('/listings');
  };

  // Coordinates to center the map
  const centerLat = coordinates?.lat || defaultLocation.lat;
  const centerLon = coordinates?.lon || defaultLocation.lon;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg space-y-8">
      <button
        className="text-blue-500 hover:text-blue-700 mb-4"
        onClick={closeModal}
      >
        &lt; Back to Listings
      </button>

      <div className="text-center">
        <div className="mb-6">
          <img
            src={listing.image}
            alt={listing.name}
            className="w-96 h-96 object-cover rounded-lg mx-auto mb-4"
          />
        </div>

        <h2 className="text-3xl font-bold mb-4">{listing.name}</h2>
        <p className="text-xl font-semibold text-gray-800 mb-4">{`₹ ${listing.price} / month`}</p>
        <p className="text-gray-600 mb-4">{location}</p>
        <p className="text-gray-600 mb-4">{listing.description || 'No description available'}</p>

        <div className="text-left text-gray-600">
          <h3 className="font-semibold text-lg">Amenities</h3>
          <ul className="list-disc pl-5">
            {listing.amenities && Array.isArray(listing.amenities) ? (
              listing.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))
            ) : (
              <li>No amenities available</li>
            )}
          </ul>
          <h3 className="font-semibold mt-4 text-lg">Contact</h3>
          <p>Phone: {listing.phone}</p>
          <p>Email: {listing.email}</p>
        </div>
      </div>

      <div className="my-6 bg-gray-100 p-4 rounded-lg shadow-md">
        <div className="text-center mb-4 font-semibold text-xl">Location on Map</div>
        <MapContainer
          center={[centerLat, centerLon]}
          zoom={15}
          style={{ height: '400px', width: '100%' }}
          className="leaflet-container"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[centerLat, centerLon]}>
            <Popup>
              {listing.name}<br />
              {listing.address}
            </Popup>
          </Marker>
        </MapContainer>
      </div>

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
