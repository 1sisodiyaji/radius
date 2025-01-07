import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/core/home/Hero"; 

export default function Home() {
  return (
    <>
    <Navbar/>
      <div className=" max-w-7xl mx-auto "> 
        <Hero/>
      </div>
      <Footer/>
    </>
  );
}
