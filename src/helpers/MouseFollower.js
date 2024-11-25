"use client"
import React, { useState, useEffect } from 'react';

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolling, setIsScrolling] = useState(false); // To track if the page is being scrolled

  useEffect(() => {
    // Handler to update mouse position
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    // Add mousemove event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Handle scroll events to prevent dot from scrolling
    const handleScroll = () => {
      setIsScrolling(true);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listeners
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Style for the green dot
  const dotStyle = {
    position: 'fixed',   // Position the dot in fixed position relative to the viewport
    top: mousePosition.y - 5,  // Offset by 5px to center the dot
    left: mousePosition.x - 5, // Offset by 5px to center the dot
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'green',
    pointerEvents: 'none',    // Ensures the dot doesn't interfere with mouse events
    transition: 'top 0.1s, left 0.1s', // Smooth transition for the dot's movement
    zIndex: 9999, // Ensure it is on top of other elements
  };

  return (
    <div>
      <div
        style={dotStyle}
      />
    </div>
  );
};

export default MouseFollower;
