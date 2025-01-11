import React from "react";
import { useNavigate } from "react-router-dom";

const PopularSearches = () => {
  const searches = [
    {
      title: "PG near",
      location: "ABES",
      image: "https://alexandro.in/image/gurgoan/settl-vienna/3.jpg",
    },
    {
      title: "Flat for rent near",
      location: "KIET",
      image: "https://alexandro.in/image/gurgoan/settl-oslo/3.jpg",
    },
    {
      title: "Flat for rent in",
      location: "AKGEC",
      image: "https://alexandro.in/image/gurgoan/settl-deia/3.jpg",
    },
    {
      title: "Room for Rent near",
      location: "IMS",
      image: "https://alexandro.in/image/gurgoan/settl-verona/3.jpg",
    },
  ];

  const navigate = useNavigate();

  const handleSearchClick = (location) => {
    navigate(`/result?search=${encodeURIComponent(location)}`);
  };

  return (
    <section
      className="bg-gray-50 py-12 px-6 sm:px-8 lg:px-16"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl  text-gray-800 mb-12 text-center">
          Popular Searches
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {searches.map((search, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleSearchClick(search.location)}
            >
              {/* Image */}
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={search.image}
                  alt={`${search.title} ${search.location}`}
                  className="w-full h-full object-cover transform group-hover:scale-95 transition-transform duration-500"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 group-hover:bg-white p-4 rounded-lg shadow-lg text-center transition-colors duration-300">
                  <h3 className="text-gray-600 text-sm font-medium uppercase">
                    {search.title}
                  </h3>
                  <p className="text-gray-900 text-lg font-bold">
                    {search.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSearches;
