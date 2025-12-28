import React from 'react'
import "../Styles/Resume.css"
import { Link } from 'react-router-dom';
function Resume() {
  return (
    <div className='resume-page'>
      <h1 className='name'>Prashant Tiwari</h1>
      <p className='location'>Hyderabad,Miyapur</p>
      <p className='contact'>
        +91 7024365320 | pt911@gmail.com |
        <a href='portfolio url' target="_blank">Portfolio</a>
        <a href='linkedIn Url' target='_blank'>Linkdin</a>
      </p>
      <section>
        <h2>Objective</h2>
        <p>Motivated and curious AIML student with hands-on experience in building AI agents, machine learning models, and intelligent applications. Skilled in Python, ML algorithms, and full-stack development, with a strong interest in automation and real-world problem solving. Seeking opportunities to apply and grow my knowledge in AI and modern software development environments.</p>
      </section>
     <section>
      <h2>Education</h2>
      <ul>
        <li><strong>B-tech :</strong> AI/ML BRANCH MRUH | 2024-2028</li>
        <li><strong>Intermidiate :</strong>Chaitanya | 2022-2024</li>
        <li><strong>SSC :</strong>MNR SCHOOL</li>
      </ul>
     </section>
     <section>
      <h2> Technical Skills</h2>
      <ul>
        <li><strong>Languages: </strong>Python,C++,Java</li>
        <li><strong>Frameworks & Libraries</strong>HTML,CSS,REACT JS, DJANGO</li>
        <li><strong>TOOLS: </strong>Figma,canva,wordpress</li>
      </ul>
     </section>
     <section>
      <h2>Projects</h2>
      <div className="project">
        <h3>Complete Mern satck Authntication project</h3>
        <p>Full Stack Developer Role</p>
        <ul>
          <li>Complete autntication using mern stack </li>
          <li><strong>Tech Stack: </strong>Html,css,js,react,django</li>
        </ul>
      </div>
     </section>
     <section>
      <h2>Research Projects</h2>
      <ul>
        <li><strong>Expenses Tracker App :</strong>Expense Management System handels the expenses of user</li>
        <li><strong>Chatbot</strong>AI conversation ,analyze the data, desicion Making and Sentiment handling.</li>
      </ul>
     </section>
     <section>
      <h2>Certifications and Workshops</h2>
      <ul>
      <li><Link to='/badges'>Click here</Link></li>
        <li>Ai Agents for Beginners</li>
      </ul>
     </section>
     <section>
      <h2>Extra Curricular Activites</h2>
      <ul>
        <li><strong>Placement cell Student Coordinator</strong></li>
        <li><strong>Class Representative: </strong>Bridged Communications between students and faculty, organized acedemic discussions.</li>
      </ul>
     </section>
    </div>
  )
}

export default Resume
