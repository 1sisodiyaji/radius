"use client";
import PhoneMockup from "@/components/Pages/Home/PhoneMockup";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [text, setText] = useState("Secure");
  useEffect(() => {
    const interval = setInterval(() => {
      switch (text) {
        case "Secure":
          setText("Easy to Use");
          break;
        case "Easy to Use":
          setText("Intelligent");
          break;
        default:
          setText("Secure");
          break;
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <>
      <div className="bg-gradient-to-b from-white via-lightGreen to-orange h-screen text-black">
        <div className="container mx-auto flex flex-col items-center justify-center md:pt-32">
          <h1 className=" text-4xl text-center font-regular tracking-widest leading-snug ">
            An Omnichannel Interaction <br />
            System that is{" "}
            <span className={` bg-amber-400 text-white rounded-md px-3`}>
              {" "}
              {text}{" "}
            </span>
          </h1>

          <div className="pt-8 space-x-4">
            <button className="btn bg-[#C2E9DB] font-light shadow-sm hover:bg-[#1A776F] hover:text-white text-black">
              Book Your Demo
            </button>
            <button className=" rounded-lg border border-[#1A776F] py-3 px-3 font-light text-black">
              See Our Tools
            </button>
          </div>
        </div>

        <div className="flex justify-around item-center md:pt-12">
          <div className="hover:transition hover:translate-x-24 hover:duration-300">
            <PhoneMockup
              src={
                "https://res.cloudinary.com/dvgs9khxj/image/upload/v1732025248/Phone-Mockup_fck6qn.png"
              }
            />
          </div>

          <div className="custom-bounce">
            <div className="mockup-window bg-base-300"> 
                <video
                  src="https://res.cloudinary.com/dbqq41bpc/video/upload/v1732085930/Factory_of_3D_Animations_free_gm5cio.mp4"
                  autoPlay
                  muted
                  loop
                  controls
                  style={{ width: "100%", height: "350px" }}
                ></video> 
            </div>
          </div>

          <div className="hover:transition hover:translate-y-24 hover:duration-300">
            <PhoneMockup
              src={
                "https://res.cloudinary.com/dvgs9khxj/image/upload/v1732025248/Phone-Mockup_fck6qn.png"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
