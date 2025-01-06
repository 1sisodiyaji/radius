'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState, useEffect, useRef, useCallback } from 'react';

interface CustomSliderProps {
  url: string[];
  maxSlides?: number;
  autoPlayInterval?: number;
}

const CustomSlider: React.FC<CustomSliderProps> = ({
  maxSlides = 5,
  autoPlayInterval = 3000,
  url,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % maxSlides);
    }, autoPlayInterval);
  }, [autoPlayInterval, maxSlides, stopAutoPlay]);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? maxSlides - 1 : prev - 1));
    stopAutoPlay();
    startAutoPlay();
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
    stopAutoPlay();
    startAutoPlay();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    stopAutoPlay();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    startAutoPlay();
  };

  return (
    <div
      className="relative w-full max-w-5xl min-h-96 mx-auto overflow-hidden border border-gray-300 rounded-lg shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        onClick={handlePrev}
      >
        <ArrowLeft />
      </button>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {url.map((imageUrl, index) => (
          <div
            key={index}
            className={`w-full flex-shrink-0 h-96 flex items-center justify-center bg-gray-200 ${
              index === currentSlide ? 'opacity-100' : 'opacity-50'
            }`}
          >
            <Image
              src={imageUrl}
              alt={`Slide ${index + 1}`}
              width={700}
              height={700}
              className={`${isHovered ? 'scale-105 blur-0' : 'blur-sm'}`}
            />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        onClick={handleNext}
      >
        <ArrowRight />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-4 py-1 rounded-full">
        {currentSlide + 1} of {maxSlides}
      </div>
    </div>
  );
};

export default CustomSlider;
