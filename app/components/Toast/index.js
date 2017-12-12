/**
*
* Toast
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectError } from '../../containers/App/selectors';
import { errorEndShowing } from '../../containers/App/actions';
// import styled from 'styled-components';


class Toast extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    if (this.props.error !== false) {
      Materialize.toast(this.props.error, 3000, '', this.props.clearError);
    }
    return (
      <div style={{ display: 'none' }}></div>
    );
  }
}

Toast.propTypes = {
  error: PropTypes.any.isRequired,
  clearError: PropTypes.func,
};
export function mapDispatchToProps(dispatch) {
  return {
    clearError: () => {
      dispatch(errorEndShowing());
    },
  };
}
const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Toast);
