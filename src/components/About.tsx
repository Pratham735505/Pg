"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeSlideLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1.2 } },
  exit: { x: -100, opacity: 0, transition: { duration: 1.2 } },
};

const fadeSlideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1.2 } },
  exit: { y: 50, opacity: 0, transition: { duration: 1.2 } },
};

const About = () => {
  return (
    <div id="about" className="min-h-screen w-full relative overflow-hidden flex flex-col items-center justify-center bg-black text-white px-6 md:px-16 py-12 md:py-0">
      {/* Container */}
      <div className="flex flex-col md:flex-row items-center justify-center h-full gap-12 md:gap-16">
        
        {/* Left Column / Heading */}
        <motion.div
          variants={fadeSlideLeft}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
          className="w-full md:w-1/3 flex justify-center md:justify-start text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide ">
            $whoami
          </h2>
        </motion.div>

        {/* Divider Line (only on desktop) */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.2 }}
          className="hidden md:block w-px self-stretch min-h-[250px] bg-gray-600 origin-top"
        ></motion.div>

        {/* Middle Column / About Text */}
        <motion.div
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
          className="w-full md:w-2/3 flex flex-col justify-center text-center md:text-left space-y-6"
        >
          <p className="text-lg md:text-2xl leading-relaxed text-gray-300 font-light">
            I’m a passionate developer who loves building sleek, interactive, 
            and user-friendly web applications. With experience in modern 
            frontend technologies and a constant desire to learn, I enjoy 
            turning ideas into real-world digital experiences.
          </p>
        </motion.div>
      </div>

      {/* Languages Section */}
      <motion.div
        variants={fadeSlideUp}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        className="pt-10 md:pt-12 flex flex-col items-center text-center"
      >
        <h3 className="text-4xl font-semibold mb-6">
          Tech I Know
        </h3>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-3 text-sm md:text-base text-gray-400"
        >
          {["JavaScript", "TypeScript", "Python", "C++", "Java","Mongodb","C#","C","Node.js","Sql","Express","React","Next.js","Numpy"].map(
            (lang, i) => (
              <motion.li
                key={lang}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: i * 0.15, duration: 0.8 },
                }}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 border border-gray-600 rounded-lg cursor-pointer"
              >
                {lang}
              </motion.li>
            )
          )}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default About;
