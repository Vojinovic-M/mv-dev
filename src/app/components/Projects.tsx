import {useState} from "react";

const projects = [
    {
        name: "Snake Game (Functional Oriented Programming)",
        image: "/snakegame.png",
        type: "Game",
        technologies: ["JavaScript", "HTML", "CSS", "Functional programming"],
        description: "Currently deployed at https://zmijica.vercel.app/ . " +
            "A classic Snake game implemented using HTML5 Canvas and JavaScript. " +
            "It includes food mechanics, increasing speed, and collision detection.",
        links: [
            { label: "GitHub", url: "https://github.com/Vojinovic-M/zmijica" },
            { label: "Live Demo", url: "https://zmijica.vercel.app/" }
        ]
    },
    {
        name: "Full Stack Pet Shop Web Application (Angular + Spring)",
        image: "/petshop.png",
        type: "Website",
        technologies: ["Angular", "Spring Boot", "Tailwind CSS", "MySQL"],
        description: "A fully functional pet shop e-commerce platform with user authentication, a shopping cart, and order management." +
            "**NOTE**: The live demo does NOT include the backend, therefore only the frontend skeleton is usable.",
        links: [
            { label: "GitHub (Angular Frontend)", url: "https://github.com/Vojinovic-M/angular-pet-shop" },
            { label: "GitHub (Spring Backend)", url: "https://github.com/Vojinovic-M/spring-pet-shop" },
            { label: "Live Demo", url: "https://angular-pet-shop.vercel.app/" }
        ]
    },
    {
        name: "Real Estate Pricing Analysis - Amsterdam",
        image: "/realestate.png",
        type: "Data Analytics",
        technologies: ["Python", "Pandas", "Jupyter Notebook", "Matplotlib"],
        description: "An analysis of real estate price trends using Python, visualizing price fluctuations and predicting trends based on historical data.",
        links: [
            { label: "GitHub", url: "https://github.com/Vojinovic-M/python-predicting-real-estate-prices-amsterdam"},
            { label: "Google Colab Presentation", url: "https://colab.research.google.com/github/Vojinovic-M/python-predicting-real-estate-prices-amsterdam/blob/main/Amsterdam.ipynb"}
        ]
    },
];

const projectPositions = new Map([
    [0, projects[0]], // Top-left
    [4, projects[1]], // Center
    [8, projects[2]], // Bottom-right
]);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0]| null>(null);

    return (
        <div className="h-screen w-screen grid grid-cols-3 grid-rows-3">
            {[...Array(9)].map((_, index) => {
                const project = projectPositions.get(index);

                return (
                    <div
                        key={index}
                        className={`relative flex items-center justify-center overflow-hidden group ${
                            project ? "cursor-pointer" : "cursor-default"
                        }`}
                        onClick={() => project && setSelectedProject(project)}
                    >
                        {project ? (
                            <>
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="absolute w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110 brightness-75"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <h3 className="text-white text-2xl font-bold">{project.name}</h3>
                                </div>
                            </>
                        ) : (
                            <span className="text-gray-500 text-xl">Coming soon...</span>
                        )}
                    </div>
                );
            })}

            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 overflow-hidden" onClick={() => setSelectedProject(null)}>
                    <div
                        className="bg-black p-8 rounded-lg shadow-xl w-full h-[90vh] max-w-4xl overflow-y-auto relative"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                    >
                        <h2 className="text-4xl font-light mb-4 text-white text-center">{selectedProject.name}</h2>

                        {/* Links Section */}
                        <div className="flex justify-center gap-4 mb-6">
                            {selectedProject.links.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* Image Section */}
                        <div className="w-full aspect-square bg-black flex items-center justify-center mb-6">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.name}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>

                        {/* Project Details */}
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
        </div>
    );
}
