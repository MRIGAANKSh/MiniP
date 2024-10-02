import React from "react";
import './center2.css'; // Updated import statement for specific styles

const CenterBox2 = () => {
  return (
    <div className="h-full w-full flex items-center justify-center py-10">
      <div 
        className="relative container mx-auto px-4 lg:px-20 flex flex-col bg-center bg-cover lg:flex-row items-center rounded-lg overflow-hidden"
        style={{ backgroundImage: 'url("/new_life_style.jpeg")' }}

      >
        {/* Text Section */}
        <div className="relative z-10 lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left p-8 ">
          <h1 className="text-4xl lg:text-5xl font-light  mb-4">
            A lifestyle tailor-made for you
          </h1>
          <p className="text-lg mb-6">
            With diverse housing options, you're not just choosing a home; you're crafting a lifestyle that reflects your individuality. Beyond mere renting, we're here to support your everyday living, hassle-free.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CenterBox2;
