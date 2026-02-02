import React from "react";
import { motion } from "framer-motion";

const timelineEvents = [
    {
        heading: "2021 - 2025",
        title: "Singidunum University",
        description: "Bachelors degree in Software and Information Engineering.",
    },
    {
        heading: "Mar - May 2024",
        title: "Salesforce Developer Internship (Intermino)",
        description: "Worked with APEX, automated business processes, and enhanced problem-solving skills.",
    },
    {
        heading: "March 2025",
        title: "Application Engineer Internship (Nignite)",
        description: "Gainted experience in full-stack development using React, .NET and PostgreSQL."
    },
    {
        heading: "April 2025 - Present",
        title: "Software Engineer (Nignite)",
        description: "Contributing to full-stack projects, Azure DevOps development. Working to become the best I can be."
    }
];

const certEvents = [
    {
        heading: "Red Hat RH124",
        title: "Red Hat System Administration I",
        description: "Gained foundational knowledge in Linux system administration."
    },
    {
        heading: "IBM Certification",
        title: "Essentials of Rational Software Architect",
        description: "Learned software modeling techniques and software engineering principles."
    }
]

export default function Details() {
    return (
        <section id="details" className="min-h-screen p-8 text-white">
            <h1 className="text-4xl font-light text-center mb-8">
                Professional Journey
            </h1>

            <p className="text-center max-w-3xl mx-auto mb-12 text-gray-300">
                Throughout my academic and professional career, I've continuously pursued knowledge and hands-on experience in creating IT solutions. These are some of the key milestones that have shaped my journey as a software engineer:
            </p>

            <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mb-8 mx-auto">
                {/* Main Timeline - Left side */}
                <div className="lg:w-2/3">
                    <div className="relative before:absolute before:w-1 before:h-full before:bg-gray-400 before:left-6 md:before:left-1/2 before:-translate-x-1/2">
                        {timelineEvents.map((event, index) => (
                            <motion.div
                                key={index}
                                className="relative pl-16 md:pl-0 md:flex md:items-center mb-8"
                                initial={{opacity: 0, y: 50}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.8, delay: index * 0.2}}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-white rounded-full border-2 border-gray-400 z-10"></div>
                                
                                {/* Content - alternates sides on larger screens */}
                                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-gray-500 transition-colors">
                                        <span className="text-sm text-blue-300 font-semibold">{event.heading}</span>
                                        <h2 className="text-xl font-bold mt-1">{event.title}</h2>
                                        <p className="mt-2 text-gray-300">{event.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Side Timeline - Right side */}
                <div className="lg:w-1/3">
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                        <h2 className="text-2xl font-light mb-6 text-center text-gray-300">
                            Certifications
                        </h2>
                        
                        <div className="space-y-6">
                            {certEvents.map((event, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-blue-500"
                                    initial={{opacity: 0, x: 20}}
                                    whileInView={{opacity: 1, x: 0}}
                                    transition={{duration: 0.6, delay: index * 0.15}}
                                >
                                    <span className="text-xs text-gray-400 font-medium">{event.heading}</span>
                                    <h3 className="text-lg font-semibold mt-1">{event.title}</h3>
                                    <p className="text-sm text-gray-400 mt-1">{event.description}</p>
                                </motion.div>
                            ))}
                        </div>
                        
                        <div className="mt-8 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                            <p className="text-sm text-gray-400 text-center">
                                Additional certifications on the way...
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center text-2xl mt-32">
                <a href="/PDF.pdf" download
                   className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-6 rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all hover:scale-105 active:scale-95">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download CV
                </a>
            </div>
            
            <p className="text-center max-w-3xl mx-auto mt-4 text-gray-400 text-sm">
                I built this website myself using NextJS and TailwindCSS plus Framer Motion for a special touch.
            </p>
        </section>
    )
}