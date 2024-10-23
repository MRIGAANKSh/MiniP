import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-10 bg-cover bg-center" style={{ backgroundImage: 'url("https://example.com/your-background-image.jpg")' }}>
      {/* Welcome Section with Search Bar */}
      <section className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-4 text-gray-900">Welcome to Campus Crib</h1>
        <p className="text-xl text-gray-700 mb-8">Your perfect student accommodation awaits</p>
        <div className="relative inline-block w-full max-w-md mb-8">
          <input 
            type="text" 
            placeholder="Search for listings near your college..." 
            className="w-full h-12 px-4 border border-gray-300 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300"
          />
          <button className="absolute inset-y-0 right-0 px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition duration-300 shadow-lg">
            Search
          </button>
        </div>
      </section>

      {/* Listings Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
          <img src="https://png.pngtree.com/thumb_back/fh260/background/20220428/pngtree-hostel-cartoon-flat-illustration-room-image_1110131.jpg"  />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">PG Accommodations</h2>
            <p className="text-gray-600">Comfortable and affordable PG options for students.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
          <img src="https://t3.ftcdn.net/jpg/06/63/53/62/360_F_663536268_zxtniBUfI2CH8KvXYl7gYfwXXECB8BZK.jpg" alt="Mess Facility" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Mess Facilities</h2>
            <p className="text-gray-600">Delicious and nutritious meals for busy students.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
          <img src="https://c8.alamy.com/comp/2JR8JK8/messy-bedroom-with-playing-kids-dirty-furniture-clutter-and-scattered-garbage-children-play-in-untidy-hostel-or-dormitory-room-with-bunk-bed-computer-and-wardrobe-vector-cartoon-illustration-2JR8JK8.jpg" alt="Study Area" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Study Areas</h2>
            <p className="text-gray-600">Quiet and well-equipped spaces for focused studying.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="text-center mb-16">
  <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Choose Campus Crib?</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    
    {/* Affordable Housing */}
    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/022/797/865/small/affordable-rubber-stamp-seal-vector.jpg"
        alt="Affordable housing"
        className="w-full h-48 object-cover mb-4"
      />
      <h3 className="text-xl font-semibold mb-2 text-gray-900">Affordable</h3>
      <p className="text-gray-600">Budget-friendly options for every student</p>
    </div>

    {/* Convenient Location */}
    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
      <img
        src="https://cdn-icons-png.flaticon.com/512/5706/5706483.png"
        alt="Convenient location"
        className="w-full h-48 object-cover mb-4"
      />
      <h3 className="text-xl font-semibold mb-2 text-gray-900">Convenient</h3>
      <p className="text-gray-600">Located near major universities and colleges</p>
    </div>

    {/* Safe Environment */}
    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
      <img
        src="https://via.placeholder.com/300x200?text=Safe+Environment"
        alt="Safe environment"
        className="w-full h-48 object-cover mb-4"
      />
      <h3 className="text-xl font-semibold mb-2 text-gray-900">Safe</h3>
      <p className="text-gray-600">Secure environments with 24/7 support</p>
    </div>

  </div>
</section>


      {/* Extra space at the bottom to make the page longer */}
      <div className="mb-16"></div>
    </div>
  );
}
