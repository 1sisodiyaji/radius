import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { WobbleCardDemo } from "@/components/common/WoobleCard";
import Device from "@/components/core/home/Device";
import Faq from "@/components/core/home/Faq";
import Hero from "@/components/core/home/Hero";
import Marketting from "@/components/core/home/Marketting";
import Testimonial from "@/components/core/home/Testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" max-w-7xl mx-auto space-y-20">
        <Hero />
        <WobbleCardDemo />
        <Device />
        <Marketting />
        <Testimonial />
        <Faq />
      </div>
      <Footer />
    </>
  );
}
