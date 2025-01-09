import { AnimatedBeamMultipleOutputDemo } from '@/components/common/Coonecting'
import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
import ShimmerButton from '@/components/ui/shimmer-button'
import Link from 'next/link'
import React from 'react'

 

const clients = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image: "https://via.placeholder.com/100?text=AJ", 
      },
      {
        id: 2,
        name: "Jane Doe",
        designation: "Product Manager",
        image: "https://via.placeholder.com/100?text=AJ",
      },
      {
        id: 3,
        name: "Alice Smith",
        designation: "UI/UX Designer",
        image: "https://via.placeholder.com/100?text=AJ",
      },
      {
        id: 4,
        name: "Bob Johnson",
        designation: "Data Scientist",
        image: "https://via.placeholder.com/100?text=AJ",
      }
  ];


const OurProducts = () => {
    return (
        <div>
            <h1 className="uppercase text-xl text-orange-500 text-center">Our Product</h1>

            <div className="flex justify-center items-center w-full">
                <div className="flex flex-col justify-center items-stretch md:w-1/2 w-full"> 
                    <section>
                        <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none">We invest in the world’s potential</h1>
                        <p className="mb-8 text-lg font-normal  ">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                        <div className="flex justify-start items-center gap-4">
                            <Link href={'/meeting'}>  <ShimmerButton shimmerColor="#f76716" text="Request a Customize Demo" className='text-white dark:text-white' /> </Link>
                            <AnimatedTooltip items={clients}/> 
                        </div>

                        
                    </section> 
                </div>
                <div className="flex justify-center items-center md:w-1/2 w-full">
                    <AnimatedBeamMultipleOutputDemo />
                </div>
            </div>
        </div>
    )
}

export default OurProducts



