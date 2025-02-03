'use client'
import React from "react";
import {CIcon} from "@coreui/icons-react";
import {cibGithub, cibGmail, cibLinkedin} from "@coreui/icons";
import Projects from "@/app/components/Projects";

export default function Home() {

  return (
      <div className="min-h-screen w-full dark:text-white">
        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 w-full z-50 py-4 px-8 flex justify-center">
          <ul className="flex gap-8">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#details" className="hover:underline">Details</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>

        {/* Home Section */}
        <section id="home" className="h-screen flex flex-col items-center justify-center text-center p-8">
          {/*<img src="/image.jpg" alt="Your Name" className="w-40 h-40 rounded-full mb-4 shadow-lg" />*/}
          <h1 className="text-8xl font-light p-2">Marko Vojinovic</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Software Engineering Student | Web Developer</p>
          <a href="#contact" className="mt-6 bg-white text-black px-6 py-2 rounded-md shadow-lg hover:bg-gray-300 hover:transition">Contact Me</a>
          <ul className="flex gap-2 m-2">
            <li className="min-w-8 min-h-8"><a className="fill-white" href="https://www.linkedin.com/in/marko-vojinovic-578b14208"><CIcon icon={cibLinkedin} /></a></li>
            <li className="min-w-8 min-h-8"><a className="fill-white" href="https://github.com/Vojinovic-M"><CIcon icon={cibGithub} /></a></li>
            <li className="min-w-8 min-h-8"><a className="fill-white" href="mailto:vojinovic.m@protonmail.com"><CIcon icon={cibGmail} /></a></li>
          </ul>
        </section>

        <section id="projects" className="h-screen flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-4xl font-light p-8">My Projects</h1>
        <Projects />
        </section>

        {/* Details Section */}
        <section id="details" className="min-h-screen p-8">

        </section>


        {/* Contact Section*/}
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center p-8">
          <h2 className="text-3xl font-light">Contact Me</h2>
          <p className="text-lg">Feel free to reach out!</p>
        </section>
      </div>
  );
}
