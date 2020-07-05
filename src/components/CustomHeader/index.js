import React from 'react';
import './style.css';

function CustomHeader () {
  return (
    <header>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <figure className="image">
              <img id="hero-logo" src="assets/images/logo_transparent.png" alt="Broad Peak Web Development"></img>
            </figure>
          </div>
        </div>
      </section>
    </header>
  )
}

export default CustomHeader
