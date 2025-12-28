import React from 'react'
import "../Styles/Skills.css"
const skillData =[
  {name:'Html',percentage: 95},
  {name:'css',percentage:98},
  {name:'js',percentage:85},
  {name:'python',percentage:90},
  {name:'React',percentage:80},
  {name:'Django',percentage:80},
  {name:'Mysql',percentage:85},
]
function Skills() {
  return (
    <div className='skills-container'>
      <h2 className='skills-title'>My Skills</h2>
      <p className='skills-intro'>
        Below are the technologies and tools I'm proficient in, 
        along with an estimate of my confidence in each.
      </p>
      <div className='skills-list'>
          {skillData.map((skill,index)=> (
            <div className="skill-item" key={index}>
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.percentage}%</span>
              </div>
              <div className='skill-bar'>
                <div className="skill-fill" style={{width: `${skill.percentage}%`}}></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Skills
