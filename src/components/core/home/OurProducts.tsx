import { AnimatedBeamDemo } from '@/components/common/Coonecting' 
import React from 'react'
 

const OurProducts = () => {
    return (
        <div>
            <h1 className="uppercase text-xl text-orange-500 text-center mb-4">Our Product</h1>

            <div className="flex md:flex-row flex-col justify-center items-center w-full">  
                     <AnimatedBeamDemo />
            </div>
        </div>
    )
}

export default OurProducts



