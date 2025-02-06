import {CIcon} from "@coreui/icons-react";
import {cibGithub, cibGmail, cibLinkedin} from "@coreui/icons";
import React from "react";

export default function Hero() {

    return (
        <section id="home" className="h-screen flex flex-col items-center justify-center text-center p-8 z-10">
            <div className="blob"></div>
            <h1 className="text-7xl font-light p-2">Marko Vojinovic</h1>
            <p className="text-lg text-gray-300">Software Engineering Student | Web Developer</p>
            <a href="#contact"
               className="mt-6 bg-white text-black px-6 py-2 rounded-md shadow-lg hover:bg-gray-300 hover:transition">Contact
                Me</a>
            {/* Social media icons */}
            <ul className="flex gap-4 m-8">
                <li className="min-w-8 min-h-8"><a className="fill-white"
                                                   href="https://www.linkedin.com/in/marko-vojinovic-578b14208">
                    <CIcon icon={cibLinkedin}/></a>
                </li>
                <li className="min-w-8 min-h-8"><a className="fill-white" href="https://github.com/Vojinovic-M">
                    <CIcon icon={cibGithub}/></a>
                </li>
                <li className="min-w-8 min-h-8"><a className="fill-white" href="mailto:vojinovic.m@protonmail.com">
                    <CIcon icon={cibGmail}/></a>
                </li>
            </ul>

        </section>
    )
}