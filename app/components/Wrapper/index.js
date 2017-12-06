import React from 'react';
const Wrapper = (props) => (<div className="container">
  <div className="row">
    <div className="col s12 m12">
      <div className="card">
        <div className="card-content" style={{ minHeight: '100%' }}>
          <div className="title-container"><span className="card-title">{props.title}</span></div>
          {props.children}
        </div>
      </div>
    </div>
  </div>
</div>);
export default Wrapper;
