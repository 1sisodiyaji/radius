
"use client"
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
const DarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
      const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
      };
        useEffect(() => {
          const savedTheme = localStorage.getItem("theme");
          if (savedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        }, []);
      
        useEffect(() => {
          if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
          } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
          }
        }, [isDarkMode]);
  return (
    <div>
        <button
              type="button"
              onClick={toggleDarkMode}
              className="text-gray-500 dark:text-white focus:outline-none rounded-full p-2"
              title="Toggle Dark Mode"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun /> : <Moon />}
            </button>
    </div>
  )
}

export default DarkMode