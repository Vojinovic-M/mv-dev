import React, { useState } from "react";
import Expandable, { projects } from "@/components/carousel/expandable";
import Image from "next/image";


export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="projects" className="h-screen w-full flex flex-col text-center p-8">
            <h1 className="text-4xl font-light p-8">Selected Projects</h1>

            <p className="mb-12 mt-20 font-light max-w-7xl mx-auto">
                These projects cover much of my frontend, backend and functional JS capabilities.
                Not only that, but also my data analysis skills in Python.<br/> I especially take great pride in
                my Angular Pet Shop project because it took a lot of effort and it gave me an infinitely better
                understanding of Angular and frontend technologies in general.
                <br/><br/> And now, I&#39;m translating that
                same knowledge into NextJS by building this website. The carousel below was made using an Animata component
                which I&#39;ve modified to map my own data through an array of items. You will find detailed descriptions
                of all 3 projects on their GitHub pages!
            </p>
            {/* Expandable Carousel */}
            <Expandable
                {...projects.map((project, index) => (
                    <div key={index} onClick={() => setSelectedProject(project)}>
                        <Image src={project.image} alt={project.name} />
                    </div>
                ))}
                autoPlay={true}
                className="mx-auto max-w-7xl h-1/2"
                onClick={(index) => setSelectedProject(projects[index])} // Open modal on click
            />

            {/* Project Details Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 overflow-hidden z-20"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="bg-black p-8 rounded-lg shadow-xl w-full h-[90vh] max-w-4xl overflow-y-auto relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-4xl font-light mb-4 text-white text-center">{selectedProject.name}</h2>

                        {/* Links */}
                        <div className="flex justify-center gap-4 mb-6">
                            {selectedProject.links.map((link, index) => (
                                <a key={index}
                                   href={link.url}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* Image */}
                        <div className="w-full aspect-square bg-black flex items-center justify-center mb-6">
                            <Image
                                src={selectedProject.image}
                                alt={selectedProject.name}
                                width={1000}
                                height={1000}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>

                        {/* Details */}
                        <ul className="text-left space-y-2 text-lg text-gray-300 mb-6">
                            <li><strong>Type:</strong> {selectedProject.type}</li>
                            <li><strong>Technologies:</strong> {selectedProject.technologies.join(", ")}</li>
                            <li><strong>Description:</strong> {selectedProject.description}</li>
                        </ul>

                        {/* Close Button */}
                        <div className="flex justify-center">
                            <button
                                className="bg-white text-black px-6 py-3 rounded-lg hover:text-blue-600 transition text-lg font-semibold"
                                onClick={() => setSelectedProject(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
