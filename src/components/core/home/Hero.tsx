import AnimatedGradientText from '@/components/ui/animated-gradient-text'
import GradualSpacing from '@/components/ui/gradual-spacing'
import Safari from '@/components/ui/safari'
import ShimmerButton from '@/components/ui/shimmer-button'
import WordRotate from '@/components/ui/word-rotate'
import { LucideVideo } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <>
            <div className='space-y-12 '>

                <div className="pt-[20vh] mb-4"><AnimatedGradientText text={'🎉A small marketting line or a good starting line'} className={' text-center text-black dark:text-white'} /></div>

                <div className="flex flex-col justify-center items-center mb-12 space-y-6">
                    <GradualSpacing text="An Omnichannel Interaction System that is" className="md:text-5xl text-black dark:text-white" />
                    <WordRotate words={["easy-to-use", "secure", "efficient"]} className="md:text-5xl text-orange-500" />

                    <div className="flex justify-center items-center space-x-6">
                        <Link href={'/meeting'}>  <ShimmerButton shimmerColor="#f76716" text="Request a Customize Demo" className='text-white dark:text-white  text-[10px] md:text-sm' /> </Link>
                        <Link href={'/'}>  <button className='md:px-6 rounded-3xl md:py-3 px-4 py-2 border bg-bgLight dark:bg-bgDark border-gray-300 dark:border-gray-700  flex items-center gap-2 text-[10px] md:text-sm'><LucideVideo />   Watch Video</button></Link>
                    </div>

                </div>
                <Safari url={'https://radius-ois.ai'} imageSrc={'https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png'} className='md:w-full w-96 h-auto mx-auto' />


                <div className="my-12 flex md:flex-row flex-col justify-center items-center">

                    <h5 className="text-xl font-semibold text-gray-800 dark:text-white ">
                        We Have More than 50+ Partners
                    </h5>

                    <div className="relative overflow-hidden w-full flex">
                        <div className="flex justify-evenly items-center animate-scroll space-x-6">
                            <Image src={'https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027209/Vedantu_dt6e42.png'} width={100} height={100} alt='company' className='w-32 h-12' />
                            <Image src={'https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027209/STARTEK_u2lwuv.png'} width={100} height={100} alt='company' className='w-32 h-12' />
                            <Image src={'https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027208/Mindtree_yuqczd.png'} width={100} height={100} alt='company' className='w-32 h-12' />
                            <Image src={'https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027207/idsnext_g1chjl.png'} width={100} height={100} alt='company' className='w-32 h-12' />
                            <Image src={'https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027207/cytecare-hospitals-bangalore-656980d6cf24f_yzagjw.jpg'} width={100} height={100} alt='company' className='w-32 h-12' />
                            <Image src={'https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027207/Hcl_v5prhg.png'} width={100} height={100} alt='company' className='w-32 h-12' />
                            <Image src={'https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027206/Botree_fglvkf.png'} width={100} height={100} alt='company' className='w-32 h-12' />
                            <Image src={'https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027207/HCIL_ybtnih.png'} width={100} height={100} alt='company' className='w-32 h-12' />
                            <Image src={'https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027207/cognizant_uonuth.png'} width={100} height={100} alt='company' className='w-32 h-12' />
                            <Image src={'https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027206/Fis_wkemvd.png'} width={100} height={100} alt='company' className='w-32 h-12' />
                            <Image src={'https://res.cloudinary.com/dvgs9khxj/image/upload/v1732027205/nama-logo_lb4mwz.png'} width={100} height={100} alt='company' className='w-32 h-12' />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero