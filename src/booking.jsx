'use client'

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Wifi, Tv, BookOpen, Dumbbell, DoorClosed, Bath } from 'lucide-react';

const BookingPage = () => {
  const { listingId } = useParams();
  const navigate = useNavigate();

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    roomType: 'double',
    name: '',
    phoneNumber: '',
    visitDate: '',
    visitTime: ''
  });

  const roommates = [
    { id: 1, name: 'Cody Fisher', type: 'Double Sharing', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80' },
    { id: 2, name: 'Robert Fox', type: 'Double Sharing', image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80' },
    { id: 3, name: 'Leslie Alexander', type: 'Double Sharing', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80' },
    { id: 4, name: 'Wade Warren', type: 'Double Sharing', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80' },
    { id: 5, name: 'Cameron Williamson', type: 'Double Sharing', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80' },
  ];

  const amenities = [
    { icon: <Wifi className="w-4 h-4" />, name: 'WiFi' },
    { icon: <Tv className="w-4 h-4" />, name: 'Common Areas' },
    { icon: <DoorClosed className="w-4 h-4" />, name: 'Spacious Cupboard' },
    { icon: <Bath className="w-4 h-4" />, name: 'Attached Washroom' },
    { icon: <BookOpen className="w-4 h-4" />, name: 'Study Area' },
    { icon: <Dumbbell className="w-4 h-4" />, name: 'Gym' },
  ];

  useEffect(() => {
    const fetchListingDetails = async () => {
      try {
        const response = await fetch(`https://minip-5.onrender.com/api/listings/${listingId}`);
        if (!response.ok) throw new Error('Listing not found');
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the email body
    const emailBody = `
      Name: ${formData.name}
      Phone Number: ${formData.phoneNumber}
      Room Type: ${formData.roomType}
      Visit Date: ${formData.visitDate}
      Visit Time: ${formData.visitTime}
    `;

    // Create mailto link
    const emailLink = `mailto:mrigaanksharma928@gmail.com?subject=Booking%20Request%20for%20Room%20Type%20${formData.roomType}&body=${encodeURIComponent(emailBody)}`;

    // Trigger email client
    window.location.href = emailLink;
  };

  if (loading) return <div className="text-center text-sm">Loading...</div>;
  if (error) return <div className="text-center text-sm text-red-500">{error}</div>;

  return (
    <div className="container max-w-5xl mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-1">Starting At</h2>
            <div className="text-3xl font-bold">₹ {listing.price}/m</div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Roommate Request</h3>
            <div className="space-y-4">
              {roommates.map((roommate) => (
                <div key={roommate.id} className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img src={roommate.image} alt={roommate.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-medium">{roommate.name}</div>
                      <div className="text-sm text-gray-500">{roommate.type}</div>
                    </div>
                  </div>
                  <button className="px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm hover:bg-blue-100 transition-colors">
                    Connect
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-sm border rounded-lg hover:bg-gray-50 transition-colors">
              Show all Request
            </button>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Amenities</h3>
            <div className="grid grid-cols-2 gap-4">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-2">
                  {amenity.icon}
                  <span className="text-sm">{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-xl">★</span>
            <span className="font-medium">4.4</span>
            <span className="text-gray-500">200 reviews</span>
          </div>
        </div>

        <div className="bg-white rounded-lg border p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              {[ 
                { id: 'private', label: 'Private Room', price: '15,999' },
                { id: 'double', label: 'Double Sharing', price: '10,999' },
                { id: 'triple', label: 'Triple Sharing', price: listing.price ? listing.price : '9,999' },
              ].map((option) => (
                <label
                  key={option.id}
                  className={`flex flex-col items-center justify-between rounded-md border-2 p-4 cursor-pointer hover:bg-gray-50 transition-colors
                    ${formData.roomType === option.id ? 'border-blue-500' : 'border-gray-200'}`}
                >
                  <input
                    type="radio"
                    name="roomType"
                    value={option.id}
                    checked={formData.roomType === option.id}
                    onChange={handleInputChange}
                    className="hidden"
                  />
                  <span className="text-sm font-medium">{option.label}</span>
                  <span className="text-sm">₹ {option.price}/m</span>
                </label>
              ))}
            </div>

            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                name="visitDate"
                value={formData.visitDate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="time"
                name="visitTime"
                value={formData.visitTime}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Schedule a Visit
            </button>

            <div className="flex items-center justify-between text-sm">
              <span>Interact with fellow students</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <p className="text-center text-sm text-gray-500">
              By scheduling a visit, you agree to our terms and privacy policy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
