/**
 *
 * SingleMenu
 *
 */

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// import styled from 'styled-components';


function SingleMenu({ to, name, iconclass }) {
  return (
    <Link to={to}><i className={iconclass} aria-hidden="true"></i><span className="textInMenuItem">{name}</span></Link>
  );
}

SingleMenu.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  iconclass: PropTypes.string,
};

export default SingleMenu;
