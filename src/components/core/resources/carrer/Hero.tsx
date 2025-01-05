import { WobbleCardDemo } from '@/components/common/WoobleCard'
import AnimatedGradientText from '@/components/ui/animated-gradient-text'
import GradualSpacing from '@/components/ui/gradual-spacing'
import ShimmerButton from '@/components/ui/shimmer-button'
import React from 'react'

const CarrerHero = () => {
  return (
   <>
   
   <div className="py-24 mb-4 flex flex-col justify-center items-center gap-6">
                    <AnimatedGradientText children={'🎉A small marketting line or a good starting line'} className={' text-center text-black dark:text-white'} />

                    <GradualSpacing text="Help Business to Grow rapidaly without " className="text-5xl text-black dark:text-white" />
                    <GradualSpacing text="having an redudnacy of communication gap" className="text-5xl text-black dark:text-white" />

                    <ShimmerButton shimmerColor="#f76716" children="See All Opening" className='text-white dark:text-white' />
                </div>
                <WobbleCardDemo />
   </>
  )
}

export default CarrerHero