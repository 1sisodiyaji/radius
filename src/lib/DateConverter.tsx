import React from "react";

interface DateTimeConverterProps {
  date: string;
}

const formatDateTime = (date: string): string => {
  const parsedDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  return parsedDate.toLocaleString("en-US", options);
};

const DateTimeConverter: React.FC<DateTimeConverterProps> = ({ date }) => {
  const formattedDateTime = formatDateTime(date);

  return <p>{formattedDateTime}</p>;
};

export default DateTimeConverter;
