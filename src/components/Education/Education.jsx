import React from 'react'
import {education} from '../../portfolio';
import './Education.css';

function Education() {
    const{postgradute, graduate} = education;
  return (
    <section id='education' className='section education'>
    <h2 className='section__title'>Education</h2>
    <div className="edu">
    <div className='edu1'>
    {postgradute && (
          <img src={postgradute.collegelogo} alt="college logo" width="50px" height='auto' />
      )}
    {postgradute && <h3 className='about__pstgrd'> {postgradute.collegename}.</h3>}
    {postgradute && <h4 className='about__pstgrd'> {postgradute.course}.</h4>}
    {postgradute && <p className='about__pstgrd'> {postgradute.duration}.</p>}
    </div>
    <br />
    <div className="edu2">
    {graduate && (
          <img src={graduate.collegelogo} alt="college logo" width="100px" height='auto'/>
      )}
    {graduate && <h3 className='about__pstgrd'> {graduate.collegename}.</h3>}
    {graduate && <h4 className='about__pstgrd'> {graduate.course}.</h4>}
    {graduate && <p className='about__pstgrd'> {graduate.duration}.</p>}
    </div>
    </div>
    </section>
  )
}

export default Education