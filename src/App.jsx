import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Projects from './Components/Projects';
import './App.css';
import Skills from './Components/Skills';
import Internships from './Components/Internships';
import Certifications from './Components/Certifications';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <div class="app-container">
      <Navbar />
      <Home />  
      <Skills />
      <Internships />
      <Projects />
      <Certifications />
      <Footer/>
      </div>
    </>
  );
}

export default App;
