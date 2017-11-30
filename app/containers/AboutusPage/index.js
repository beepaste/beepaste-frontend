/**
 *
 * AboutusPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAboutusPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class AboutusPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        salam about
      </div>
    );
  }
}

AboutusPage.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  aboutuspage: makeSelectAboutusPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps);

const withReducer = injectReducer({ key: 'aboutusPage', reducer });
const withSaga = injectSaga({ key: 'aboutusPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AboutusPage);
