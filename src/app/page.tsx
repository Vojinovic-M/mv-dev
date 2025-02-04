'use client'
import React from "react";
import Projects from "@/app/components/Projects";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Details from "@/app/components/Details";
import Contact from "@/app/components/Contact";

export default function Home() {

  return (
      <div className="">
        <Navbar />
        <Hero/>
        <Projects />
        <Details/>
        <Contact />
      </div>
  );
}
