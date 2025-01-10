import DotPattern from "@/components/ui/dot-pattern";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import ShimmerButton from "@/components/ui/shimmer-button";

const WhyRadius: React.FC = () => {
    return (
        <>
            <div>
                <div className="text-center mb-8">
                    <h1 className="uppercase text-xl text-orange-500 text-center mb-4">WHY RADIUS ?</h1>
                    <h2 className='md:text-4xl capitalize font-semibold mb-4'>The powerful way to handle end-to-end customer journeys</h2>
                </div>

                <div className="flex md:flex-row flex-col items-stretch justify-between gap-4">
                    <div className="md:w-2/3 w-full flex flex-col justify-between items-stretch gap-4">

                        <div className="flex md:flex-row flex-col justify-between items-stretch gap-2">
                            <div className="min-h-72 border p-4 rounded-md relative  group transition-transform transform hover:shadow-[0_0_1px_1px_rgba(255,165,0,0.5)] hover:cursor-grab bg-bgLight dark:bg-bgDark">
                                <h2 className="text-2xl font-semibold mb-4">Scalable & Future Ready</h2>
                                <p className="text-gray-400 text-sm mb-8">Built on microservices, it scales to handle tenants and their operational loads seamlessly.</p>
                                <Image src={'https://radius-ois.ai/wp-content/uploads/2023/10/stor3.png'} width={1000} height={1000} alt="Integration Capabilities" className="w-72 h-40 absolute right-0 bottom-0 transition-transform transform group-hover:scale-95" />
                            </div>

                            <div className="min-h-72 border p-4 rounded-md relative group transition-transform transform hover:shadow-[0_0_1px_1px_rgba(255,165,0,0.5)] hover:cursor-grab bg-bgLight dark:bg-bgDark">
                                <h2 className="text-2xl font-semibold mb-4">Provider Agnostic</h2>
                                <p className="text-gray-400 text-sm mb-4">Provides agility, scalability, and robustness across diverse cloud platforms.</p>
                                <Image src={'https://radius-ois.ai/wp-content/uploads/2023/10/CLOUD.png'} width={1000} height={1000} alt="Integration Capabilities" className="w-72 h-40 absolute right-0 bottom-0 transition-transform transform group-hover:scale-95" />
                            </div>
                        </div>

                        <div className="relative min-h-40 flex md:flex-row flex-col justify-between items-center p-3">
                            <DotPattern className='z-0' />
                            <div className="relative z-10 flex  flex-col  justify-between w-full items-center">
                                <h1 className="font-semibold text-xl text-center">Seamless Integrations for a seamless experience!</h1>
                                <Link href={'/meeting'}>  <ShimmerButton shimmerColor="#f76716" text="Request a Customize Demo" className='text-white dark:text-white text-[10px] md:text-sm mt-4' /> </Link>
                            </div>
                        </div>

                        <div className="min-h-40 border p-4 rounded-md flex flex-col justify-between items-stretch">
                            <h2 className="text-2xl font-semibold mb-4">Powering 100+ Businesses around the world</h2>
                            <div className="relative overflow-hidden w-full ">
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
                            <div className="flex justify-end items-center mt-4">  <button className="px-4 py-2 rounded-md border border-orange-400">Explore More</button> </div>
                        </div>

                    </div>
                    <div className="md:w-1/3 w-full flex flex-col justify-between items-stretch gap-4">
                        <div className="min-h-72 h-full border p-4 rounded-md relative group transition-transform transform hover:shadow-[0_0_1px_1px_rgba(255,165,0,0.5)] hover:cursor-grab bg-bgLight dark:bg-bgDark">
                            <h2 className="text-2xl font-semibold mb-4">Data Isolation</h2>
                            <p className="text-gray-400 text-sm mb-4">Ensure tenant data and operational isolation while adhering to industry security standards.</p>
                            <Image src={'https://radius-ois.ai/wp-content/uploads/2023/10/stor1.png'} width={1000} height={1000} alt="Integration Capabilities" className="w-72 h-40 absolute right-0 bottom-0 transition-transform transform group-hover:scale-95" />
                        </div>
                        <div className="min-h-72 h-full border p-4 rounded-md relative group transition-transform transform hover:shadow-[0_0_1px_1px_rgba(255,165,0,0.5)] hover:cursor-grab bg-bgLight dark:bg-bgDark">
                            <h2 className="text-2xl font-semibold mb-4">Integration Capabilities</h2>
                            <p className="text-gray-400 text-sm mb-4">Integrates with enterprise systems and supports custom applications on the RADIUS platform.</p>
                            <Image src={'https://radius-ois.ai/wp-content/uploads/2023/10/stor.png'} width={1000} height={1000} alt="Integration Capabilities" className="w-72 h-40 absolute right-0 bottom-0 transition-transform transform group-hover:scale-95" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyRadius;
