'use client'
import React from "react";
import {CIcon} from "@coreui/icons-react";
import {cibGithub, cibGmail, cibLinkedin} from "@coreui/icons";

export default function Home() {

  return (
      <div className="min-h-screen w-full font-sans dark:text-white">
        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 w-full z-50 py-4 px-8 flex justify-center">
          <ul className="flex gap-8">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>

        {/* Hero Section (About Me) */}
        <section id="about" className="h-screen flex flex-col items-center justify-center text-center p-8">
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

        {/* Projects Section */}
        <section id="projects" className="min-h-screen p-8">
          <h2 className="text-3xl font-bold text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* Placeholder for project cards */}
            <div className="bg-white dark:bg-gray-700 p-4 shadow-lg rounded-lg">
              <p>Project 1</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 shadow-lg rounded-lg">
              <p>Project 2</p>
            </div>
          </div>
        </section>

        {/* Contact Section*/}
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center p-8">
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <p className="text-lg">Feel free to reach out!</p>
        </section>
      </div>
  );
}
