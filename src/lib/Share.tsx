import { Copy,  Facebook,LucideLinkedin, MessageCircle, ShareIcon, Twitter } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface ShareProps {
  url: string;
}

const Share: React.FC<ShareProps> = ({ url }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url).then(() => {
      toast.success("Link copied to clipboard!");
    });
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center items-center gap-2 w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
        id="options-menu"
        aria-expanded={isOpen ? "true" : "false"}
        aria-haspopup="true"
      >
        Share <ShareIcon size={13}/>
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-900 dark:ring-gray-600"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
          <button
              onClick={handleCopy}
              className="text-gray-900 flex items-center justify-center gap-2 w-full px-4 py-2 text-sm dark:text-white"
            >
             <Copy size={20} /> Copy Link
            </button>
            <Link
              href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 flex items-center justify-center gap-2 w-full px-4 py-2 text-sm dark:text-white"
            >
              <Facebook size={20}/> Facebook
            </Link>
            <Link
              href={`https://api.whatsapp.com/send?text=${url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 flex items-center justify-center gap-2 w-full px-4 py-2 text-sm dark:text-white"
            >
                 <MessageCircle size={20}/>

               WhatsApp
            </Link>
            <Link
              href={`https://twitter.com/intent/tweet?url=${url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 flex items-center justify-center gap-2 w-full px-4 py-2 text-sm dark:text-white"
            >
              <Twitter size={20}/> Twitter
            </Link>
            <Link
              href={`https://www.linkedin.com/shareArticle?url=${url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 flex items-center justify-center gap-2 w-full px-4 py-2 text-sm dark:text-white"
            >
              <LucideLinkedin size={20} /> LinkedIn
            </Link>
           
          </div>
        </div>
      )}
    </div>
  );
};

export default Share;
