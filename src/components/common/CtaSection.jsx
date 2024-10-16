import React from 'react'
import MovingBorder from './Movingborder'
import Image from 'next/image'

const CtaSection = () => {
    return (
        <>
            <section>
                <div className="grid max-w-7xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1
                            className="max-w-2xl mb-4 md:text-4xl  text-3xl font-extrabold leading-none tracking-tight">
                            Take a Tour of Cutting-Edge Cloud Contact
                            Center that Caters to All Industries
                        </h1>

                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
                            Transform your customer engagement strategy from multichannel to a cohesive omnichannel experience that spans Voice, Chat, Email, Video, Social Media, & more.
                        </p>

                        <div className="space-y-4 flex space-x-4">

                            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                                Watch Video
                                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>

                            <a href="" target="_blank" >
                                <MovingBorder text={'Request a Demo'} />
                            </a>

                        </div>
                    </div>

                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <Image src={'https://radius-ois.ai/wp-content/uploads/2023/10/online-business.png'} width={450} height={100} alt='Marketting image' />
                    </div>

                </div>
            </section>
        </>
    )
}

export default CtaSection