import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
// import NavbarItem from '../NavbarItem/index'

function Navbar () {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <span className="icon">
              <i className="fas fa-mountain"></i>
            </span>
          </div>
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to='/projects' className="navbar-item">
              Projects
            </Link>
            <Link to='/about' className="navbar-item">
              About
            </Link>
            <a className="navbar-item" id="resume-page-button" href="assets/matthew-southcott-resume.pdf">
              Resume
            </a>
          </div>
          <div className="navbar-end">
            <a className="navbar-item" href="https://github.com/mjsouthcott">
              <span className="icon">
                <i className="fab fa-github"></i>
              </span>
            </a>
            <a className="navbar-item" href="https://www.linkedin.com/in/matthew-southcott-282923184/">
              <span className="icon">
                <i className="fab fa-linkedin"></i>
              </span>
            </a>
            <a className="navbar-item" href="https://twitter.com/mjsouthcott">
              <span className="icon">
                <i className="fab fa-twitter"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
