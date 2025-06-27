import React from "react";
import "./Projects.css";

const projectData = [
  {
    title: "E-Commerce Shopping Cart",
    description: "	Developed a responsive e-commerce shopping cart application using React.js, featuring a user-friendly UI for seamless product browsing, search functionality, and cart management. Users can add, remove, and update items, ensuring a smooth shopping experience across mobile and desktop devices. Additionally, if implemented, a secure checkout process enhances transaction safety and user trust.",
    tech: ["React"," HTML"," Bootstrap","CSS", "JavaScript"],
    link: "https://shopping-cart-react-psi-nine.vercel.app/",
  },
  {
    title: "Weather App",
    description: "An app that fetches real-time weather data using the OpenWeatherMap API.",
    tech: ["React", "API", "Bootstrap"],
    link: "https://your-weather-app-link.com",
  },
  {
    title: "To-Do List",
    description: "A simple to-do list app with local storage functionality.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://your-todo-list-link.com",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
