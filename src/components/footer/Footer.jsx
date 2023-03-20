import React from 'react'
import './Footer.scss'
import { GrMail, GrMap, GrLinkedin, GrFacebook, GrGithub } from 'react-icons/gr';


const Footer = () => {

  const yearNow = new Date().getFullYear()

  return (
    <footer className='footer'>
      <div className="container">
        <nav className="footer__nav">
          <ul className='footer__nav-list'>
            <li><GrMap/><a target="/blank" href='https://goo.gl/maps/CCyXhEVUuDYbgoRx5'>Armenia, Yerevan, 13 Baghyan Street</a></li>
            <li><GrMail /><a href="mailto: grigsgog@gmail.com">grigsgog@gmail.com</a></li>
            <li><GrLinkedin /><a target="_blank" href="https://www.linkedin.com/in/grigor-safaryan-bb1b91208/" rel="noreferrer">Linkedin</a></li>
            <li><GrGithub /><a target="_blank" href="https://github.com/Grigor878" rel="noreferrer">GitHub</a></li>
            <li><GrFacebook /><a target="_blank" href="https://www.facebook.com/Grig.safaryan" rel="noreferrer">Facebook</a></li>
          </ul>
        </nav>

        <div className='footer__bottom'>
          <p>Designed and developed by Grigor Safaryan.</p>
          <span>All rights reserved {yearNow}.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer