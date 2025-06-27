import React from "react";
import Profile from "../assets/Profile.jpg";
import "./Home.css";
import "./Icons.css";

const Home = () => {
  return (
    <section className="home-wrapper">
      <div className="home-section">
        <div className="home-content">
          <h2>Hello, Everyone </h2>
          <h1>SYAM SAI KUMAR ARAVA</h1>
          <h3>
            And I'm a <span className="highlight">Frontend Developer</span>
          </h3>
          <p>Web Developer | Designer | Tech Enthusiast</p>
          
          <div className="social-icons">
  <a href="https://github.com/your-github-username" target="_blank" rel="noreferrer">
    <img
      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
      alt="GitHub"
      className="icon"
    />
  </a>
  <a href="https://linkedin.com/in/your-linkedin-id" target="_blank" rel="noreferrer">
    <img
      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
      alt="LinkedIn"
      className="icon"
    />
  </a>
  <a href="mailto:youremail@gmail.com">
    <img
      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg"
      alt="Gmail"
      className="icon"
    />
  </a>
</div>

          <a href="/resume.pdf" download className="btn">Download CV</a>
        </div>
        <div className="home-image">
          <img src={Profile} alt="Syam Sai"/>
        </div>
      </div>
    </section>
  );
};

export default Home;
