import React from "react";
import "../styles/Hero.css";
import profile from "../assets/profilehero.png";

const Hero = () => {
  return (
    <section id="hero" className="hero-wrapper">
      {/* TEXT SECTION */}
      <div className="hero-left">
        <p className="hero-intro">Hello Everyone, I Am</p>

        <h1 className="hero-name">
          <span className="typing-text">General Carlo Deliarte</span>
        </h1>

        <p className="hero-role">4th Year - Web Developer</p>

        <div className="hero-buttons">
          <a href="#contact" className="contact-btn">
            Contact Me
          </a>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="hero-right">
        <div className="circle-bg"></div>
        <img
          src={profile}
          alt="General Carlo Deliarte"
          className="profile-img"
        />
      </div>
    </section>
  );
};

export default Hero;
