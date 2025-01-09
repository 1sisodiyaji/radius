import AnimatedGradientText from '@/components/ui/animated-gradient-text'
import GradualSpacing from '@/components/ui/gradual-spacing'
import ShimmerButton from '@/components/ui/shimmer-button'
import { Spotlight } from '@/components/ui/Spotlight'
import WordRotate from '@/components/ui/word-rotate'
import { LucideVideo } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <>
        <Spotlight fill="#F76716" />
            <div className='space-y-12'>
                
                <div className="pt-[10vh] mb-4"><AnimatedGradientText text={'🎉A small marketting line or a good starting line'} className={' text-center text-black dark:text-white'} /></div>

                <div className="flex flex-col justify-center items-center mb-12 space-y-6">
                    <GradualSpacing text="An Omnichannel Interaction System that is" className="md:text-5xl text-black dark:text-white" />
                    <WordRotate words={["easy-to-use", "secure", "efficient"]} className="md:text-5xl text-orange-500 bg-orange-100 dark:bg-orange-200  shadow-inner px-6 py-3 rounded-lg" />

                    <div className="flex justify-center items-center space-x-6">
                        <Link href={'/meeting'}>  <ShimmerButton shimmerColor="#f76716" text="Request a Customize Demo" className='text-white dark:text-white  text-[10px] md:text-sm' /> </Link>
                        <Link href={'/'}>  <button className='md:px-6 rounded-md md:py-3 px-4 py-2 border bg-bgLight dark:bg-bgDark border-gray-300 dark:border-gray-700  flex items-center gap-2 text-[10px] md:text-sm'><LucideVideo />   Watch Video</button></Link>
                    </div>

                </div>

                <div>
                    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[55vh] md:max-w-4xl">
                        <div className="rounded-lg overflow-hidden h-[156px] md:h-[55vh] bg-white dark:bg-gray-800">
                            <Image src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png" className="dark:hidden h-[156px] md:h-[55vh] w-full rounded-lg" alt="hero" width={500} height={500} />
                            <Image src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png" className="hidden dark:block h-[156px]  md:h-[55vh] w-full rounded-lg" alt="hero" width={500} height={500} />
                        </div>
                    </div>
                    <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-12 md:max-w-6xl">
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:h-8 md:w-32 bg-gray-800"></div>
                    </div>
                </div>

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
            </div>
        </>
    )
}

export default Hero