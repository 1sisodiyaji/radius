import React, { useState, useEffect } from 'react';

const AnimatedNumber = ({ targetNumber, textColor , prefix}) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const duration = 900; // duration for transition in milliseconds
    const increment = Math.ceil(targetNumber / (duration / 100));

    if (targetNumber > 0) {
      const interval = setInterval(() => {
        setCurrentNumber((prev) => {
          if (prev < targetNumber) {
            return prev + increment;
          }
          clearInterval(interval);
          return targetNumber;
        });
      }, 100);
      
      // Cleanup the interval when the component unmounts
      return () => clearInterval(interval);
    }
  }, [targetNumber]);

  return (
    <div
      style={{
        fontSize: '2rem',
        fontWeight: 'semibold',
        color: textColor,
        transition: 'color 0.3s ease-in-out', // optional smooth color transition
      }}
    >
      {currentNumber} {prefix}
    </div>
  );
};

export default AnimatedNumber;
