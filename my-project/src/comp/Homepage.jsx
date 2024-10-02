import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-3xl font-bold">Welcome to Student Nest</h2>
      <p className="text-lg">Find affordable student accommodation near you.</p>
      <Link to="/listings" className="bg-blue-500 text-white p-2 rounded mt-4 inline-block">View Listings</Link>
    </div>
  );
};

export default HomePage;
