import AnimatedGradientText from '@/components/ui/animated-gradient-text'
import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
import GradualSpacing from '@/components/ui/gradual-spacing'
import HeroVideoDialog from '@/components/ui/hero-video-dialog'
import MorphingText from '@/components/ui/morphing-text'
import Safari from '@/components/ui/safari'
import ShimmerButton from '@/components/ui/shimmer-button'
import { Spotlight } from '@/components/ui/Spotlight'
import Image from 'next/image'
import React from 'react'


const teamMembers = [
    {
        id: 1,
        name: "Alice Johnson",
        designation: "Product Manager",
        image: "https://via.placeholder.com/100?text=AJ",
    },
    {
        id: 2,
        name: "Bob Smith",
        designation: "Lead Developer",
        image: "https://via.placeholder.com/100?text=BS",
    },
    {
        id: 3,
        name: "Carol Davis",
        designation: "UI/UX Designer",
        image: "https://via.placeholder.com/100?text=CD",
    },
];



const Hero = () => {
    return (
        <>

            <Spotlight fill="#F76716" />
            <div className="pt-[10vh] mb-4">
                <AnimatedGradientText children={'🎉A small marketting line or a good starting line'} className={' text-center text-black dark:text-white'} />

            </div>

            <div className="flex flex-col justify-center items-center mb-12 space-y-6">
                <GradualSpacing text="An Omnichannel Interaction System that is" className="text-5xl text-black dark:text-white" />
                <MorphingText texts={["easy-to-use", "secure", "efficient"]} className="text-xl text-orange-500" />

                <div className="flex justify-center items-center space-x-6">
                    <ShimmerButton shimmerColor="#f76716" children="Request a Customize Demo" className='text-white dark:text-white' />
                    <div className="flex">
                        <AnimatedTooltip items={teamMembers} />
                    </div>

                </div>

            </div>
            <Safari url="https://radius-ois.ai" imageSrc="https://res.cloudinary.com/dvgs9khxj/image/upload/v1735803921/Artboard-1_1_vj0yxp.webp" className={'mx-auto rounded-xl shadow-orange-glow z-[25]'} />

            <div className="my-12 relative overflow-hidden w-full ">
                <div className="flex justify-evenly items-center animate-scroll space-x-6">
                    <Image src={'https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027209/Vedantu_dt6e42.png'} width={100} height={100} alt='company' className='w-32 h-12 bg-gray-100 dark:bg-gray-700 p-2 rounded-xl shadow-sm' />
                    <Image src={'https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027209/STARTEK_u2lwuv.png'} width={100} height={100} alt='company' className='w-32 h-12 bg-gray-100 dark:bg-gray-700 p-2 rounded-xl shadow-sm' />
                    <Image src={'https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027208/Mindtree_yuqczd.png'} width={100} height={100} alt='company' className='w-32 h-12 bg-gray-100 dark:bg-gray-700 p-2 rounded-xl shadow-sm' />
                    <Image src={'https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027207/idsnext_g1chjl.png'} width={100} height={100} alt='company' className='w-32 h-12 bg-gray-100 dark:bg-gray-700 p-2 rounded-xl shadow-sm' />
                    <Image src={'https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027207/cytecare-hospitals-bangalore-656980d6cf24f_yzagjw.jpg'} width={100} height={100} alt='company' className='w-32 h-12 bg-gray-100 dark:bg-gray-700 p-2 rounded-xl shadow-sm' />
                    <Image src={'https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027207/Hcl_v5prhg.png'} width={100} height={100} alt='company' className='w-32 h-12 bg-gray-100 dark:bg-gray-700 p-2 rounded-xl shadow-sm' />
                    <Image src={'https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027206/Botree_fglvkf.png'} width={100} height={100} alt='company' className='w-32 h-12 bg-gray-100 dark:bg-gray-700 p-2 rounded-xl shadow-sm' />
                    <Image src={'https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027207/HCIL_ybtnih.png'} width={100} height={100} alt='company' className='w-32 h-12 bg-gray-100 dark:bg-gray-700 p-2 rounded-xl shadow-sm' />
                    <Image src={'https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027207/cognizant_uonuth.png'} width={100} height={100} alt='company' className='w-32 h-12 bg-gray-100 dark:bg-gray-700 p-2 rounded-xl shadow-sm' />
                    <Image src={'https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027206/Fis_wkemvd.png'} width={100} height={100} alt='company' className='w-32 h-12 bg-gray-100 dark:bg-gray-700 p-2 rounded-xl shadow-sm' />
                    <Image src={'https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027205/nama-logo_lb4mwz.png'} width={100} height={100} alt='company' className='w-32 h-12 bg-gray-100 dark:bg-gray-700 p-2 rounded-xl shadow-sm' />
                </div>
            </div>
        </>
    )
}

export default Hero