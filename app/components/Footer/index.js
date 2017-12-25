/**
*
* Footer
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectFooterYear } from './selectors';

function Footer(props) {
  const year = props.year;
  return (
    <footer className="page-footer sticky-footer">
      <div className="footer-copyright">
        <div className="container center">
          <i className="fa fa-copyright" aria-hidden="true"></i> 2015 - { year } <u><a className="grey-text text-lighten-5" href="https://github.com/beepaste">BeePaste</a></u> All rights reserved. Follow us on
          <a className="blue-text text-lighten-4" href="https://twitter.com/beepasteio"><i className="fa fa-twitter" aria-hidden="true"></i></a>
          <a className="black-text text-lighten-4" href="https://github.com/beepaste"><i className="fa fa-github" aria-hidden="true"></i></a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  year: PropTypes.number,
};
const mapStateToProps = createStructuredSelector({
  year: makeSelectFooterYear(),
});
export default connect(mapStateToProps)(Footer);
