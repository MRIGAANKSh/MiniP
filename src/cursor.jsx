import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Cursor = () => {
  const [cursorStyle, setCursorStyle] = useState({
    x: 0,
    y: 0,
    scaleX: 1,
    scaleY: 1
  });

  useEffect(() => {
    const cursorElement = document.querySelector('#cursor');
    let timeout;
    let xPrev = 0, yPrev = 0;

    const handleMouseMove = (e) => {
      // Calculate scale changes
      const xScale = gsap.utils.clamp(0.8, 1.2, e.clientX - xPrev);
      const yScale = gsap.utils.clamp(0.8, 1.2, e.clientY - yPrev);

      xPrev = e.clientX;
      yPrev = e.clientY;

      // Update cursor position and scale
      setCursorStyle({
        x: e.clientX,
        y: e.clientY,
        scaleX: xScale,
        scaleY: yScale
      });

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cursorElement.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1, 1)`;
      }, 100);
    };

    // Adding the mousemove listener
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      id="cursor"
      style={{
        transform: `translate(${cursorStyle.x}px, ${cursorStyle.y}px) scale(${cursorStyle.scaleX}, ${cursorStyle.scaleY})`,
      }}
      className="absolute bg-white rounded-full w-6 h-6 pointer-events-none z-50 transition-transform duration-200 ease-out"
    ></div>
  );
};

export default Cursor;
