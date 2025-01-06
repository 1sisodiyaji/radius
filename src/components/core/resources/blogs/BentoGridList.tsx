"use client" 
import React, { useState, useEffect } from "react";
import { BentoGrid, BentoGridItem } from "../../../ui/bento-grid";
import Image from "next/image";

interface Post {
  title: string;
  description: string;
  header: string; 
  date: string;
  readTime: string;
}


const fetchPosts = (startIndex: number, limit: number) => {
  const posts = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions. This is a deeper dive into how innovation shapes our world and influences future technologies.",
      header: "https://via.placeholder.com/400x250",
      date: "2025-01-01",
      readTime: "5 min read",
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology. Learn about the advancements and digital tools that are reshaping industries worldwide.",
      header: "https://via.placeholder.com/400x250",
      date: "2025-01-02",
      readTime: "6 min read",
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design. Explore how design principles improve usability and enhance user experiences.",
      header: "https://via.placeholder.com/400x250",
      date: "2025-01-03",
      readTime: "4 min read",
    },
    {
      title: "The Power of Communication",
      description: "Understand the impact of effective communication in our lives. From personal relationships to business environments, communication is key.",
      header: "https://via.placeholder.com/400x250",
      date: "2025-01-04",
      readTime: "7 min read",
    },
    {
      title: "The Pursuit of Knowledge",
      description: "Join the quest for understanding and enlightenment. Delve into the depths of knowledge, philosophy, and curiosity in our everyday lives.",
      header: "https://via.placeholder.com/400x250",
      date: "2025-01-05",
      readTime: "8 min read",
    },
    {
      title: "The Joy of Creation",
      description: "Experience the thrill of bringing ideas to life. This post explores the creative process, from inception to execution.",
      header: "https://via.placeholder.com/400x250",
      date: "2025-01-06",
      readTime: "6 min read",
    },
    {
      title: "The Spirit of Adventure",
      description: "Embark on exciting journeys and thrilling discoveries. Follow stories of adventure that challenge and inspire.",
      header: "https://via.placeholder.com/400x250",
      date: "2025-01-07",
      readTime: "5 min read",
    },
  ];

  return posts.slice(startIndex, startIndex + limit);
};

export function BlogPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const newPosts = fetchPosts(page * 7, 7);
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setLoading(false);
    };

    loadPosts();
  }, [page]);


  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const target = e.target as HTMLElement; // Cast to HTMLElement
    const bottom = target.scrollHeight === target.scrollTop + target.clientHeight;
    if (bottom && !loading) {
      setPage(page + 1);
    }
  };

  return (
    <div onScroll={handleScroll}>
      <BentoGrid className="max-w-7xl mx-auto py-24">
        {posts.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title.length > 30 ? `${item.title.substring(0, 30)}...` : item.title}
            description={item.description.length > 100 ? `${item.description.substring(0, 100)}...` : item.description}
            header={<Image src={item.header} alt={item.title} className="w-full h-[200px] object-cover rounded-md" height={1000} width={1000} priority/>}
            readTime={item.readTime}
            date = {item.date}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          > 
          </BentoGridItem>
        ))}
      </BentoGrid>

      {loading && (
        <div className="py-4 text-center text-neutral-500">
          <span>Loading more posts...</span>
        </div>
      )}
    </div>
  );
}
