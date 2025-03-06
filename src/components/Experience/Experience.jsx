import React from 'react';
import { experience } from '../../portfolio';
import './Experience.css';
function Experience() {
  return (
    <section id="experience" className="section experience">
      <h2 className="section__title">Experience</h2>
      <div className="exp">
        {experience.map((exp, index) => (
          <div key={index} className="experience-item">
            {exp.companyname && (
              <h2 className="about__companyname">{exp.companyname}</h2>
            )}
            {exp.date && <li>{exp.date}</li>}
            {exp.role && <h3 className="about__role">{exp.role}</h3>}
            {exp.description && (
              <ul>
                {exp.description.map((task, taskIndex) => (
                  <li key={taskIndex}>{task}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
