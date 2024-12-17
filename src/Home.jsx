import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FeatureCard from './FeatureCard';
import { Search, Star, Zap, Building2, MessageCircle } from 'lucide-react';
import PopularSearches from './popular';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/result?search=${searchTerm}`);
    }
  };

  return (
    <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url("https://example.com/your-background-image.jpg")' }}>
      {/* Welcome Section with Search Bar */}
      <section className="flex items-center justify-between text-center  px-6 bg-gradient-to-r from-teal-500 via-teal-700 to-teal-800 bg-opacity-60 min-h-screen">
        {/* Left: Search bar */}
        <div className="max-w-xl w-full text-white">
          <h1 className="text-5xl font-extrabold leading-tight mb-6">Welcome to Campus Crib</h1>
          <p className="text-lg mb-8">Find your perfect student accommodation near your university.</p>
          <div className="relative inline-block w-full max-w-md mb-6">
            <input
              type="text"
              placeholder="Search for listings near your college..."
              className="w-full h-14 px-6 text-black text-lg rounded-full bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="absolute right-0 top-0 h-14 px-6 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-all duration-300"
            >
              Search
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="hidden md:block w-1/2">
          <img
            src="https://accommodationforstudents.com/cdn-cgi/image/f=auto,q=85,w=586,dpr=2/https://s3.eu-west-2.amazonaws.com/images.accommodationforstudents.com/website/home-page/hero-desktop.png"
            alt="Accommodation Hero"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* Listings Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* PG Accommodations */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20220428/pngtree-hostel-cartoon-flat-illustration-room-image_1110131.jpg" alt="PG Accommodations" className="w-full h-56 object-cover"/>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">PG Accommodations</h2>
              <p className="text-gray-600">Comfortable and affordable PG options for students.</p>
            </div>
          </div>

          {/* Mess Facilities */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <img src="https://t3.ftcdn.net/jpg/06/63/53/62/360_F_663536268_zxtniBUfI2CH8KvXYl7gYfwXXECB8BZK.jpg" alt="Mess Facility" className="w-full h-56 object-cover"/>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Mess Facilities</h2>
              <p className="text-gray-600">Delicious and nutritious meals for busy students.</p>
            </div>
          </div>

          {/* Study Areas */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <img src="https://zenlayercdn.centuryply.com/blogimage/15-02-24/blog28-1.jpg" alt="Study Area" className="w-full h-56 object-cover"/>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Study Areas</h2>
              <p className="text-gray-600">Quiet and well-equipped spaces for focused studying.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-12 grid gap-6">
        <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={Star}
            title="Trusted by 1m+ students"
            description="Every year, we help over a million students find their ideal place."
          />
          <FeatureCard
            icon={Zap}
            title="Quick & easy bookings"
            description="Secure your room in no time with hassle-free instant booking."
          />
          <FeatureCard
            icon={Building2}
            title="The widest choice"
            description="Browse verified, affordable student rooms close to university."
          />
          <FeatureCard
            icon={MessageCircle}
            title="We're here to help"
            description="Reach out to our friendly team of experts who are always on hand."
          />
        </div>
      </section>
      <PopularSearches/>

      {/* Why Choose Section */}
      <section className="text-center mb-16 bg-gray-50 py-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Campus Crib?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
            <img
              src="https://thumbs.dreamstime.com/z/affordable-text-written-word-red-round-stamp-sign-affordable-written-word-red-stamp-sign-251938477.jpg?w=768"
              alt="Affordable housing"
              className="w-full h-56 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Affordable</h3>
            <p className="text-gray-600">Budget-friendly options for every student.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5706/5706483.png"
              alt="Convenient location"
              className="w-full h-56 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Convenient</h3>
            <p className="text-gray-600">Located near major universities and colleges.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
            <img
              src="https://img.freepik.com/free-vector/24-hour-service-everyday-concept-background_1017-38129.jpg"
              alt="Safe environment"
              className="w-full h-56 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe</h3>
            <p className="text-gray-600">Secure environments with 24/7 support.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
