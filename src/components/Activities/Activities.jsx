import React from 'react'
import LaunchIcon from '@material-ui/icons/Launch'
import {activities} from '../../portfolio'

function Activities() {
  return (
    <section id='activities' className='section activities'>
    <h2 className='section__title'>Activities</h2>
    <div className='crt_detail'>
        {activities.map((data)=>
            <h4>{data.title}      <a
            href={data.link}
            aria-label='live preview'
            className='link link--icon'
          >
            <LaunchIcon />
          </a>
            <ul>{data.description}</ul>
            </h4>
            

        
        )}
    </div>
    </section>
  )
}

export default Activities