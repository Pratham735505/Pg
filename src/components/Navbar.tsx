"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Mail, Book } from "lucide-react";


const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Career", href: "#career", icon: Book },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
];

const Navbar = () => (
  <nav className="sticky top-0 left-0 w-full z-50 bg-black">
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      {/* Logo + Brand */}
      <Link href="/" passHref legacyBehavior>
   
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={48}
            height={48}
            className="w-10 h-10 sm-h-12 sm-w-12 object-cover hover:animate-pulse"
          />
          
        
      </Link>

      {/* Navigation Links */}
      <ul className="flex gap-6">
  {navLinks.map(({ name, href, icon: Icon }) => (
    <motion.li
      key={name}
      whileHover={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <a
        href={href}
        className="flex items-center gap-1 text-white hover:text-blue-600 transition-colors duration-200 text-2xl"
      >
        <Icon className="w-5 h-5" />
        <span className="hidden sm:inline">{name}</span>
      </a>
    </motion.li>
  ))}
</ul>

    </div>
  </nav>
);

export default Navbar;
