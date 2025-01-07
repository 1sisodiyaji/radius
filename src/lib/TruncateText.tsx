import React from "react";

interface TruncateTextProps {
  text: string;
  length: number;
}

const TruncateText: React.FC<TruncateTextProps> = ({ text, length }) => {
  const truncatedText = text.length > length ? `${text.slice(0, length)}...` : text;

  return <span>{truncatedText}</span>;
};

export default TruncateText;
