"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const careerData = [
  {
    year: "2022-2025",
    title: "BCA Graduate",
    company: "National Post Graduate",
    location: "Lucknow, Uttar Pradesh",
    description:
      "Learned programming languages like C, C++, C#, python, Java and did DSA. Learnt skills like full stack web development in the process",
      website: "",
  },
  {
    year: "June 2025",
    title: "Web Developer",
    company: "Harmya",
    location: "Lucknow, India",
    description:
      "Worked as a web developer, gaining hands-on experience with frontend technologies and backend techs.",
      website: "https://harmya.vercel.app/",
  },
  {
    year: "2025",
    title: "Freelance",
    company: "self",
    location: "Lucknow, India",
    description:
      "Open to develop project you require",
      website: "",
  },
  
];

export default function Career() {
  return (
    <div className="bg-black min-h-screen w-full relative overflow-hidden p-4" id="career">
      {/* Header */}
     {/* Header */}
<div className="text-center py-10">
  <motion.h1
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.5 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="text-5xl font-bold text-white p-4"
  >
    JOURNEY
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.5 }}
    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    className="text-xl text-neutral-300"
  >
    A journey through professional career.
  </motion.p>
</div>

      {/* Timeline container */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-neutral-700 h-full" />

        {/* Timeline items */}
        <div className="space-y-20 relative z-10">
          {careerData.map((item, index) => {
            const ref = useRef(null);
            const inView = useInView(ref, { amount: 0.3, once: false });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={
                  inView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }
                }
                transition={{ duration: 0.6 }}
                className={`flex w-full ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Dot & Year on line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                  <div className="w-6 h-6 bg-white rounded-full border-4 border-neutral-700 shadow-lg" />
                  <span className="text-white text-sm font-semibold mt-2">
                    {item.year}
                  </span>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`bg-neutral-900 text-white shadow-lg rounded-lg p-6 cursor-pointer 
                    relative mt-12 md:mt-0
                    w-64 sm:w-80 md:w-[28rem] 
                    ${index % 2 === 0 ? "ml-10 md:ml-16" : "mr-10 md:mr-16"}`}
                >
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                 <a href= {`${item.website}`} > <p className="text-sm text-indigo-400">{item.company}</p></a>
                  <p className="text-sm text-neutral-400">{item.location}</p>
                  <p className="mt-2 text-neutral-300">{item.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
