import React from 'react';
import PropTypes from 'prop-types';
const Wrapper = (props) => (<div className="container">
  <div className="row">
    <div className="col s12 m12">
      <div className="card row">
        <div className="card-content" style={{ minHeight: '100%' }}>
          <div className="title-container"><span className="card-title">{props.title}</span></div>
          {props.children}
        </div>
      </div>
    </div>
  </div>
</div>);

Wrapper.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
};
export default Wrapper;
