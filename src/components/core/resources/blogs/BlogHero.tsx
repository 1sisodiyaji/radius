import React from 'react'
import { WobbleCardDemo } from '@/components/common/WoobleCard'
import AnimatedGradientText from '@/components/ui/animated-gradient-text'
import GradualSpacing from '@/components/ui/gradual-spacing'
import ShimmerButton from '@/components/ui/shimmer-button'

const BlogHero = () => {
  return (
    <div>
        <div className="py-24 mb-4 flex flex-col justify-center items-center gap-6">
        <AnimatedGradientText text={'📚 Welcome to Our Blog!'} className={'text-center text-black dark:text-white'} />

        <GradualSpacing text="Discover insights, tips, and stories" className="text-5xl text-black dark:text-white" />
        <GradualSpacing text="to inspire your journey in business and life." className="text-5xl text-black dark:text-white" />

        <ShimmerButton shimmerColor="#f76716" text="Explore Our Latest Posts" className='text-white dark:text-white' />
      </div>
      <WobbleCardDemo />
    </div>
  )
}

export default BlogHero
