import React, { useState } from "react";
import "./Intern.css";

const internshipData = [
  {
    title: "Frontend Developer Intern - Company A",
    description: "Worked with React to build reusable UI components and collaborated on a team to enhance user experience across several web applications.",
  },
  {
    title: "UI/UX Design Intern - Company B",
    description: "Assisted in designing wireframes and prototypes using Figma and participated in user testing sessions to improve product usability.",
  },
  // Add more internships if needed
];

const Internships = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="internships-section" id="internships">
      <h2 className="internships-title">Internships</h2>
      <div className="internship-list">
        {internshipData.map((internship, index) => (
          <div className="internship-card" key={index}>
            <div className="internship-header">
              <h3>{internship.title}</h3>
              <button
                className="toggle-btn"
                onClick={() => toggleDescription(index)}
              >
                {expandedIndex === index ? "Hide" : "View"}
              </button>
            </div>
            {expandedIndex === index && (
              <p className="internship-description">{internship.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Internships;
