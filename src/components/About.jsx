import React from "react";
import profileImg from "../assets/profileabout.png";
import "../styles/About.css";

export default function About() {
  return (
    <section id="about" className="about-section w-full py-20 px-6 md:px-20 text-white">
      <div className="about-container max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* LEFT - IMAGE */}
        <div className="about-image-container flex justify-center md:justify-start">
          <img
            src={profileImg}
            alt="General Carlo Deliarte"
            className="about-image rounded-3xl shadow-xl"
          />
        </div>

        {/* RIGHT - CONTENT */}
        <div className="about-content flex-1">
          <p className="about-subtitle">About Me?</p>

          <h2 className="about-title">
            Learn To Develop Sites With Components And Design System
          </h2>

          <p className="about-description">
            I am General Carlo Deliarte, a passionate 4th Year BSCS student who loves building modern,
            responsive websites. I specialize in creating visually appealing user interfaces,
            structured component systems, and interactive web experiences. My goal is to design clean,
            efficient systems that improve user experience and bring ideas to life.
          </p>

          {/* Stats */}
          <div className="about-stats flex items-center gap-10 mt-10 flex-wrap">
            <div>
              <h3 className="about-stat-number">4+</h3>
              <p className="about-stat-label">Years of Experience</p>
            </div>

            <div>
              <h3 className="about-stat-number">20+</h3>
              <p className="about-stat-label">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background shapes */}
      <div className="about-bg-shape"></div>
      <div className="about-dot-pattern"></div>
    </section>
  );
}
