"use client";

import Skeleton from "@/components/common/Skeleton";
import DateTimeConverter from "@/lib/DateConverter";
import ReadingTime from "@/lib/ReadingTime";
import Share from "@/lib/Share";
import TruncateText from "@/lib/TruncateText";
import { Delete, Edit, Monitor, Newspaper, NewspaperIcon } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import CreateBlogForm from "./CreateBlog";

interface BlogsData {
  _id: string;
  title: string;
  image: string;
  description: string;
  slug: string; 
  readTime: string;
  category: string;
  likes: number;
  comments: string[];
  createdAt: string; 
}
const Blogs = () => {
  const [selectedOption, setSelectedOption] = useState("All Blogs");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState("0");

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/blogs"); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await response.json();
        console.log(data);
        setBlogs(data.blogs);
        setCount(data.count);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="md:p-6 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div
          onClick={() => setSelectedOption("Create Blog")}
          className="cursor-pointer border rounded-lg p-4 h-32 shadow hover:shadow-md transition duration-200 bg-white dark:bg-gray-800 flex flex-col justify-center items-center"
        >
          <Newspaper size={40} />
          <h3 className="text-lg font-semibold text-orange-500">Create Blog</h3>
        </div>
        <div
          onClick={() => setSelectedOption("Monitor Blogs")}
          className="cursor-pointer border rounded-lg p-4 h-32 shadow hover:shadow-md transition duration-200 bg-white dark:bg-gray-800 flex flex-col justify-center items-center"
        >
          <Monitor size={40} />
          <h3 className="text-lg font-semibold text-orange-500">Monitor Blogs</h3>
        </div>
        <div
          onClick={() => setSelectedOption("All Blogs")}
          className="cursor-pointer border rounded-lg p-4 h-32 shadow hover:shadow-md transition duration-200 bg-white dark:bg-gray-800 flex flex-col justify-center items-center"
        >
          <NewspaperIcon size={40} />
          <h3 className="text-lg font-semibold text-orange-500">All Blogs</h3>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 md:p-6  rounded-lg shadow">
        {selectedOption === "Create Blog" && (
          <div>
            <CreateBlogForm/>
          </div>
        )}

        {selectedOption === "Monitor Blogs" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Monitor Blogs</h2>
            <p>Monitoring tools and analytics will go here.</p>
          </div>
        )}

        {selectedOption === "All Blogs" && (
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold mb-4">All Blogs</h2>
              <h2 className="font-semibold border w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-600 mb-4 flex justify-center items-center">{count}</h2>
            </div>

            {loading ? (<Skeleton />) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {blogs && blogs.map((blog: BlogsData) => (
                  <div
                    key={blog._id}
                    className="border rounded-lg p-4 shadow hover:shadow-md transition duration-200 bg-white dark:bg-gray-700"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      <TruncateText text={blog.title} length={50} />
                    </h3>

                    {blog.image && (
                      <Image
                        width={500}
                        height={500}
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                    )}

                    <div className="flex justify-between items-center">
                      <ReadingTime text={blog.description} />
                      <Share url={`http://localhost:3000/blog/${blog.slug}`} />
                    </div>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <TruncateText text={blog.description} length={100} />
                    </p>

                    <div className="text-xs text-gray-900 mb-2 flex justify-between">
                      <span className="px-2 py-1 bg-orange-200 rounded-md">{blog.category}</span> •{" "}
                      <span className="text-gray-500 dark:text-gray-400">
                        <DateTimeConverter date={blog.createdAt} />
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>Likes: {blog.likes}</span>
                      <span>Comments: {blog.comments.length - 1}</span>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <button className="text-white  px-2 py-1 text-sm rounded-md bg-orange-500 inline-flex gap-2"> <Edit size={20} /> View</button>
                      <button className=" text-white  px-2 py-1 text-sm rounded-md bg-red-500 inline-flex gap-2">Delete <Delete size={20} /></button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
