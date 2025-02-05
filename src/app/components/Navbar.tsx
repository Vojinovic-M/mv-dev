import React from "react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full py-4 px-8 flex justify-center z-10">
            <ul className="flex gap-8">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#projects" className="hover:underline">Projects</a></li>
                <li><a href="#details" className="hover:underline">Details</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
        </nav>
    )
}