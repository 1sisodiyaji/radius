"use client";
import { Building2, Home, Library, MenuIcon,MessageCircle,Moon,NewspaperIcon,Settings,SidebarCloseIcon,Sun} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Blogs from "./Blogs/Blogs";
import Link from "next/link";

const SidebarButton = ({onClick,icon,label,}: { onClick?: () => void;icon: React.ReactNode;label: string;}) => (

  <button
    onClick={onClick}
    className="flex justify-start items-start p-2 w-full text-base font-medium text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
  >
    {icon}
    <span className="ml-3">{label}</span>
  </button>
  
);

const AdminDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

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

  const renderContent = () => {
    switch (activeSection) {
      case "Home":
        return <div>Welcome to the Home section!</div>;
      case "Blogs":
        return <Blogs />;
      case "Case Study":
        return <div>Explore the Case Studies here.</div>;
      default:
        return <div>Select a section from the sidebar.</div>;
    }
  };

  return (
    <>
      <nav className="px-4 py-2 fixed w-full top-0 z-50 bg-white dark:bg-gray-900">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <button onClick={toggleSidebar} className="text-gray-500 dark:text-gray-400 md:hidden ">
              {isSidebarOpen ? <SidebarCloseIcon /> : <MenuIcon />}
            </button>
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-semibold text-orange-500">Radius</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={toggleDarkMode}
              className="text-gray-500 dark:text-white focus:outline-none rounded-full p-2"
              title="Toggle Dark Mode"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun /> : <Moon />}
            </button>
            <button className="flex items-center text-sm border rounded-full p-1">
              <Image
                src="https://res.cloudinary.com/dbqq41bpc/image/upload/v1736224916/favicon1_ozoyr4.webp"
                alt="User"
                width={32}
                height={32}
                className="p-1"
              />
            </button>
          </div>
        </div>
      </nav>

      <aside
        className={`fixed top-0 left-0 w-64 h-screen pt-14 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } bg-white shadow-sm dark:bg-gray-900`}
      >
        <div className="overflow-y-auto py-5 px-3 h-full">
          <ul className="space-y-2">
            <li>
              <SidebarButton
                label="Home"
                icon={<Home />}
                onClick={() => setActiveSection("Home")}
              />
            </li>
            <li>
              <SidebarButton
                label="Blogs"
                icon={<NewspaperIcon />}
                onClick={() => setActiveSection("Blogs")}
              />
            </li>
            <li>
              <SidebarButton
                label="Case Study"
                icon={<Library />}
                onClick={() => setActiveSection("Case Study")}
              />
            </li>
            <li>
              <SidebarButton
                label="Companies"
                icon={<Building2 />}
                onClick={() => setActiveSection("Companies")}
              />
            </li>
            <li>
              <SidebarButton
                label="Messages"
                icon={<MessageCircle />}
                onClick={() => setActiveSection("Messages")}
              />
            </li>
            <li>
              <SidebarButton
                label="Setting"
                icon={<Settings />}
                onClick={() => setActiveSection("Setting")}
              />
            </li>
          </ul>
        </div>
      </aside>

      <main className="md:p-4 p-1 md:ml-64 h-auto mt-12">
        {renderContent()}
      </main>
    </>
  );
};

export default AdminDashboard;
