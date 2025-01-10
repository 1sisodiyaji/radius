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
      className="fixed right-4 top-32 flex flex-col space-y-4 z-50"
    >
      {/* Call */}
      <div
        className={`flex items-center space-x-4 bg-bgLight dark:bg-bgDark shadow-md p-2 rounded-full cursor-pointer transform transition-all duration-400 ${
          hovered === "call" ? "w-32" : "w-10"
        } hover:w-48`}
        onMouseEnter={() => setHovered("call")}
        onMouseLeave={() => setHovered(null)}
        onClick={() => hovered === "call" && handleClick("call")}
      >
        <PhoneCall className="w-6 h-6 block" />
        <p
          className={`whitespace-nowrap text-sm font-medium transition-all duration-300 ${
            hovered === "call" ? "block ml-2" : "hidden"
          }`}
        >
          Call Us
        </p>
      </div>

      {/* Email */}
      <div
        className={`flex items-center space-x-4 bg-bgLight dark:bg-bgDark shadow-md p-2 rounded-full cursor-pointer transform transition-all duration-300 ${
          hovered === "email" ? "w-32" : "w-10"
        } hover:w-48`}
        onMouseEnter={() => setHovered("email")}
        onMouseLeave={() => setHovered(null)}
        onClick={() => hovered === "email" && handleClick("email")}
      >
        <Mail className="w-6 h-6" />
        <span
          className={`whitespace-nowrap text-sm font-medium transition-all duration-300 ${
            hovered === "email" ? "block ml-2" : "hidden"
          }`}
        >
          Email Us
        </span>
      </div>

      {/* Book a Meeting */}
      <div
        className={`flex items-center space-x-4 bg-bgLight dark:bg-bgDark shadow-md p-2 rounded-full cursor-pointer transform transition-all duration-300 ${
          hovered === "meeting" ? "w-32" : "w-10"
        } hover:w-48`}
        onMouseEnter={() => setHovered("meeting")}
        onMouseLeave={() => setHovered(null)}
        onClick={() => hovered === "meeting" && handleClick("meeting")}
      >
        <Calendar1 className="w-6 h-6" />
        <span
          className={`whitespace-nowrap text-sm font-medium transition-all duration-300 ${
            hovered === "meeting" ? "block ml-2" : "hidden"
          }`}
        >
          Book a Meeting
        </span>
      </div>
    </div>
  );
};

export default RightSideFloating;
