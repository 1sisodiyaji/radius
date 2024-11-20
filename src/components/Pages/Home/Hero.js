"use client"
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
    <div className="bg-gradient-to-b from-white via-lightGreen to-orange h-screen ">
        <div className="container mx-auto flex flex-col items-center justify-center pt-10">
          <h1 className=" text-4xl text-center font-regular tracking-widest leading-snug">
            An Omnichannel Interaction <br />
            System that is <span className={` bg-amber-400 text-white rounded-md px-3`}> {text} </span>
          </h1>

          <div className="pt-8 space-x-4">
            <button className="btn bg-[#C2E9DB] font-light shadow-sm hover:bg-[#1A776F] hover:text-white">
              Book Your Demo
            </button>
            <button className=" rounded-lg border border-[#1A776F] py-2 px-3 font-light">
              See Our Tools
            </button>
          </div>
        </div>

        <div className="flex justify-around item-center">
          <div>
            <PhoneMockup
              src={
                "https://res.cloudinary.com/dvgs9khxj/image/upload/v1732025248/Phone-Mockup_fck6qn.png"
              }
            />
          </div>

          <div className="custom-bounce">
            <Image
              src="https://res.cloudinary.com/dvgs9khxj/image/upload/v1732024862/Group_1_gvodqh.png"
              width="750"
              height="400"
              alt="hero section image"
            />
          </div>

          <div>
            <PhoneMockup
              src={
                "https://res.cloudinary.com/dvgs9khxj/image/upload/v1732025248/Phone-Mockup_fck6qn.png"
              }
            />
          </div>
        </div>
      </div>
   </>
  )
}

export default Hero