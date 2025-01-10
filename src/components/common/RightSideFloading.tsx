"use client";
import { Calendar1, Mail, PhoneCall } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

type OptionType = "call" | "email" | "meeting";

const RightSideFloating = () => {
  const floatingRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<OptionType | null>(null);

  const handleClick = (option: OptionType) => {
    if (option === "call") {
      window.location.href = "tel:+123456789";
    } else if (option === "email") {
      window.location.href = "mailto:example@example.com";
    } else if (option === "meeting") {
      window.open("https://example.com/book-meeting", "_blank");
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      floatingRef.current &&
      !floatingRef.current.contains(event.target as Node)
    ) {
      setHovered(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={floatingRef}
      className="fixed right-2 top-32 flex flex-col space-y-4 z-50 bg-white p-2 rounded-md"
    > 
      {["call", "email", "meeting"].map((option) => {
        const Icon = option === "call" ? PhoneCall : option === "email" ? Mail : Calendar1;
        const label = option === "call" ? "Call Us" : option === "email" ? "Email Us" : "Book a Meeting";

        return (
          <div
            key={option}
            className={`flex items-center space-x-4 bg-bgLight dark:bg-bgDark shadow-md p-2 rounded-full cursor-pointer transform transition-all duration-300 ${
              hovered === option ? "w-32" : "w-10"
            } hover:w-48`}
            onMouseEnter={() => setHovered(option as OptionType)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => hovered === option && handleClick(option as OptionType)}
          >
            <Icon className="w-6 h-6" />
            <span
              className={`whitespace-nowrap text-sm font-medium transition-all duration-300 ${
                hovered === option ? "block ml-2" : "hidden"
              }`}
            >
              {label}
            </span>
          </div>
        );
      })}
      
    </div>
  );
};

export default RightSideFloating;
