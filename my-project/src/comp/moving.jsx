import React from "react";
import './moving.css'; // Import the CSS for the marquee animation

const MarqueeComponent = () => {
  return (
    <div className="flex justify-center items-center mt-8">
      <div className="marquee-container">
        <div className="marquee">
          <div className="marquee-text font-bold text-8xl "> 
            {/* Increase the font size to 'text-8xl' */}
            <span className="font-bold text-8xl">
              {/* Increase the inner text size to 'text-4xl' */}
              Unlock Your Campus Adventure: Find Your Perfect Crib!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeComponent;
