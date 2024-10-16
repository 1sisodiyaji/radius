"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer'; 

// Hook for count-up animation
const useCountUp = (end, duration) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 96); // Frame rate: 96ms per frame (60 fps)
    
    const animateCount = () => {
      start += increment;
      if (start < end) {
        setCount(parseFloat(start.toFixed(2))); // Update count
        requestAnimationFrame(animateCount);    // Repeat animation
      } else {
        setCount(end);  // Set final value when complete
      }
    };

    requestAnimationFrame(animateCount);
  }, [end, duration]);

  return count;
};

const AnimatedCard = ({ src, title, end, suffix = '', duration }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const count = useCountUp(inView ? end : 0, duration); // Count up when in view

  return (
    <div
      ref={ref} // Element will be observed when it comes into view
      className="text-center shadow-2xl rounded-lg p-3 w-64 items-center flex flex-col justify-center"
    >
      <Image
        src={src}
        width={150}
        height={100}
        alt={title}
        className="hover:scale-105 transition-transform ease-out cursor-pointer"
      />
      <h5 className="mt-4">{title}</h5>
      <h1 className="text-5xl bg-gradient-to-r from-[#8B3BAE] to-[#B44C73] bg-clip-text text-transparent  font-bold">
        {count}
        {suffix}
      </h1>
    </div>
  );
};

const Trust = () => {
  return (
    <div className="relative flex flex-col items-center max-w-screen-xl  mx-auto md:flex-row">
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10">
        <div>
          <h2 className="text-4xl font-bold mb-8 leading-12 text-center">
            Trust, Reliability & Credibility
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Uptime Percentage Card */}
            <AnimatedCard
              src="https://res.cloudinary.com/dbqq41bpc/image/upload/v1729057178/uptime.png"
              title="Uptime Percentage"
              end={99.99}
              suffix="%"
              duration={2000}
            />
            {/* Years of Presence Card */}
            <AnimatedCard
              src="https://res.cloudinary.com/dbqq41bpc/image/upload/v1729057722/global-access.png"
              title="Years of Presence"
              end={10}
              suffix="+"
              duration={2000}
            />
            {/* Integration Card */}
            <AnimatedCard
              src="https://res.cloudinary.com/dbqq41bpc/image/upload/v1729057722/network.png"
              title="Integration"
              end={30}
              suffix="+"
              duration={2000}
            />
            {/* Channel Support Card */}
            <AnimatedCard
              src="https://res.cloudinary.com/dbqq41bpc/image/upload/v1729057722/collaborate.png"
              title="Channel Support"
              end={24}
              suffix=" * 7"
              duration={2000}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10">
        <div className="relative w-full p-3 rounded md:p-8">
          <div className="rounded-lg bg-white text-black w-full">
            <Image src="https://res.cloudinary.com/dbqq41bpc/image/upload/v1726974367/Camsharp/Booking_Form_tq3afm.png" alt='trust' width={500} height={200}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;
