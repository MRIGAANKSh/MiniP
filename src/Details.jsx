'use client'

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Star, Wifi, ShowerHead, Trash2, Utensils, Car, Tv, Coffee, Wind } from 'lucide-react';

// Fix for missing marker icons
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Set default Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

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
        const response = await fetch(
          `https://minip-5.onrender.com/api/listings/${listingId}`
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
    return <div className="text-center text-sm">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-sm text-red-500">{error}</div>;
  }

  const defaultAmenities = [
    { name: 'WiFi', icon: <Wifi className="w-4 h-4" /> },
    { name: 'Attached Washroom', icon: <ShowerHead className="w-4 h-4" /> },
    { name: 'Housekeeping', icon: <Trash2 className="w-4 h-4" /> },
    { name: 'Dining', icon: <Utensils className="w-4 h-4" /> },
    { name: 'Parking', icon: <Car className="w-4 h-4" /> },
    { name: 'TV', icon: <Tv className="w-4 h-4" /> },
    { name: 'Coffee Maker', icon: <Coffee className="w-4 h-4" /> },
    { name: 'Air Conditioning', icon: <Wind className="w-4 h-4" /> },
  ];

  const location = listing.address || 'No address provided';
  const amenities = listing.amenities && Array.isArray(listing.amenities)
    ? [...new Set([...defaultAmenities.map(a => a.name), ...listing.amenities])]
    : defaultAmenities.map(a => a.name);

  const closeModal = () => {
    navigate('/listings');
  };

  // Coordinates to center the map
  const centerLat = coordinates?.lat || defaultLocation.lat;
  const centerLon = coordinates?.lon || defaultLocation.lon;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
        <div className="relative h-64">
          <img
            src={listing.image}
            alt={listing.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-white opacity-60" />
            ))}
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">{listing.name}</h2>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm ml-1">4.4</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-2">{location}</p>
          <div className="flex justify-between items-center">
            <div>
              <span className="text-lg font-bold">₹{listing.price}</span>
              <span className="text-sm text-gray-500">/month</span>
            </div>
            <span className={`text-sm ${listing.type === 'Male' ? 'text-blue-500' : 'text-pink-500'}`}>
              {listing.type || 'Not specified'}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <button
          className="py-2 px-4 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200 transition-colors"
          onClick={closeModal}
        >
          Back to Listings
        </button>
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition-colors"
          onClick={() => navigate(`/booking/${listingId}`)}
        >
          Book Now
        </button>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-semibold mb-2">Description</h3>
        <p className="text-sm text-gray-600">
          {listing.description || 'No description available'}
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-semibold mb-2">Amenities</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {amenities.map((amenity, index) => {
            const defaultAmenity = defaultAmenities.find(a => a.name === amenity);
            return (
              <div key={index} className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1">
                {defaultAmenity ? defaultAmenity.icon : <div className="w-4 h-4" />}
                <span className="text-xs">{amenity}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-semibold mb-2">Contact</h3>
        <p className="text-sm text-gray-600">Phone: {listing.phone}</p>
        <p className="text-sm text-gray-600">Email: {listing.email}</p>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-semibold mb-2">Location</h3>
        <MapContainer
          center={[centerLat, centerLon]}
          zoom={15}
          style={{ height: '200px', width: '100%' }}
          className="rounded-lg overflow-hidden"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[centerLat, centerLon]} eventHandlers={{
            click: () => {
              navigate(`/booking/${listingId}`);
            }
          }}>
            <Popup>
              {listing.name}
              <br />
              {listing.address}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Details;

