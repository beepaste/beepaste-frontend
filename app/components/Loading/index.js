/**
*
* Loading
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { makeSelectLoading } from '../../containers/App/selectors';
import 'please-wait/build/please-wait.css';
import 'spinkit/css/spinners/5-pulse.css';
import { pleaseWait } from 'please-wait';
import logo from '../../img/icon.png';
import { createStructuredSelector } from 'reselect';
// import styled from 'styled-components';


class Loading extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    if (this.props.loading === true) {
      window.loading_screen = pleaseWait({
        logo,
        backgroundColor: '#ffb43e',
        loadingHtml: "<p class='loading-message'>The application is getting ready ...</p><div class='sk-spinner sk-spinner-pulse'></div>",
      });
    } else {
      window.loading_screen.finish();
    }
    return (
      <div style={{ display: 'none' }}>
      </div>
    );
  }
}

Loading.propTypes = {
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
});
const withConnect = connect(mapStateToProps);

export default compose(withConnect)(Loading);
