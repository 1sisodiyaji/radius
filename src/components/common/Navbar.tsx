"use client";
import React, { useState } from "react";
import MovingBorder from "./Movingborder";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  return (
    <>
      <nav className="border-gray-200 bg-white sticky top-0 left-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <div className="flex items-center">
            <a
              href="https://radius-ois.ai"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                src="https://res.cloudinary.com/dbqq41bpc/image/upload/v1728989489/radius0logo_nsxx3j.webp"
                alt="radius Logo"
                width={150}
                height={50}
              />
            </a>
          </div>

          {/* Main Menu Items */}
          <div
            className={`md:flex md:w-auto md:order-1 space-x-8 md:space-x-reverse transition-all duration-500 ease-in-out ${
              isOpen ? "block" : "hidden"
            }`}
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium md:flex-row md:space-x-8 rtl:space-x-reverse">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:bg-red-200 md:hover:text-orange-700 rounded-md hover:shadow-2xl"
                >
                  Offering
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:bg-red-200 md:hover:text-orange-700 rounded-md hover:shadow-2xl"
                >
                  Why Radius
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:bg-red-200 md:hover:text-orange-700 rounded-md hover:shadow-2xl"
                >
                  Plan & Pricing
                </a>
              </li>
              <li className="relative group">
                {/* Hover for Resources */}
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:bg-red-200 md:hover:text-orange-700 rounded-md hover:shadow-2xl"
                >
                  Resources
                </a>
                {/* Dropdown on hover */}
                <div className="absolute hidden group-hover:flex bg-white shadow-md rounded-lg mt-1 py-2 w-[480px] z-50 flex-col translate-x-3.5">
                  <ul className="flex md:flex-row md:flex-wrap flex-col space-y-1 p-2">
                    <li className="px-4 py-2 h-24 w-56 rounded-lg flex justify-center items-center gap-4 hover:shadow-2xl ">
                      <a href="#">
                        <i className="fi fi-sr-blog-text text-xl"></i>
                      </a>
                      <a href="#">
                        <h1 className="text-xl">Blogs</h1>
                      </a>
                    </li>
                    <li className="px-4 py-2 h-24 w-56 rounded-lg flex justify-center items-center gap-4 hover:shadow-2xl ">
                      <a href="#">
                        <i className="fi fi-sr-blog-text text-xl"></i>
                      </a>
                      <a href="#">
                        <h1 className="text-xl">Blogs</h1>
                      </a>
                    </li>
                    <li className="px-4 py-2 h-24 w-56 rounded-lg flex justify-center items-center gap-4 hover:shadow-2xl ">
                      <a href="#">
                        <i className="fi fi-sr-blog-text text-xl"></i>
                      </a>
                      <a href="#">
                        <h1 className="text-xl">Blogs</h1>
                      </a>
                    </li>
                    <li className="px-4 py-2 h-24 w-56 rounded-lg flex justify-center items-center gap-4 hover:shadow-2xl ">
                      <a href="#">
                        <i className="fi fi-sr-blog-text text-xl"></i>
                      </a>
                      <a href="#">
                        <h1 className="text-xl">Blogs</h1>
                      </a>
                    </li>
                  </ul>

                  <div className="hover:bg-gray-200 px-4 py-2 flex items-center">
                    <Image
                      src="https://res.cloudinary.com/dbqq41bpc/image/upload/v1728387076/DALL_E_2024-10-08_16.53.54_-_A_cartoon_character_celebrating_success_with_confetti_and_charts_showing_upward_trends_in_customer_satisfaction_average_handling_time_and_first_cont_onhcbl.webp"
                      alt="image"
                      width={50}
                      height={50}
                      className="mr-2"
                    />
                    <div>
                      <h3 className="font-bold">Get Started</h3>
                      <p className="text-sm text-gray-500">
                        Learn how to start quickly
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Right side button */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <MovingBorder text={"Request a Demo"} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
