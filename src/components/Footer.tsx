"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail ,Library} from "lucide-react";


const socials = [
  { href: "https://github.com/pratham735505", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/pratham-gupta-73a380255/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://x.com/pratham735505", icon: Twitter, label: "Twitter" },
  { href: "mailto:prathamgupta735505@gmail.com", icon: Mail, label: "Email" },
  {href:"https://medium.com/@pratham735505/", icon:Library, label:"Medium"}
];

const Footer = () => (
  <footer className="w-full bg-black py-6 mt-12">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
      <div className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Pratham Gupta. All rights reserved.</div>
      <div className="flex gap-5">
        {socials.map(({ href, icon: Icon, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{ scale: 1.2, boxShadow: "0 0 12px #a259f7" }}
            className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
          >
            <Icon className="w-6 h-6" />
          </motion.a>
        ))}
      </div>
    </div>
    <center><img src="/images/logo.png" height={48} width={68}/></center>
  </footer>
);

export default Footer; 
