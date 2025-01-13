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
    visitTime: '',
    sharingOption: '', // New state for sharing options
  });
  const [review, setReview] = useState({
    name: '',
    rating: 0,
    comment: ''
  });
  const [reviews, setReviews] = useState([
    { id: 1, name: 'John Doe', rating: 4, comment: 'Great place to stay, very spacious!' },
    { id: 2, name: 'Jane Smith', rating: 5, comment: 'I loved the gym facilities and the room!' },
    { id: 3, name: 'Alex Johnson', rating: 3, comment: 'Good location but could use some improvements.' }
  ]);

  const roommates = [
    { id: 1, name: 'Cody Fisher', type: 'Double Sharing', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e' },
    { id: 2, name: 'Robert Fox', type: 'Double Sharing', image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61' },
    { id: 3, name: 'Leslie Alexander', type: 'Double Sharing', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' },
    { id: 4, name: 'Wade Warren', type: 'Double Sharing', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e' },
    { id: 5, name: 'Cameron Williamson', type: 'Double Sharing', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857' },
  ];

  const amenities = [
    { icon: <Wifi className="w-4 h-4" />, name: 'WiFi' },
    { icon: <Tv className="w-4 h-4" />, name: 'Common Areas' },
    { icon: <DoorClosed className="w-4 h-4" />, name: 'Spacious Cupboard' },
    { icon: <Bath className="w-4 h-4" />, name: 'Attached Washroom' },
    { icon: <BookOpen className="w-4 h-4" />, name: 'Study Area' },
    { icon: <Dumbbell className="w-4 h-4" />, name: 'Gym' },
  ];

  const generateRandomDistance = () => {
    const randomDistance = Math.floor(Math.random() * 501) + 500; // Random distance between 500m and 1000m
    return randomDistance;
  };

  useEffect(() => {
    const fetchListingDetails = async () => {
      try {
        const response = await fetch(`https://minip-5.onrender.com/api/listings/${listingId}`);
        if (!response.ok) throw new Error('Listing not found');
        const data = await response.json();
        // Add random distance from college
        data.distanceFromCollege = `${generateRandomDistance()} meters`;
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

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReview(prev => ({
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
      Sharing Option: ${formData.sharingOption} 
      Visit Date: ${formData.visitDate}
      Visit Time: ${formData.visitTime}
    `;

    // Create mailto link
    const emailLink = `mailto:mrigaanksharma928@gmail.com?subject=Booking%20Request%20for%20Room%20Type%20${formData.roomType}&body=${encodeURIComponent(emailBody)}`;

    // Trigger email client
    window.location.href = emailLink;
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: reviews.length + 1,
      name: review.name,
      rating: Number(review.rating),
      comment: review.comment
    };
    setReviews([...reviews, newReview]);
    setReview({ name: '', rating: 0, comment: '' });
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
            <p className="text-sm text-gray-500">Distance from College: {listing.distanceFromCollege}</p>
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

          <div>
            <h3 className="text-lg font-semibold mb-4">Student Reviews</h3>
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="border p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center">
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-yellow-400 text-sm">{'★'.repeat(review.rating)}</div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Add Your Review</h3>
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={review.name}
                onChange={handleReviewChange}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => setReview(prev => ({ ...prev, rating }))}
                    className={`w-8 h-8 flex justify-center items-center border rounded-full ${review.rating === rating ? 'bg-yellow-400' : 'bg-gray-200'}`}
                  >
                    ★
                  </button>
                ))}
              </div>
              <textarea
                name="comment"
                placeholder="Write your review"
                value={review.comment}
                onChange={handleReviewChange}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit Review
              </button>
            </form>
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

            {formData.roomType === 'double' || formData.roomType === 'triple' ? (
              <div className="space-y-4">
                <label className="text-sm font-semibold">Choose Roommate Option</label>
                <select
                  name="sharingOption"
                  value={formData.sharingOption}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select an option</option>
                  <option value="Share with one other">Share with one other person</option>
                  <option value="Share with whole room">Share with whole room</option>
                </select>
              </div>
            ) : null}

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
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
