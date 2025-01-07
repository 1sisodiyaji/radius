import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import React, { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode;
}

const OfferingLayout = ({ children }: LayoutProps) => {
  return (
    <div >
      <Navbar />
       <div className='min-h-screen md:py-20'> {children} </div>
      <Footer />
    </div>
  );
};

export default OfferingLayout;
