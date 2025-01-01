import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Cursor = () => {
  const [cursorStyle, setCursorStyle] = useState({
    x: 0,
    y: 0,
    scaleX: 1,
    scaleY: 1,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Update cursor position and scale
      setCursorStyle((prev) => ({
        ...prev,
        x: e.clientX,
        y: e.clientY,
      }));
    };

    // Adding the mousemove listener
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      id="cursor"
      style={{
        transform: `translate(${cursorStyle.x}px, ${cursorStyle.y}px) scale(${cursorStyle.scaleX}, ${cursorStyle.scaleY})`,
        position: 'fixed', // Ensure cursor stays in view
      }}
      className="bg-black rounded-full w-3 h-3 pointer-events-none z-50 transition-transform duration-200 ease-out"
    ></div>
  );
};

export default Cursor;
