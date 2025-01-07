"use client";

import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import SupportHero from "@/components/core/support/SupportHero";  
import React from "react";
 
const SupportPage = () => {
  return (
    <>
    
      <Navbar/>
      <div className="min-h-screen md:py-20">  <SupportHero />  </div>
      <Footer/>
   
    </>
  );
};

export default SupportPage;
