"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Devbot",
    description:
      `DevBot is a student-focused coding web app where the journey into programming begins with ease, support, and modern tools. Designed specifically for beginners, our MERN stack platform combines simplicity and functionality to help students take their first steps into the coding world with confidence.
Our mission at DevBot is to offer a space where new coders can access curated resources like tutorials, example code with voice explanations, and interactive quizzes. With dedicated bots — Help Bot for NPGC college-related info and Dev Bot for beginner-friendly code responses — the platform is tailored to meet students’ needs both academically and technically.`,
    screenshots: ["/images/dev1.png", "/images/devbot1.png","/images/devbot2.png"],
    tech: ["Mern", "Tailwind CSS", "Framer Motion", "AI","Gemini","Web Scraping"],
    github: "https://github.com/pratham735505/Devbot",
    website: "https://devbotnpgc.netlify.app",
  },
  {
    title: "LoanEase",
    description:
      `Developed a full-stack loan management application for friend using the MERN stack to streamline the loan application and approval process for both users and administrators.

Key Features:

Loan Application: Users can securely apply for loans through the platform.

Admin Dashboard: Administrators can approve/reject loan requests, verify documents, and track payment statuses.

Repayment Tracking: Admins can view borrowers who have missed their monthly payments.

Payment Integration: Implemented a Rupay payment gateway for seamless loan repayments.

Document Verification: File upload and validation handled via Multer.

Email Notifications: Automated email alerts are sent to users for every status update (application submitted, approved, rejected, payment reminders, etc.).`,
    screenshots: ["/images/loan1.png", "/images/loan2.png"],
    tech: ["Javasrcipt", "Node.js","React.js","Express.js","Mongodb","Tailwindcss","Multer","Nodemailer"],
    github: "https://github.com/pratham735505/loanapp",
    website: "https://loanappt.netlify.app/",
  },
  {title: "Hawkar",
    description:
      `Developed the frontend using react, tailwindcss and node,js for the startup`,
    screenshots: ["/images/hawkar1.png","/images/hawkar2.png","/images/hawkar3.png",],
    tech: [ "Tailwind CSS", "React","Node.js"],
    github: "https://github.com/pratham735505/hawkar",
    website: "https://hawkar.in",
  },

    {title: "Atlibrary",
    description:
      `Developed this website using mern stack for a friend's personal use`,
    screenshots: ["/images/at.png",],
    tech: [ "Tailwind CSS", "React","Node.js", "Mongodb"],
    github: "https://github.com/pratham735505/Library",
    website: "",
  },

  
    {title: "Harmya",
    description:
      `Created this website as a developer at startup called harmya on the basis of design provided to me. Edited few pages of this website, Added feature of live streaming using Zego cloud and live command during livestream using websocket`,
    screenshots: ["/images/harmya1.png","/images/harmya2.png","/images/harmya3.png",],
    tech: [ "Tailwind CSS", "React","Nextjs", "Mongodb","Typescript"],
    github: "https://github.com/pratham735505/harmya",
    website: "https://harmya.vercel.app/",
  },
  
    {title: "Other projects",
    description:
      `Created some projects using other techs too, do check out on my github. Below are the techs which I have used for those projects`,
    screenshots: ["/images/github.png",],
    tech: [ "ADO.net", "Tkinter","Html", "Css","Python"],
    github: "https://github.com/pratham735505/",
    website: "https://github.com/pratham735505/",
  },
  
];

export default function Projects() {
  return (
    <div id="projects" className="w-full bg-gradient-to-b from-gray-100 to-white text-black">
      {projects.map((project, index) => (
        <FullScreenProject key={index} project={project} />
      ))}
    </div>
  );
}

function FullScreenProject({ project }: { project: any }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % project.screenshots.length);
  const prevSlide = () =>
    setCurrent((prev) =>
      prev === 0 ? project.screenshots.length - 1 : prev - 1
    );

  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py:8 md:py-0 relative overflow-hidden">
      {/* Left side - Info */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/3 z-20 flex flex-col justify-center space-y-3 md:space-y-6 mb-4 md:mb-0 "
      >
        <h2 className="md:py-2 py-2 text-5xl font-extrabold tracking-tight bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent drop-shadow-lg">
          {project.title}
        </h2>
           <div className="max-h-48 md:max-h-none overflow-y-auto md:overflow-visible">
          <p className="text-sm md:text-lg text-gray-500 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition transform hover:scale-110"
            >
              <FaGithub size={22} />
            </a>
          )}
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition transform hover:scale-110"
            >
              <FaExternalLinkAlt size={20} />
            </a>
          )}
        </div>
      </motion.div>

      {/* Right side - Screenshots */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-[-4rem] md:mt-0  md:w-2/3 relative flex items-center justify-center z-10"
      >
        <div className="relative md:w-full w-[48vh] h-[27vh] md:h-[500px] overflow-hidden rounded-xl shadow-2xl group">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.screenshots[current]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={project.screenshots[current]}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay gradient for cinematic look */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition transform hover:scale-110"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition transform hover:scale-110"
        >
          ▶
        </button>
      </motion.div>

      {/* Tech stack */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
         className="mt-[-4rem] md:mt-0 md:absolute md:bottom-10 left-0 md:left-1/2 md:-translate-x-1/2 flex flex-wrap gap-3 justify-center z-30"
      >
        {project.tech.map((t: string, i: number) => (
          <motion.span
            key={i}
            className="px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-lg border border-black/20 rounded-lg text-xs md:text-sm text-black shadow-md hover:bg-white/20 transition-all duration-200 cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
            viewport={{ once: false }}
          >
            {t}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
