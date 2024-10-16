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
            <div className="hidden md:block">
            <ul className="flex ms-12">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:bg-red-200 rounded-md hover:shadow-2xl"
                >
                  Offering
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:bg-red-200 rounded-md hover:shadow-2xl"
                >
                  Why Radius
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:bg-red-200 rounded-md hover:shadow-2xl"
                >
                  Plan & Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:bg-red-200 rounded-md hover:shadow-2xl"
                >
                  Resources
                </a>
              </li>
            </ul>
            </div>
          </div>

          {/* Right side button */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <MovingBorder text={"Request a Demo"} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger to Cross transition */}
              <svg
                className={`w-5 h-5 transition-transform duration-300 ease-in-out transform ${isOpen ? "rotate-35" : ""
                  }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>

          </div>
        </div>

        {/* Sidebar for mobile view */}
        <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out`}
        >
          <div className="p-5">
            <ul className="flex flex-col font-medium space-y-4">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:bg-red-200 rounded-md hover:shadow-2xl"
                >
                  Offering
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:bg-red-200 rounded-md hover:shadow-2xl"
                >
                  Why Radius
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:bg-red-200 rounded-md hover:shadow-2xl"
                >
                  Plan & Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:bg-red-200 rounded-md hover:shadow-2xl"
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Overlay when sidebar is open */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

      </nav>
    </>
  );
};

export default Navbar;
