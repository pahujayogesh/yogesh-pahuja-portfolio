import React from 'react'
import {certifactes} from '../../portfolio';
import './Certification.css';

function Certification() {

  return (
    <section id='certification' className='section certification'>
    <h2 className='section__title'>Certification</h2>
    <div className='crt_detail'>
        {certifactes.map((data,i)=>

            <a href={data.link} key={i}>
                <h4>{data.title}</h4>
                <img src={data.link} alt=""/>
            </a>
            

        
        )}
    </div>
    </section>
  )
}

export default Certification