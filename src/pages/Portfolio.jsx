import React, { useState } from 'react';
import '../Styles/Portfolio.css';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.jpg';
import project6 from '../assets/project6.jpg';

function Portfolio() {
  const categories = ['ALL', 'AI', 'App Design'];
  const [activeCategory, setActiveCategory] = useState('ALL');

  const projects = [
    {
      id: 1,
      title: 'Grow App Clone',
      category: 'App Design',
      image: project1,
    },
    {
      id: 2,
      title: 'Project Management',
      category: 'Management Skills',
      image: project2,
    },
    {
      id: 3,
      title: 'Fitneess app',
      category: 'App Design',
      image: project3,
    },
    {
      id: 4,
      title: 'Chatbot',
      category: 'AI',
      image: project4,
    },
    {
      id: 5,
      title: 'Amazon',
      category: 'E-commerce',
      image: project5,
    },
    {
      id: 6,
      title: 'Netflix',
      category: 'App Design',
      image: project6,
    },
  ];

  const filteredProjects =
    activeCategory === 'ALL'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className='portfolio-page'>
      <h2 className='portfolio-heading'>My Portfolio</h2>
      <p className='portfolio-subheading'>
        Explore some projects I've worked on. Each one reflects creativity,
        problem-solving, and practical application of tech skills.
      </p>
      <div className='portfolio-filters'>
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-button ${activeCategory === category ? 'active' : ''
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className='portfolio-grid'>
        {filteredProjects.map((project) => (
          <div className='project-card' key={project.id}>
            <img src={project.image} alt={project.title} className='project-img' />
            <h3 className='project-title'>{project.title}</h3>
            <p className='project-category'>{project.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
