import { WobbleCardDemo } from '@/components/common/WoobleCard'
import AnimatedGradientText from '@/components/ui/animated-gradient-text'
import GradualSpacing from '@/components/ui/gradual-spacing'
import ShimmerButton from '@/components/ui/shimmer-button'
import React from 'react'

const CarrerHero = () => {
  return (
    <>

      <div className="py-24 mb-4 flex flex-col justify-center items-center gap-6">
        <AnimatedGradientText text={'🚀 Join Our Amazing Team!'} className={'text-center text-black dark:text-white'} />

        <GradualSpacing text="We’re looking for passionate individuals" className="text-5xl text-black dark:text-white" />
        <GradualSpacing text="to help drive innovation and make an impact." className="text-5xl text-black dark:text-white" />

        <ShimmerButton shimmerColor="#f76716" text="See All Openings" className='text-white dark:text-white' />
      </div>
      <WobbleCardDemo />
    </>
  )
}

export default CarrerHero
