/**
 *
 * MyHome
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMyHome from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Link } from 'react-router-dom';
export class MyHome extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Link to="/about">about</Link>
        home
      </div>
    );
  }
}

MyHome.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  myhome: makeSelectMyHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'myHome', reducer });
const withSaga = injectSaga({ key: 'myHome', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MyHome);
