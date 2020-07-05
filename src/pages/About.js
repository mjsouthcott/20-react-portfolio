import React from 'react'

function About () {
  return (
    <div className="column is-half">
      <div className="box">
        <article>
          <figure className="image is-square" id="profile-photo" data-target="#profile-modal">
            <img src="assets/images/bio.jpg" alt="Coast Mountain bliss" />
          </figure>
          {/* Start of Modeal */}
          <div className="modal" id="profile-modal">
            <div className="modal-background"></div>
            <div className="modal-content">
              <p className="image">
                <img src="assets/images/bio.jpg" alt="Coast Mountain bliss" />
              </p>
            </div>
            <button className="modal-close is-large" aria-label="close"></button>
          </div>
          {/* End of Modal */}
          <div className="content">
            <p className="title is-4">Matthew Southcott</p>
            <p>
              Electrical and Mechanical Engineering Officer in the
              Canadian Armed Forces with experience working in
              maintenance management, project and operations roles
              across Canada.
            </p>
            <p>
              Interested in artificial intelligence, data science and
              full stack development for applications in defence, fleet
              maintenance and logistics.
            </p>
            <p>
              <span className="icon">
                <i className="fas fa-phone"></i>
              </span>
              (587) 281-2667
            </p>
            <p>
              <span className="icon">
                <i className="fas fa-envelope"></i>
              </span>
              <a href="mailto:mjsouthcott@gmail.com">
                mjsouthcott@gmail.com
              </a>
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}

export default About