import Image from "next/image";
import React from "react";

const PhoneMockup = ({src}) => {
  return (
    <>
      <div> 
            <Image src={src} alt="Phone Mockup" className="hover:scale-105 cursor-move" width={150} height={650} />
      </div>
    </>
  );
};

export default PhoneMockup;
