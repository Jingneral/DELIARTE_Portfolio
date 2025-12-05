import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">HCI - My Portfolio</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-gray-700 font-semibold">
        <li>
          <Link
            to="hero"
            smooth={true}
            duration={700}
            className="cursor-pointer hover:text-blue-600 transition"
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={700} className="cursor-pointer hover:text-blue-600 transition">
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={700} className="cursor-pointer hover:text-blue-600 transition">
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={700} className="cursor-pointer hover:text-blue-600 transition">
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={700} className="cursor-pointer hover:text-blue-600 transition">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} className="text-gray-700 focus:outline-none">
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          {["hero", "about", "skills", "projects", "contact"].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={700}
                className="block px-6 py-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => setOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
