"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function ThreeDCard({src}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1]  border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl  border  ">
          
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src= {src}
            height="1000"
            width="1000"
            className="h-full w-full object-cover rounded-xl group-hover/card:shadow-2xl"
            alt="thumbnail"
          />
        </CardItem> 
      </CardBody>
    </CardContainer>
  );
}
