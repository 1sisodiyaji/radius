import React from "react";
import { Cover } from "@/components/ui/cover";


interface CoverDesignProps {
  title: string;
  cover: string;
}
export function CoverDesign({title, cover }:CoverDesignProps) {
  return (
    <div>
      <h1 className="text-3xl  font-semibold  mx-auto  mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700">
        {title} <Cover>{cover}</Cover>
      </h1>
    </div>
  );
}
