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
          <i className="fa fa-copyright" aria-hidden="true"></i> { year } BeePaste All rights reserved by <a href="https://vahedinia.me/">MohammadAmin Vahedinia</a>
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
