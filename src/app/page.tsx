"use client";

import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Poppins, Merienda,Lobster_Two } from "next/font/google";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
import About from "@/components/About";
import Transition from "@/components/Transition";
import Career from "@/components/Career";
import Tout from "@/components/Tout";
const lob = Lobster_Two({ subsets: ["latin"], weight: ["400", "700"] });
const mere = Merienda({ subsets: ["latin"], weight: ["400", "600", "700"] });


export default function HomePage() {
  return (
    <>
    
<div className="h-screen w-full text-white bg-black bg-[url('/images/bg.png')] bg-center bg-cover flex flex-col">
  <Navbar/>
    <Header />
</div>
 <About/>
       <Career/>
      <Transition/>
       <Projects/>
        <Tout/>
        <ContactForm />
        <Footer />

    </>
  );
}
