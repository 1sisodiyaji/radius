"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam"; 
import Image from "next/image";


const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-20 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});
 
Circle.displayName = "Circle";
 
export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
 
  return (
    <div
      className="relative h-[450] flex w-full items-center justify-center overflow-hidden rounded-lg"
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
          <Image src={'/play-logo.svg'} width={1000} height={1000} alt="company logo" priority/>
          </Circle>
          <Circle ref={div5Ref}>
          <Image src={'/realm-real-logo.svg'} width={1000} height={1000} alt="company logo" priority className="w-80 h-80"/>
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
          <Image src={'/axis.svg'} width={1000} height={1000} alt="company logo" priority/>
          </Circle>
          <Circle ref={div4Ref} className="size-16">
          <Image src={'/radius.svg'} width={1000} height={1000} alt="company logo" priority/>
          </Circle> 
          <div  className="size-16"></div> 
         
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
          <Image src={'/optimo-logo.svg'} width={1000} height={1000} alt="company logo" priority/>
          </Circle>
          <Circle ref={div7Ref}>
          <Image src={'/atomos-svg.svg'} width={1000} height={1000} alt="company logo" priority/>
          </Circle>
        </div>
      </div>
 
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}
 
 