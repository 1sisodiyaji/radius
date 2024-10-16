"use client";
import React from "react";
import { Button } from "../ui/moving-border";
  
const MovingBorder = ({text}) => {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-slate-900 text-white border-slate-800"
      >
        {text}
      </Button>
    </div>
  )
}

export default MovingBorder

  