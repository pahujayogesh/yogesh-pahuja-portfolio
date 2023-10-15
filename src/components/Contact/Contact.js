import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className="contact_info">
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a><br />
      <a href={`${contact.linkedin}`}>
        <span type='button' className='btn btn--outline'>
          LinkedIn
        </span>
      </a>
      <br />
      <a href={`${contact.github}`}>
        <span type='button' className='btn btn--outline'>
          GitHub
        </span>
      </a>
      </div>
    </section>
  )
}

export default Contact
