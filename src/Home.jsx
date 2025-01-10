import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import FeatureCard from "./FeatureCard";
import { Search, Star, Zap, Building2, MessageCircle } from "lucide-react";
import PopularSearches from "./popular";
import FAQ from "./accordian";
import Stats from "./stats";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/result?search=${searchTerm}`);
    }
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: 'url("https://example.com/your-background-image.jpg")',
      }}
    >
      {/* Welcome Section with Search Bar */}
      <section
        className="flex items-center justify-between text-center px-6 bg-opacity-60 min-h-screen"
        data-aos="fade-up"
      >
        <div className="max-w-xl w-full text-white">
          <h1 className="text-4xl py-5 text-blue-500 tracking-tight text-primary md:text-5xl lg:text-6xl">
            Connecting Students to Amazing Accommodations
          </h1>
          <p className="text-lg py-2 text-blue-400 text-muted-foreground">
            Find a cozy home away from home, connect with fellow students, and
            embark on an unforgettable experience. Start your journey with us
            today!
          </p>
          <div className="relative inline-block w-full max-w-md mb-6">
            <input
              type="text"
              placeholder="Search by College"
              className="w-full h-14 px-6 text-black text-lg rounded-full bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="absolute right-0 top-0 h-14 px-6 text-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <div className="hidden md:block w-1/2" data-aos="fade-up">
          <img
            src="https://accommodationforstudents.com/cdn-cgi/image/f=auto,q=85,w=586,dpr=2/https://s3.eu-west-2.amazonaws.com/images.accommodationforstudents.com/website/home-page/hero-desktop.png"
            alt="Accommodation Hero"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      <Stats />
{/* Listings Section */}
<section className="container mx-auto px-6 py-12">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {/* PG Accommodations */}
    <div
      className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-95 hover:shadow-xl hover:border-gray-600 border-2 border-gray-300 transition-all duration-300 ease-in-out hover:border-white hover:shadow-white"
      data-aos="fade-up"
    >
      <div className="relative">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20220428/pngtree-hostel-cartoon-flat-illustration-room-image_1110131.jpg"
          alt="PG Accommodations"
          className="w-full h-56 object-cover transform group-hover:scale-90 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          PG Accommodations
        </h2>
        <p className="text-gray-600">
          Comfortable and affordable PG options for students.
        </p>
      </div>
    </div>

    {/* Mess Facilities */}
    <div
      className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-95 hover:shadow-xl hover:border-gray-600 border-2 border-gray-300 transition-all duration-300 ease-in-out hover:border-white hover:shadow-white"
      data-aos="fade-up"
    >
      <div className="relative">
        <img
          src="https://t3.ftcdn.net/jpg/06/63/53/62/360_F_663536268_zxtniBUfI2CH8KvXYl7gYfwXXECB8BZK.jpg"
          alt="Mess Facility"
          className="w-full h-56 object-cover transform group-hover:scale-90 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Mess Facilities
        </h2>
        <p className="text-gray-600">
          Delicious and nutritious meals for busy students.
        </p>
      </div>
    </div>

    {/* Study Areas */}
    <div
      className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-95 hover:shadow-xl hover:border-gray-600 border-2 border-gray-300 transition-all duration-300 ease-in-out hover:border-white hover:shadow-white"
      data-aos="fade-up"
    >
      <div className="relative">
        <img
          src="https://zenlayercdn.centuryply.com/blogimage/15-02-24/blog28-1.jpg"
          alt="Study Area"
          className="w-full h-56 object-cover transform group-hover:scale-90 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Study Areas
        </h2>
        <p className="text-gray-600">
          Quiet and well-equipped spaces for focused studying.
        </p>
      </div>
    </div>
  </div>
</section>


      <PopularSearches />

      {/* Why Choose Section */}
      <section className="text-center mb-16 bg-gray-50 py-12">
        <h2
          className="text-3xl font-serif  text-gray-800 mb-6 px-6"
          data-aos="fade-up"
        >
          Why Choose Campus Crib?
        </h2>

        <div className="min-h-screen flex flex-col items-center justify-center">
          <FAQ/>
        </div>
      </section>
    </div>
  );
}
