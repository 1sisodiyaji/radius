import React from "react";

interface ReadingTimeProps {
  text: string;
}

const calculateReadingTime = (text: string): number => {
  const words = text.split(/\s+/).filter((word) => word.length > 0);
  const wordsPerMinute = 200; 
  return Math.ceil(words.length / wordsPerMinute);
};

const ReadingTime: React.FC<ReadingTimeProps> = ({ text }) => {
  const readingTime = calculateReadingTime(text);

  return (
    <p>
      <strong>{readingTime} minute{readingTime > 1 ? "s" : ""}</strong>
    </p>
  );
};

export default ReadingTime;
