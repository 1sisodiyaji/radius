import React from "react";
import { Meteors } from "../ui/meteors";

interface Card{
    title: string;
    text: string;
}
export function MeterorCard({title,text}:Card) {
  return (
    <div className="">
      <div className=" w-full relative max-w-xs h-96">
        <div className="absolute inset-0 h-full w-full  transform scale-[0.80]  rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        

          <h1 className="font-bold text-xl text-black dark:text-white mb-4 relative z-50">
           {title}
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            {text}
          </p>
  
          <Meteors number={25} />
        </div>
      </div>
    </div>
  );
}
