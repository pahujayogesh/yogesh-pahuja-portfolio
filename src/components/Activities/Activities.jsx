import React from 'react'
import LaunchIcon from '@material-ui/icons/Launch'
import {activities} from '../../portfolio'
import './Activities.css';

function Activities() {
  return (
    <section id='activities' className='section activities'>
      <h2 className='section__title'>Activities</h2>
      <div className='crt_detail'>
        {activities.map((data, i) => (
          <div key={i} className='activity-card'>
            <h4>{data.title}</h4>
            
            {/* Conditionally Render Description */}
            {data.description && <p>{data.description}</p>}

            {/* Conditionally Render Link */}
            {data.link && (
              <div className='link-container'>
                <a href={data.link} aria-label='live preview' className='link link--icon' target="_blank" rel="noopener noreferrer">
                  <LaunchIcon />
                  Open
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Activities