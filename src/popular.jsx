const PopularSearches = () => {
    const searches = [
      {
        title: "PG near",
        location: "ABES",
        image: "https://via.placeholder.com/300x200?text=PG+near+ABES",
      },
      {
        title: "Flat for rent near",
        location: "KIET",
        image: "https://via.placeholder.com/300x200?text=Flat+for+Rent+near+KIET",
      },
      {
        title: "Flat for rent in",
        location: "AKGEC",
        image: "https://via.placeholder.com/300x200?text=Flat+for+Rent+in+AKGEC",
      },
      {
        title: "Independent Room for Rent in",
        location: "IMS",
        image: "https://via.placeholder.com/300x200?text=Independent+Room+for+Rent+in+IMS",
      },
    ];
  
    return (
      <section className="bg-gray-50 py-12 px-6 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
            Popular Searches
          </h2>
  
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {searches.map((search, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="w-full h-64 overflow-hidden">
                  {/* Increased image height from 'h-48' to 'h-64' */}
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
  