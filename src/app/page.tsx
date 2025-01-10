import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar"; 
import ChaeckRadiusInAction from "@/components/core/home/ChaeckRadiusInAction";
import Device from "@/components/core/home/Device";
import Faq from "@/components/core/home/Faq";
import Features from "@/components/core/home/Features";
import Hero from "@/components/core/home/Hero";  
import OurProducts from "@/components/core/home/OurProducts";
import Testimonial from "@/components/core/home/Testimonial";
import WhyRadius from "@/components/core/home/WhyRadius";

export default function Home() {
  return (
    <>
      <Navbar /> 
    
      <div className=" max-w-7xl mx-auto space-y-20 p-1">
       <Hero/>
        <OurProducts/>
        <Device /> 
        <WhyRadius/>
        <ChaeckRadiusInAction/>
        </div> 
        <Features/> 
        <div className=" max-w-7xl mx-auto space-y-20 p-1 my-12">
        <Testimonial />
        <Faq />
      </div>
      <Footer />
    </>
  );
}
