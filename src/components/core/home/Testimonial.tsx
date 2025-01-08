"use client";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
    return (
        <div className="bg-bgLight dark:bg-bgDark p-8 rounded-3xl max-w-6xl mx-auto">

            <div className="text-center mb-8">
                <h1 className="uppercase text-xl text-orange-500 text-center ">Testimonial</h1>
            </div>

            <div className="grid grid-cols-12 gap-8 items-center">
                <div
                    className="col-span-12 md:col-span-5 relative bg-cover bg-center bg-[url('https://res.cloudinary.com/dbqq41bpc/image/upload/v1735940379/Sign-up2_yjchpg.png')] rounded-2xl min-h-[24rem]"
                >
                    <div className="absolute top-0 left-0">
                        <h1 className="text-md font-semibold text-gray-800  textwrap max-w-48 bg-white px-2 py-1">
                            Hear From Our Satisfied Clients Have To Say <span>❤️</span>
                        </h1>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg text-lg font-semibold">
                        10.9K+
                    </div>
                </div>

                <div className="col-span-12 md:col-span-7 space-y-6">

                    <div className="bg-cover bg-center p-6 rounded-2xl relative shadow-lg  mx-auto"
                    style={{backgroundImage:'https://res.cloudinary.com/dbqq41bpc/image/upload/v1736330315/Rectangle_39510_q9cib6.png'}}
                    >
                        <div className="absolute top-4 left-4 text-gray-600 text-sm">⭐ ⭐ ⭐ ⭐ ⭐</div>
                        <p className="text-sm text-gray-800 mt-5">
                            "Their team took our wellness brand and elevated it to new heights
                            with their thoughtful designs and strategic branding. They’ve helped us
                            create a cohesive and compelling brand identity."
                        </p>
                        <div className="flex items-center mt-4">
                            <Image
                                src="https://via.placeholder.com/40"
                                alt="User"
                                width={500}
                                height={500}
                                className="w-10 h-10 rounded-full object-cover mr-3"
                            />
                            <div>
                                <h4 className="font-semibold text-gray-800">Mark Ramirez</h4>
                                <p className="text-xs text-gray-500">Owner of Luna's Inc</p>
                            </div>
                        </div>
                        <div className="absolute bottom-4 right-4">
                            <button
                                className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center transform -rotate-45 transition-transform duration-300 hover:rotate-0"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-4 h-4 text-gray-800"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
 
                    <div className="bg-white p-6 rounded-2xl relative mx-auto">
                        <div className="absolute top-4 left-4 text-gray-600 text-sm">⭐ ⭐ ⭐ ⭐ ⭐</div>
                        <p className="text-sm text-gray-800 mt-5">
                            "Their team took our wellness brand and elevated it to new heights
                            with their thoughtful designs and strategic branding. They’ve helped us
                            create a cohesive and compelling brand identity."
                        </p>
                        <div className="flex items-center mt-4">
                            <Image
                                src="https://via.placeholder.com/40"
                                alt="User"
                                width={500}
                                height={500}
                                className="w-10 h-10 rounded-full object-cover mr-3"
                            />
                            <div>
                                <h4 className="font-semibold text-gray-800">Mark Ramirez</h4>
                                <p className="text-xs text-gray-500">Owner of Luna's Inc</p>
                            </div>
                        </div>
                        <div className="absolute bottom-4 right-4">
                            <button
                                className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center transform -rotate-45 transition-transform duration-300 hover:rotate-0"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-4 h-4 text-gray-800"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center flex justify-between items-center bg-orange-100 rounded-xl mt-8 px-6 py-2">
                <h2 className="text-xl font-semibold text-gray-800">
                    Are You The Next One?
                </h2>
                <button className="bg-orange-500 text-white text-sm px-2 py-1 rounded-full shadow-lg hover:bg-orange-600">
                    Join Now
                </button>
            </div>
        </div>
    );
};

export default Testimonials;

