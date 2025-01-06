'use client';

import Link from 'next/link';
import {  ArrowRight } from 'lucide-react';
import Image from 'next/image';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 px-6 bg-gray-50 dark:bg-gray-950 min-h-screen">
      {/* Image */}
      <div className="mb-6">
        <Image
          src="https://res.cloudinary.com/dvgs9khxj/image/upload/v1735881010/image_59-removebg-preview_vbfjql.png"
          alt="Page Not Found"
          width={500}
          height={500}
          priority
          className="w-96 mx-auto"
        />
      </div>
 
      <h1 className="text-5xl font-bold text-gray-600 dark:text-gray-500">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-500 mt-2">Page not found</h2>
      <p className="text-gray-600 dark:text-gray-500 mt-4 max-w-lg">
        Sorry about that, this page is being a little shy today. Get back to the
        action at any of the links below.
      </p>
 
      <div className="grid md:grid-cols-3 gap-6 mt-8 w-full max-w-7xl">
        {/* Feature 1 */}
        <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition text-gray-600 dark:text-gray-500">
          <h3 className="font-semibold text-lg mb-2">Features</h3>
          <p className="text-sm text-gray-500">
            Hey you can check out our features for new updates that will help
            you in future.
          </p>
          <Link
            href="/features"
            className="text-orange-500 mt-4 inline-flex items-center hover:underline"
          >
            Explore More <ArrowRight className="ml-1" size={16} />
          </Link>
        </div>

        {/* Feature 2 */}
        <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition text-gray-600 dark:text-gray-500">
          <h3 className="font-semibold text-lg mb-2">Book a Meeting</h3>
          <p className="text-sm text-gray-500">
            You can check out our features for new updates that will help you in
            future.
          </p>
          <Link
            href="/book-meeting"
            className="text-orange-500 mt-4 inline-flex items-center hover:underline"
          >
            Request a Demo <ArrowRight className="ml-1" size={16} />
          </Link>
        </div>

        {/* Feature 3 */}
        <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition text-gray-600 dark:text-gray-500">
          <h3 className="font-semibold text-lg mb-2">Products</h3>
          <p className="text-sm text-gray-500">
            Check out our products for updates and innovation.
          </p>
          <Link
            href="/products"
            className="text-orange-500 mt-4 inline-flex items-center hover:underline"
          >
            See Products <ArrowRight className="ml-1" size={16} />
          </Link>
        </div>
      </div>
      </div>
  );
};

export default NotFoundPage;
