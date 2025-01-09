import CustomSlider from '@/components/common/Slider'
import DotPattern from '@/components/ui/dot-pattern'
import ShimmerButton from '@/components/ui/shimmer-button'
import Link from 'next/link'
import React from 'react'

const ChaeckRadiusInAction = () => {
    return (
        <div className='space-y-6'>
            <div className="text-center mb-8">
                    <h1 className="uppercase text-xl text-orange-500 text-center ">Action</h1>
                    <h2 className='md:text-4xl capitalize font-semibold'>Check RADIUS-OIS in Action</h2>
                </div>
            <div className="flex md:flex-row flex-col gap-2 justify-between items-stretch md:space-x-4">
                <div className="flex flex-col gap-2">
                    <div className="block md:max-w-sm min-h-72 space-y-10 p-6 border border-gray-200 rounded-lg hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer">
                        <h1 className="font-semibold text-2xl text-center">Multi Tenant <br /> Security</h1>
                        <p className="font-normal text-md">Relax with trusted security standards, encryption, logical isolation, and experts keeping your data secure 24/7.</p>
                    </div>

                    <div className="block md:max-w-sm min-h-72 space-y-10 p-6 border border-gray-200 rounded-lg hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer">
                        <h1 className="font-semibold text-2xl text-center">Digital Customer Experience</h1>
                        <p className="font-normal text-md">Enable agents to effortlessly track customer conversations across WhatsApp, Facebook Messenger within a unified workspace, making their job more efficient.</p>
                    </div>
                </div>

                <div className='flex flex-col items-stretch h-full gap-2 justify-between'>
                    <CustomSlider
                        url={[
                            'https://radius-ois.ai/wp-content/uploads/2023/10/omni-platform.jpg',
                            'https://radius-ois.ai/wp-content/uploads/2023/11/dashboard-two.jpg'
                        ]}
                        maxSlides={2} />
                    <div className="relative">
                        <DotPattern className='z-0' />
                        <div className="relative z-10">
                            <div className="flex md:flex-row flex-col justify-between items-center   p-3  cursor-pointer">
                                <h1 className="font-semibold text-xl text-center">Seamless Integrations for a seamless experience!</h1>
                                <Link href={'/meeting'}>  <ShimmerButton shimmerColor="#f76716" text="Request a Customize Demo" className='text-white dark:text-white text-[10px] md:text-sm mt-4' /> </Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ChaeckRadiusInAction