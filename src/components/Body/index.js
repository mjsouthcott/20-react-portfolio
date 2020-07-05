import React from 'react';
import './style.css';

function Body (props) {
  return (
    <div className="container" id="body">
      <section className="section">
        <div className="columns is-centered">
          {props.children}
        </div>
      </section>
    </div>      
  )
}

export default Body
