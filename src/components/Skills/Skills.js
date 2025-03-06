// import skills from '../../portfolio';
import { skills } from '../../portfolio';

import './Skills.css';

const Skills = () => {
  return (
    <section id='Skills' className="skills">
      <h2>Skills</h2>
      {skills.map((category, index) => (
        <div key={index} className="skill-category">
          <h3>{category.category}</h3>
          <ul className="skills__list">
            {category.skills.map(({ name, icon }, i) => (
              <li key={i} className="skills__list-item">
                {icon} <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;
