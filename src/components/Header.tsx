"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Poppins, Caveat,Lobster_Two , Bebas_Neue} from "next/font/google";

const lob = Lobster_Two({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const b = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
export default function Header() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  const handleMove = (x: number, y: number, rect: DOMRect) => {
    setMousePosition({
      x: x - rect.left,
      y: y - rect.top,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX, e.clientY, e.currentTarget.getBoundingClientRect());
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    if (touch) {
      handleMove(
        touch.clientX,
        touch.clientY,
        e.currentTarget.getBoundingClientRect()
      );
    }
  };

  return (
    <div
      className="h-screen w-full relative overflow-hidden flex flex-col"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Black overlay with circular transparent cursor */}
      <motion.div
        className="absolute inset-0 bg-[url('/images/bg2.png')] bg-center bg-no-repeat bg-black pointer-events-none"
        style={{
          WebkitMaskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, black 100%)`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, black 100%)`,
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
        }}
      />

      {/* Centered content */}
      <div className="h-full w-full flex flex-col items-center justify-center text-white z-10 relative">
       

        {/* Scroll to explore text */}
        <div className="absolute bottom-24 flex flex-col items-center animate-bounce">
          <span className="text-sm md:text-base uppercase tracking-widest font-semibold">
            Scroll to Explore
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mt-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Footer */}
<footer className={` ${b.className} gap-3 absolute bottom-4 left-0 right-0 flex items-center justify-between px-6 md:px-12 text-white`}>
  {/* Left text */}
  <div className={` text-sm md:text-3xl  font-semibold`}>
    JUST DOING IT
  </div>

  {/* Center text */}
  <div className="text-lg md:text-4xl font-bold text-center">
    Full Stack Developer
  </div>

  {/* Right text */}
  <div className="text-sm md:text-3xl font-semibold text-right flex flex-col md:flex-row md:items-center gap-1">
    <span>Stack</span>
    
  </div>
</footer>

    </div>
  );
}
