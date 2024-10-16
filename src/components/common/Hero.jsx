import React from 'react'
import { CoverDesign } from "@/components/common/CoverDesign";
import MovingBorder from "@/components/common/Movingborder";
import { ThreeDCard } from "@/components/common/ThreeDCard"

const Hero = () => {
  return (
    <section>
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
      <div className="mr-auto place-self-center lg:col-span-7">
        <CoverDesign title={'An Omnichannel Interaction System that is'} cover={'Intelligent , Secure , Easy-to-use'} />
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl"> Orchestrate intelligent customer interactions on the centralized cloud based platform </p>

        <a href="#" className="inline-flex items-center justify-center ">
          <MovingBorder text={'Request a Demo'} />
        </a>
        <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
          Watch Video
          <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
      </div>
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <ThreeDCard src={"https://radius-ois.ai/wp-content/uploads/2023/10/Artboard-1.jpg"} />
      </div>
    </div>
  </section>
  )
}

export default Hero