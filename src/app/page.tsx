import { Spotlight } from "@/components/ui/Spotlight";
import Hero from "@/components/common/Hero";
import TabsDesign from "@/components/common/TabsDesign";
import LogoCarousel from "@/components/ui/LogoCarousel"; 
import Trust from "@/components/common/Trust";
import Carousel from "@/components/common/Carousel";
import Testimonial from "@/components/common/Testimonial";
import Navbar from "@/components/common/Navbar";
import CtaSection from "@/components/common/CtaSection";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <>
      <Spotlight fill="red" /> 
      <Navbar/>
      <Hero/>
      <LogoCarousel />
      <TabsDesign />
      <Trust /> 
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 p-3 max-w-7xl mx-auto">
        <div className="col-span-1"><Carousel /></div>
        <div className="col-span-1"><Carousel /></div>
      </div>
      <Testimonial/> 
     <CtaSection/>
     <Footer/>
    </>
  );
}
