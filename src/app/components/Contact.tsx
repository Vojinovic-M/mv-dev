import React, {useState} from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <section id="contact" className="relative mt-40 text-white py-16">

            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 relative z-10">
                {/* Contact Info */}
                <motion.div
                    className="w-full lg:w-1/2 text-center lg:text-left"
                    initial={{opacity: 0, x: -50}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true, amount: 0.2}}
                    transition={{duration: 0.8}}
                >
                    <h2 className="text-4xl font-light mb-4">Get in Touch</h2>
                    <p className="text-lg text-gray-300 mb-6">Feel free to reach out for any collaboration or
                        inquiry.</p>
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-4">
                            <FaEnvelope className="text-2xl text-white"/>
                            <a href="mailto:vojinovic.m@protonmail.com"
                               className="text-gray-300 hover:text-white">vojinovic.m@protonmail.com</a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaGithub className="text-2xl text-white"/>
                            <a href="https://github.com/Vojinovic-M" target="_blank"
                               className="text-gray-300 hover:text-white">github.com/Vojinovic-M</a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaLinkedin className="text-2xl text-white"/>
                            <a href="https://www.linkedin.com/in/marko-vojinovic-578b14208" target="_blank"
                               className="text-gray-300 hover:text-white">linkedin.com/in/marko-vojinovic</a>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <form action="https://formsubmit.co/vojinovic.m@protonmail.com" method="POST"
                      className="w-full lg:w-1/2 bg-gray-900 p-8 rounded-lg shadow-lg"
                      onSubmit={() => setSubmitted(true)}
                >
                    <label className="block mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full p-3 mb-4 bg-gray-800 rounded-md focus:outline-none"
                        required
                    />

                    <label className="block mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="w-full p-3 mb-4 bg-gray-800 rounded-md focus:outline-none"
                        required
                    />

                    <label className="block mb-2">Message</label>
                    <textarea
                        name="message"
                        className="w-full p-3 mb-4 bg-gray-800 rounded-md focus:outline-none"
                        required
                    />

                    <button type="submit"
                            className="w-full bg-gray-100 text-black px-4 py-3 rounded-lg hover:bg-blue-200 transition">
                        { submitted ? "Message sent!" : "Send message" }
                    </button>
                </form>
            </div>
        </section>
    );
}
