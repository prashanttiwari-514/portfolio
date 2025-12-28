import React from 'react'
import "../Styles/About.css"
import img from "../assets/pic.png";
function About() {
  return (
    
    <div className='about-wrapper'>
      <h2 className="section-title">About</h2>
      <p className='section-intro'>I'm a passionate AI/ML enthusiast and skilled Full Stack Developer,
        crafting intelligent solutions with robust front-end and back-end systems.
        From predictive models to dynamic web apps, I merge data science with development.
        Driven by innovation, I build scalable, smart, and user-centric digital experiences.</p>
    <div className="about-main">
      <div className="about-left">
        <img src={img} alt=""/>
      </div>
      <div className="about-right">
        <h3>Full Stack developer</h3>
        <p>Hi, I'm a Full Stack Developer with a strong passion for Artificial Intelligence and Machine Learning.
         I specialize in building smart, scalable web applications that solve real-world problems.
         Combining modern front-end and back-end technologies with AI/ML, I create intelligent digital experiences.
        Whether it's a predictive model or a dynamic website, I love turning ideas into working solutions.
</p>
   <div className='info-grid'>
    <div className='info-item'><strong>Date of Birth :</strong>11/12/2005</div>
    <div className="info-item"><strong>Website :</strong>Check Here</div>
    <div className="info-item"><strong>Phone :</strong>7024365320</div>
    <div className="info-item"><strong>City :</strong>Hyderabad</div>
    <div className="info-item"><strong>Age :</strong>19</div>
    <div className="info-item"><strong>Degree :</strong>B.tech in cse(AI/Ml)</div>
    <div className="info-item"><strong>Email :</strong>pt911486@gmail.com</div>
    <div className="info-item"><strong>Ready To Work :</strong> Yes</div>
   </div>
   <p className='final-text'>
      In conclusion, my journey through building an E-commerce website, developing AI agents, and creating impactful ML projects reflects my ability to blend practical development with intelligent technologies.
      These projects showcase my full-stack skills, problem-solving mindset, and passion for AI/ML innovation.
      I'm committed to building smart, user-focused solutions that are both functional and future-ready.
   </p>
      </div>
    </div>
    </div>
  )
}

export default About
