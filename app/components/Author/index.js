/**
*
* Author
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


function Author(props) {
  const socials = props.social.map((item) => (
    <div className="col s4 center" key={item.link}>
      <a className={`btn-floating waves-effect waves-light ${item.color}`} href={item.link}>
        <i className={`fa ${item.icon}`}></i>
      </a>
    </div>
  )
  );
  return (
    <div className="col s12 m4 l4">
      <div className="card">
        <div className="card-image">
          <img alt={name} src={props.img} />
        </div>
        <div className="card-content">
          <div className="title-container">
            <span className="card-title">{props.name}</span>
          </div>
          <p>{props.about}</p>
        </div>
        <div className="card-action">
          <div className="row" style={{ marginBottom: 0 }}>
            {socials}
          </div>
        </div>
      </div>
    </div>
  );
}

Author.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  about: PropTypes.string,
  social: PropTypes.any,
};

export default Author;
