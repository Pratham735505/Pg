"use client";
import React from "react";
import { motion } from "framer-motion";

const blobs = [
  { className: "top-[-10%] left-[-10%] w-96 h-96 bg-purple-700 opacity-40" },
  { className: "bottom-[-10%] right-[-10%] w-96 h-96 bg-fuchsia-700 opacity-30" },
  { className: "top-[30%] right-[10%] w-72 h-72 bg-purple-500 opacity-20" },
];

const BackgroundFX = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    {blobs.map((blob, i) => (
      <motion.div
        key={i}
        className={`absolute rounded-full filter blur-3xl ${blob.className}`}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 20 * (i % 2 === 0 ? 1 : -1), 0],
          y: [0, 20 * (i % 2 === 1 ? 1 : -1), 0],
        }}
        transition={{
          duration: 10 + i * 2,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
    ))}
    <div className="absolute inset-0 bg-black" />
  </div>
);

export default BackgroundFX; 