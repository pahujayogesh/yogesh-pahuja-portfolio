import React from 'react'
import { experience } from '../../portfolio';

function Experience() {
  const{companyname, role,date, description} = experience
  return (
    <section id='experience' className='section experience'>
    <h2 className='section__title'>Experience</h2>
    <div className='exp '>
    {companyname && (
          <h2 className='about__companyname'> {companyname}.</h2>
      )}
    {date && (
          <li>{date}</li>
      )}
    {role && (
       <h3 className='about__role'> {role}.</h3>
      )}
    {description && (
          <li>{description.Task1}</li>
      )}
    {description && (
          <li>{description.Task2}</li>
      )}
    </div>
    </section>
  )
}

export default Experience