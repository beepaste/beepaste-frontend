import React from 'react';
import { Route } from 'react-router-dom';

const Wrapper = (prop) => (
  <Route
    exact path={prop.to} children={({ match }) => (<li className={match ? 'active' : ''}>
      {prop.children}
    </li>)
  }
  />
);
export default Wrapper;
