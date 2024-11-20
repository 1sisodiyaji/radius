"use client"
import React, { useState } from "react";
import Image from "next/image"; // Assuming you're using Next.js, but use an <img> tag if you're using plain React

const LogoCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);

  const logos = [
    "https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027209/Vedantu_dt6e42.png",
    "https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027208/Mindtree_yuqczd.png",
    "https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027209/STARTEK_u2lwuv.png",
    "https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027207/idsnext_g1chjl.png",
    "https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027207/HCIL_ybtnih.png",
    "https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027207/cytecare-hospitals-bangalore-656980d6cf24f_yzagjw.jpg",
    "https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027206/Botree_fglvkf.png",
    "https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027207/cognizant_uonuth.png",
    "https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027207/Hcl_v5prhg.png",
    "https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027206/Fis_wkemvd.png",
    "https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027205/nama-logo_lb4mwz.png"
  ];

  return (
    <div
      className="relative overflow-hidden py-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* The wrapper that holds the logos */}
      <div
        className={`flex space-x-8 ${isHovered ? "" : "animate-scroll"} transition-all duration-300`}
        style={{
          animationDuration: "20s",
        }}
      >
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <Image src={logo} alt={`Logo ${index}`} width={100} height={50} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
