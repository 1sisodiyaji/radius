'use client';

import Link from 'next/link';
import React from 'react'; 
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-bgLight shadow-md dark:bg-bgDark text-black dark:text-white py-12">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 px-6">

                <div>
                    <h3 className="text-2xl font-bold">Radius</h3>
                    <p className="mt-2 text-sm">
                    RADIUS is cloud based omnichannel interaction system
                    that is powerful, intelligent, secure, and easy to use.
                    </p>
                    <button className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-900 text-orange-600 font-medium rounded-md dark:hover:bg-gray-200">
                        Request A Demo
                    </button>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-2">Why Radius</h4>
                    <ul className="space-y-1">
                        <li className='hover:underline hover:text-orange-400'><Link href={'/why-radius/overview'}>Overview</Link></li>
                        <li className='hover:underline hover:text-orange-400'><Link href={'/why-radius/capabilities'}>Capabilities</Link></li>
                        <li className='hover:underline hover:text-orange-400'><Link href={'/why-radius/industry'}>Industry</Link></li>
                        <li className='hover:underline hover:text-orange-400'><Link href={'/why-radius/technology'}>Technology</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-2">Offerings</h4>
                    <ul className="space-y-1">
                    <li className='hover:underline hover:text-orange-400'><Link href={'/offering/products'}>Products</Link></li>
                    <li className='hover:underline hover:text-orange-400'><Link href={'/offering/support'}>Support</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-2">Resources</h4>
                    <ul className="space-y-1">
                    <li className='hover:underline hover:text-orange-400'><Link href={'/resources/blogs'}>Blogs</Link></li>
                    <li className='hover:underline hover:text-orange-400'><Link href={'/resources/carrer'}>Carrer</Link></li>
                    <li className='hover:underline hover:text-orange-400'><Link href={'/resources/Features'}>Features</Link></li>
                    <li className='hover:underline hover:text-orange-400'><Link href={'/resources/customer-stories'}>Customer Stories</Link></li>
                    </ul>
                </div>

                
            </div>
            <div className=" mt-8 flex flex-col md:flex-row items-center justify-between px-6">
                <p>Copyright © 2024 RADIUS. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <Link href="#" className="text-white hover:text-gray-300"><Facebook size={20} /></Link>
                    <Link href="#" className="text-white hover:text-gray-300"><Instagram size={20} /></Link>
                    <Link href="#" className="text-white hover:text-gray-300"><Linkedin size={20} /></Link>
                    <Link href="#" className="text-white hover:text-gray-300"> <Twitter size={20} /></Link>
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <Link href="/terms-of-use" className="hover:underline hover:text-orange-400">Terms Of Us</Link>
                    <Link href="/privacy-policy" className="hover:underline hover:text-orange-400">Privacy Policy</Link> 
                </div>
            </div>
        </footer>
    );
};

export default Footer;
