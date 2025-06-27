import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS", "Git", "GitHub"
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
