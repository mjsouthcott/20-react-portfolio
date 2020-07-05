import React from 'react'
import projects from '../projects.json'

function Projects () {
  return (
    <div>
      <div className="column">
        {/* Start of Article */}
        {projects.map(project => (
          <div className="box">
            <article className="columns">
              <div className="column is-two-thirds">
                <figure className="image" id={project.id} data-target={"#"+ project.dataTarget}>
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                </figure>
                {/* Start of Modal */}
                <div className="modal" id={project.dataTarget}>
                  <div className="modal-background"></div>
                  <div className="modal-content">
                    <p className="image">
                      <img
                        src={project.image}
                        alt={project.title}
                      />
                    </p>
                  </div>
                  <button className="modal-close is-large" aria-label="close"></button>
                </div>
                {/* End of Modal */}
              </div>
              <div className="column">
                <div className="content">
                  <p>
                    <strong>{project.title}</strong>
                  </p>
                  <p>
                    <small>{project.date}</small>
                  </p>
                  <p>
                    {project.description}
                  </p>
                </div>
                <nav className="level is-mobile">
                  <div className="level-left">
                    <a className="level-item" href={project.githubUrl}>
                      <span className="icon">
                        <i className="fab fa-github"></i>
                      </span>
                    </a>
                    {project.deployedAppUrl ? (
                      <a class="level-item" href={project.deployedAppUrl}>
                        <span class="icon">
                          <i class="fas fa-rocket"></i>
                        </span>
                      </a>
                    ) : null}
                  </div>
                </nav>
              </div>
            </article>
          </div>
        ))}
        {/* End of Article */}
      </div>
    </div>
  )
}

export default Projects