"use client";
import React, { useState } from "react";
import { Copy, MailIcon, MessageCircleIcon, PhoneCall, VideoIcon } from "lucide-react";
import toast from "react-hot-toast";

interface Tab {
  label: string;
  icon: React.ReactNode;
  type: "copy" | "form";
  content: string;
}

const tabs: Tab[] = [
  {
    label: "Chat With Us",
    icon: <MessageCircleIcon />,
    type: "form",
    content: "Fill out the form below to start chatting with our support team.",
  },
  {
    label: "Video-Call",
    icon: <VideoIcon />,
    type: "form",
    content: "Provide your details to schedule or start a video call with us.",
  },
  {
    label: "Mail to Us",
    icon: <MailIcon />,
    type: "copy",
    content: "support@radius-ois.ai",
  },
  {
    label: "Talk To Us",
    icon: <PhoneCall />,
    type: "copy",
    content: "8069130844",
  },
];

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Copied !!");
    setTimeout(() => setCopied(false), 1500);
  };

  const renderContent = (tab: Tab) => {
    if (tab.type === "copy") {
      return (
        <div className="flex items-center justify-between">
          <span className="text-xl font-medium">{tab.content}</span>
          <button
            onClick={() => handleCopy(tab.content)}
            className="ml-4  text-black dark:text-white px-3 py-1 "
          >
            {copied ? "Copied!" : <Copy />}
          </button>
        </div>
      );
    }

    if (tab.type === "form") {
      return (
        <form className="space-y-4">
          <p className="mb-2">{tab.content}</p>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Mobile Number
            </label>
            <input
              type="text"
              placeholder="Enter your mobile number"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Organization
            </label>
            <input
              type="text"
              placeholder="Enter your organization"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Submit
          </button>
        </form>
      );
    }

    return null;
  };

  return (
    <div className="md:flex items-center md:max-w-7xl mx-auto">

      <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
        {tabs.map((tab) => (
          <li key={tab.label}>
            <button
              onClick={() => setActiveTab(tab.label)}
              className={`inline-flex items-center px-4 py-3 rounded-lg min-w-72 ${activeTab === tab.label
                  ? "text-white bg-orange-500 dark:bg-orange-600"
                  : "hover:text-gray-900 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
              aria-current={activeTab === tab.label ? "page" : undefined}
            >
              <span className="me-2">{tab.icon}</span>
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="p-6 bg-gray-200 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-[40vw] md:min-h-96">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          {activeTab}
        </h3>
        <div>{renderContent(tabs.find((tab) => tab.label === activeTab)!)}</div>
      </div>
    </div>
  );
};

export default Tabs;
