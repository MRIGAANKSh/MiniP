import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListingPage = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://localhost:5000/api/listings')
      .then(response => setListings(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-2xl font-bold">Available Listings</h2>
      <div className="grid grid-cols-3 gap-4">
        {listings.map((listing) => (
          <div key={listing._id} className="border p-4">
            <h3 className="text-xl">{listing.title}</h3>
            <p>{listing.description}</p>
            <p className="font-bold">₹{listing.price}/month</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingPage;
