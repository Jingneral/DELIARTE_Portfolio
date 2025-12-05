import React from "react";
import "../styles/Projects.css"; // external styling

import portfolioImg from "../assets/projects/portfolio.png";
import leaveImg from "../assets/projects/leave-system.png";
import nemstatzImg from "../assets/projects/nemstatz.png";
import customerFeedback from "../assets/projects/customer-feedback.png"
import chatbotAssist from "../assets/projects/chatbot.png"

export default function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      desc: "A responsive web portfolio using React and Tailwind CSS.",
      img: portfolioImg,
    },
    {
      name: "Leave Application System",
      desc: "A web app for faculty and staff to apply for leaves.",
      img: leaveImg,
    },
    {
      name: "NEMStatz",
      desc: "A system for intramurals that will be serve as a digital scoreboard",
      img: nemstatzImg,
    },{
      name: "Customer Feedback System",
      desc: "A digital platform that collects and manages user feedback to help improve products, services, and overall customer satisfaction.",
      img: customerFeedback,
    },{
      name: "NEMSU Assist Chatbot",
      desc: "A chatbot assistant for Computer Science freshmen students.",
      img: chatbotAssist,
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            <div className="project-img-wrapper">
              <img src={project.img} alt={project.name} className="project-img" />
            </div>

            <h3 className="project-name">{project.name}</h3>
            <p className="project-desc">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
