"use client"
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import React, { useEffect, useState } from 'react';

const Meeting = () => {
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const iframe = document.querySelector('iframe') as HTMLIFrameElement;
      if (iframe && iframe.contentWindow) {
        const iframeUrl = iframe.contentWindow.location.href;
        console.log(iframeUrl);
        if (iframeUrl.includes('/invitees')) {
          setBookingSuccess(true); 
          clearInterval(interval);
        }
      }
    }, 1000);
 
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Navbar/>
    <div style={{ width: '100vw', height: '100vh', marginTop: 80, padding: 0, overflow: 'hidden' }}>
      {!bookingSuccess ? (
        <iframe
          src="https://calendly.com/radius-ois/radius-ois-product-demonstration"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          allowFullScreen
        ></iframe>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <h1>Booking Successful! Thank you.</h1>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default Meeting;
