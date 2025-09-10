"use client";

import React, { useEffect, useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { Bebas_Neue} from "next/font/google";
const b = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const Transition = () => {
  const { scrollYProgress } = useViewportScroll();
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // move text from right to left
  const xMove = useTransform(scrollYProgress, [0, 1], [windowWidth+100, -windowWidth]);
  const yMove = useTransform(scrollYProgress, [0, 1], [windowHeight, 0]);

  return (
    <div className={`${b.className} bg-gradient-to-b from-black to-gray-100 w-full h-screen flex overflow-hidden relative `}>
      <motion.div
        style={{ x: xMove, y: yMove }}
        className="absolute whitespace-nowrap text-black font-bold text-5xl md:text-[10rem]"
      >
        PROJECTS CREATED & WORKED ON 
      </motion.div>

      
    </div>
  );
};

export default Transition;
