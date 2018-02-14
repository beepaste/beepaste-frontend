/**
*
* Loading
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { makeSelectLoading } from '../../containers/App/selectors';
import logo from '../../img/icon.png';
let pleaseWait;


class Loading extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    if (typeof window !== 'undefined') {
      pleaseWait = require('please-wait').pleaseWait;  // eslint-disable-line global-require
    }
  }

  render() {
    if (pleaseWait !== undefined) {
      if (this.props.loading === true) {
        window.loading_screen = pleaseWait({
          logo,
          backgroundColor: '#ffb43e',
          loadingHtml: "<p class='loading-message'>The application is getting ready ...</p><div class='sk-spinner sk-spinner-pulse'></div>",
        });
      } else {
        if (window.loading_screen !== undefined ){
          window.loading_screen.finish();
        }
      }
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
