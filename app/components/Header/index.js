/**
 *
 * Header
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu';
import logo from '../../img/logotype.png';

// import styled from 'styled-components';


class Header extends React.Component {
  componentDidMount() {
    $('.button-collapse').sideNav();
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper container">
          <Link className="brand-logo" to="/">
            <img src={logo} />
          </Link>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i
            className="material-icons"
          >menu</i></a>
          <Menu id="nav-mobile" className="right hide-on-med-and-down" />
          {/* <Menu className="side-nav" id="mobile-demo"/>*/}
        </div>
      </nav>

    );
  }
}

Header.propTypes = {};

export default Header;
