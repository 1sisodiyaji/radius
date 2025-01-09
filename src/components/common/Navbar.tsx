"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <nav className={`bg-gray-50 dark:bg-gray-950 fixed w-full z-20 top-0 start-0 ${isScrolled ? "shadow-sm" : "shadow-0"}`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            {isDarkMode ?
              <>
                <Image
                  src="https://res.cloudinary.com/dvgs9khxj/image/upload/v1735801462/white-final_bmh1he.png"
                  className="h-8 w-32 object-contain"
                  alt="Radius Logo"
                  width={1000}
                  height={1000}
                />
              </>
              :
              <>
                <Image
                  src="https://res.cloudinary.com/dvgs9khxj/image/upload/v1735792875/radius0logo_v5qkzc.webp"
                  className="h-8 w-32 object-contain"
                  alt="Radius Logo"
                  width={1000}
                  height={1000}
                />
              </>
            }
          </Link>
          <div className="flex md:order-2 space-x-3  rtl:space-x-reverse items-center">
            <button
              type="button"
              onClick={toggleDarkMode}
              className="text-gray-500 dark:text-white focus:outline-none  rounded-full p-2"
              title="Toggle Dark Mode"
              aria-label="Toggle Dark Mode"
            >
              <label className="inline-flex items-center justify-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  className="sr-only peer"
                />
                {isDarkMode ? <Sun /> : <Moon />}
              </label>
            </button>
            <Link href={'/support'}>
              <button
                type="button"
                className="text-white dark:text-black bg-orange-400 hover:bg-orange-500  focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center"

              >
                Support
              </button>
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className={cn("inset-x-0 max-w-5xl mx-auto z-50")}
          >
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item="why Radius">
                <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                  <ProductItem
                    title="Overview"
                    href="/why-radius/overview"
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    description="Prepare for tech interviews like never before."
                  />
                  <ProductItem
                    title="Capabilities"
                    href="/why-radius/capabilities"
                    src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                    description="Production ready Tailwind css components for your next project"
                  />
                  <ProductItem
                    title="Industry"
                    href="/why-radius/industry"
                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                    description="Never write from scratch again. Go from idea to blog in minutes."
                  />
                  <ProductItem
                    title="Technology"
                    href="/why-radius/technology"
                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                    description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                  />
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="offerings">
                <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                  <ProductItem
                    title="Products"
                    href="/offering/products"
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    description="Prepare for tech interviews like never before."
                  />
                  <ProductItem
                    title="Support"
                    href="/offering/support"
                    src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                    description="Production ready Tailwind css components for your next project"
                  />
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="resources">
                <div className="text-sm grid grid-cols-2 gap-10 p-4">
                  <ProductItem
                    title="Customer Stories"
                    href="/resources/customer-stories"
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    description="Prepare for tech interviews like never before."
                  />
                  <ProductItem
                    title="Blogs"
                    href="/resources/blogs"
                    src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                    description="Production ready Tailwind css components for your next project"
                  />
                  <ProductItem
                    title="Features"
                    href="/resources/Features"
                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                    description="Never write from scratch again. Go from idea to blog in minutes."
                  />
                  <ProductItem
                    title="Carrer"
                    href="/resources/carrer"
                    src="https://res.cloudinary.com/dvgs9khxj/image/upload/v1735819635/carrer_yzeues.png"
                    description="Carrer Page Check out your dream job here"
                  />
                </div>
              </MenuItem>
            </Menu>
          </div>


        </div>
        <div className="absolute bottom-0 left-0 h-[1px] bg-orange-500" style={{  width: `${scrollProgress}%`, transition: "width 0.3s ease-linear"}} ></div>
      </nav>
    </>
  );
};

export default Navbar;
