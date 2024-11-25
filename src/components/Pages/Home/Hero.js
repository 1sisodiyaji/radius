"use client";
import React, { useState, useEffect } from "react";
import AnimatedNumber from '@/components/common/AnimatedNumber';
import MeetingButton from "@/components/common/MeetingButton";

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
        <div className="container mx-auto flex  items-center justify-around md:pt-[12vh]">
        <div className="max-w-sm max-h-28 text-center  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 animate-pulse">
              <h5 className="mb-2  "><AnimatedNumber targetNumber={99.99} textColor={'green'} prefix = {'%'}/>  </h5>
              <p className="font-normal text-gray-700">Uptime Reliability.</p>
            </div>

          <div className="flex flex-col justify-center items-center">
          <h1 className=" text-4xl text-center font-regular tracking-widest leading-snug ">
            An Omnichannel Interaction <br />
            System that is{" "}
            <span className={` bg-amber-400 text-white rounded-md px-3`}>
              {" "}
              {text}{" "}
            </span>
          </h1>
            <p className="py-2">Orchestrate intelligent customer interactions on the centralized cloud based platform .</p>
          <div className="pt-8 space-x-4 flex">
            
            <MeetingButton text={'Book Your Demo'}/>
            <button className=" rounded-lg border border-[#1A776F] py-3 px-3 font-light text-black">
              See Our Tools
            </button>
          </div>
          </div>
       
          <div className="max-w-sm max-h-28 text-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 animate-pulse">
            <h5 className="mb-2  "><AnimatedNumber targetNumber={10} textColor={'green'} prefix = {'+'}/>  </h5>
              <p className="font-normal text-gray-700">Years Technology.</p>
            </div>

        </div>

        <div className="flex justify-around item-center md:pt-12">
           
            <div className="max-w-sm max-h-28 text-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 animate-pulse">
            <h5 className="mb-2  "><AnimatedNumber targetNumber={30} textColor={'green'} prefix = {'+'}/>  </h5>
              <p className="font-normal text-gray-700">Integrated Solutions.</p>
            </div> 

          <div className="custom-bounce">
            <div className="mockup-window bg-base-300" style={{ width: "55vw", height: "50vh" }}>
              <video
                src="https://res.cloudinary.com/dbqq41bpc/video/upload/v1732085930/Factory_of_3D_Animations_free_gm5cio.mp4"
                autoPlay
                muted
                loop 
              ></video>
            </div>
          </div>

            <div className="max-w-sm max-h-28 text-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 animate-pulse hover:cursor-pointer">
            <h5 className="mb-2  "><AnimatedNumber targetNumber={24} textColor={'green'} prefix = {'* 7'}/>  </h5>
              <p className="font-normal text-gray-700">Multichannel Support.</p>
            </div> 

        </div>
      </div>
    </>
  );
};

export default Hero;
