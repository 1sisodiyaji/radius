import CustomSlider from '@/components/common/Slider'
import ShimmerButton from '@/components/ui/shimmer-button'
import React from 'react'

const OurEthics = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center md:my-24 space-y-4">
                        <h1 className='uppercase text-xl text-orange-500'>OUR ETHICS</h1>
                        <h2 className='text-4xl capitalize font-semibold'>Our Working Principle </h2>
                        <div className='flex gap-6  justify-center items-center'>
                            <div className="w-1/2 my-12">
                                <CustomSlider url={[
                                    "https://res.cloudinary.com/dvgs9khxj/image/upload/v1732024862/Group_1_gvodqh.png",
                                    "https://res.cloudinary.com/dvgs9khxj/image/upload/v1732024862/Group_1_gvodqh.png",
                                    "https://res.cloudinary.com/dvgs9khxj/image/upload/v1732024862/Group_1_gvodqh.png",
                                    "https://res.cloudinary.com/dvgs9khxj/image/upload/v1732024862/Group_1_gvodqh.png",
                                    "https://res.cloudinary.com/dvgs9khxj/image/upload/v1732024862/Group_1_gvodqh.png"
                                ]}
                                    maxSlides={5}
                                    autoPlayInterval={3000}
                                />
                            </div>
                            <div className='w-1/2 my-12 flex flex-col items-start justify-center gap-6'>
                                <h1>Your Partner In The Digital Era Innovation</h1>
                                <p className='text-xl'>
                                    At RADIUS, we believe in the power of collaboration and innovation to create a more fulfilling and empowering work environment. Our ethics guide us to strive for excellence, fairness, and transparency in our workplace. We prioritize the well-being of our employees, and we are committed to building a culture of trust and respect. We are proud of our values and are committed to fostering a culture of collaboration and innovation.
                                </p>
                                <ShimmerButton shimmerColor="#f76716" children="Get in Touch" className='p-2 text-white dark:text-white' />
    
                            </div>
                        </div>
                    </div>
    
    </>
  )
}

export default OurEthics