/**
 *
 * ViewPastePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectViewPastePage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class ViewPastePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor({ match }) {
    super();
    this.match = match;
  }
  render() {
    console.log(this.match);
    return (
      <div>
      </div>
    );
  }
}

ViewPastePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  viewpastepage: makeSelectViewPastePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'viewPastePage', reducer });
const withSaga = injectSaga({ key: 'viewPastePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ViewPastePage);
