import React from "react";
import "./Certifications.css";
import frontEndCert from "../assets/Certificates/Front-End-Development.png";
import oracleCert from "../assets/Certificates/Oracle-Certificate.png";
import cyberCert from "../assets/Certificates/Cyber-Security-Certificate.png";


const certificationData = [
  {
    title: "Front End Development",
    issuer: "Simplilearn",
    certificate: frontEndCert,
  },
  {
    title: "Oracle Certified Foundations Associate",
    issuer: "Oracle University",
    certificate: oracleCert,
  },
  {
    title: " Cyber Security Virtual Internship", 
    issuer: "EduSkills",
    certificate: cyberCert,
  },
];

const Certifications = () => {
  const handleView = (imgSrc) => {
    window.open(imgSrc, "_blank");
  };

  return (
    <section className="certifications-section" id="certifications">
      <h2 className="certifications-title">Certifications</h2>
      <div className="certification-grid">
        {certificationData.map((item, index) => (
          <div key={index} className="certification-card">
            <h3>{item.title}</h3>
            <p className="issuer">Issued by: {item.issuer}</p>
            <button
              className="view-button"
              onClick={() => handleView(item.certificate)}
            >
              View Certificate
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
