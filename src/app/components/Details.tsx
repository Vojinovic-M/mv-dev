import React from "react";
import { motion } from "framer-motion";

const timelineEvents = [
    {
        year: "2021 - 2025",
        title: "Singidunum University",
        description: "Pursuing a degree in Software and Information Engineering.",
    },
    {
        year: "Mar - May 2024",
        title: "Salesforce Developer Internship (Intermino)",
        description: "Worked with APEX, automated business processes, and enhanced problem-solving skills.",
    },
    {
        year: "Red Hat RH124",
        title: "Red Hat System Administration I",
        description: "Gained foundational knowledge in Linux system administration.",
    },
    {
        year: "IBM Certification",
        title: "Essentials of Rational Software Architect",
        description: "Learned software modeling techniques and software engineering principles.",
    },
];

export default function Details() {
    return (
        <section id="details" className="min-h-screen p-8 text-white">
            <h1 className="text-4xl font-light text-center mb-8">
                Professional Journey
            </h1>

            <p className="text-center max-w-3xl mx-auto mb-8 text-gray-300">
                Throughout my academic and professional career, I&#39;ve continuously pursued knowledge and hands-on
                experience in creating IT solutions. These are some of the key
                milestones that have shaped my journey as a software engineer:
            </p>

            <div
                className="flex flex-col items-center relative before:absolute before:w-1 before:h-full before:bg-gray-400 before:left-1/2 before:-translate-x-1/2">
                {timelineEvents.map((event, index) => (
                    <motion.div
                        key={index}
                        className="w-full max-w-3xl p-4 flex flex-col items-center mb-6 relative"
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: index * 0.2}}
                    >
                        <div className="bg-gray-950 p-6 rounded-lg shadow-lg text-center w-3/4 border border-gray-600">
                            <h2 className="text-xl font-bold">{event.title}</h2>
                            <p className="text-gray-300 text-sm">{event.year}</p>
                            <p className="mt-2">{event.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-8">
                <a href="/Marko_Vojinovic_CV.pdf" download
                   className="bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:bg-gray-300 transition">
                    Download CV
                </a>
            </div>
            <p className="text-center max-w-3xl mx-auto mb-8 text-gray-300 mt-16">
                I built this website myself using NextJS and TailwindCSS plus Animata for a special touch.
            </p>
        </section>
    )
}